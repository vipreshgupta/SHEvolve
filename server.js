import express from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: [
    "https://shevolve.netlify.app",
    "http://localhost:3000", // For local development
    "http://localhost:5173"  // For Vite development
  ],
  methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Add OPTIONS handler for preflight requests
app.options('*', cors());
app.use(express.json());

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const DB_NAME = 'shevolve';

let db;

MongoClient.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log('✅ Connected to MongoDB');
    db = client.db(DB_NAME);
  })
  .catch((error) => {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  });
// API Routes
// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'SHEvolve Backend API is running',
    timestamp: new Date(),
    version: '1.0.0'
  });
});
// POST: Join Revolution
app.post('/api/revolution/join', async (req, res) => {
  try {
    const collection = db.collection('revolution_members');
    
    const formData = req.body;
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.location || !formData.interest) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Create document
    const document = {
      ...formData,
      submittedAt: new Date(),
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.headers['user-agent'],
      status: 'pending',
      contacted: false,
      notes: ''
    };

    // Insert into database
    const result = await collection.insertOne(document);

    res.status(201).json({
      success: true,
      message: 'Successfully joined the revolution!',
      id: result.insertedId
    });

  } catch (error) {
    console.error('Error inserting document:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: error.message
    });
  }
});

// GET: Retrieve all members (admin endpoint)
app.get('/api/revolution/members', async (req, res) => {
  try {
    const collection = db.collection('revolution_members');
    const members = await collection.find({}).sort({ submittedAt: -1 }).toArray();
    
    res.status(200).json({
      success: true,
      count: members.length,
      data: members
    });

  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

// GET: Retrieve single member by ID
app.get('/api/revolution/members/:id', async (req, res) => {
  try {
    const collection = db.collection('revolution_members');
    
    const member = await collection.findOne({ _id: new ObjectId(req.params.id) });
    
    if (!member) {
      return res.status(404).json({
        success: false,
        error: 'Member not found'
      });
    }

    res.status(200).json({
      success: true,
      data: member
    });

  } catch (error) {
    console.error('Error fetching member:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

// PATCH: Update member status (admin endpoint)
app.patch('/api/revolution/members/:id', async (req, res) => {
  try {
    const collection = db.collection('revolution_members');
    
    const { status, contacted, notes } = req.body;
    
    const result = await collection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { 
        $set: { 
          status,
          contacted,
          notes,
          updatedAt: new Date()
        } 
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        error: 'Member not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Member updated successfully'
    });

  } catch (error) {
    console.error('Error updating member:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

// DELETE: Delete member (admin endpoint)
app.delete('/api/revolution/members/:id', async (req, res) => {
  try {
    const collection = db.collection('revolution_members');
    
    const result = await collection.deleteOne({ _id: new ObjectId(req.params.id) });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        error: 'Member not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Member deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting member:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

// GET: Statistics (admin endpoint)
app.get('/api/revolution/stats', async (req, res) => {
  try {
    const collection = db.collection('revolution_members');
    
    const totalMembers = await collection.countDocuments();
    const pendingMembers = await collection.countDocuments({ status: 'pending' });
    const contactedMembers = await collection.countDocuments({ contacted: true });
    
    // Get interest breakdown
    const interestStats = await collection.aggregate([
      {
        $group: {
          _id: '$interest',
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    // Get contribution breakdown
    const contributionStats = await collection.aggregate([
      { $unwind: '$contribution' },
      {
        $group: {
          _id: '$contribution',
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    res.status(200).json({
      success: true,
      stats: {
        total: totalMembers,
        pending: pendingMembers,
        contacted: contactedMembers,
        byInterest: interestStats,
        byContribution: contributionStats
      }
    });

  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📍 API endpoint: http://localhost:${PORT}/api/revolution/join`);
});