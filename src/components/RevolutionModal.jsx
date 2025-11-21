import React, { useState } from 'react';
import { X, UserPlus, Mail, Phone, MapPin, Building2, Users, MessageSquare, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RevolutionModal = ({ isOpen, onClose, darkMode }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    role: '',
    location: '',
    interest: '',
    message: '',
    contribution: []
  });
  const navigate = useNavigate(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contributionOptions = [
    'Financial Support',
    'Technical Expertise',
    'Distribution Network',
    'Research Collaboration',
    'Awareness Campaign',
    'Pilot Testing'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (option) => {
    setFormData(prev => ({
      ...prev,
      contribution: prev.contribution.includes(option)
        ? prev.contribution.filter(item => item !== option)
        : [...prev.contribution, option]
    }));
  };

  // In RevolutionModal.jsx - Update the fetch URL
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://shevolve-backend.onrender.com/api/revolution/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        }),
      });

      const data = await response.json(); // Add this line to parse response

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            organization: '',
            role: '',
            location: '',
            interest: '',
            message: '',
            contribution: []
          });
          setSubmitStatus(null);
          onClose();
        }, 2000);
      } else {
        console.error('Server error:', data); // Log server error
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border-4 border-pink-500 ${darkMode ? 'bg-gray-900' : 'bg-white'
        }`}>
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-pink-500 to-pink-600 p-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-pink-200 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-2">
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Join the Revolution! 🌸
            </h2>
            <p className="text-white text-lg" style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Be part of the change in sustainable menstrual hygiene
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Success/Error Message */}
          {submitStatus === 'success' && (
            <div className="bg-green-100 border-2 border-green-500 text-green-700 p-4 rounded-xl text-center">
              <p className="font-bold text-lg" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                🎉 Welcome to the Revolution!
              </p>
              <p style={{ fontFamily: 'Gabarito, sans-serif' }}>
                We'll be in touch soon!
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-100 border-2 border-red-500 text-red-700 p-4 rounded-xl text-center">
              <p className="font-bold" style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Oops! Something went wrong. Please try again.
              </p>
            </div>
          )}

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-pink-500 flex items-center gap-2`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              <UserPlus className="w-6 h-6" />
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  style={{ fontFamily: 'Gabarito, sans-serif' }}
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  style={{ fontFamily: 'Gabarito, sans-serif' }}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  style={{ fontFamily: 'Gabarito, sans-serif' }}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Location */}
              <div>
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  style={{ fontFamily: 'Gabarito, sans-serif' }}
                  placeholder="City, State"
                />
              </div>
            </div>
          </div>

          {/* Organization Information */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-pink-500 flex items-center gap-2`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              <Building2 className="w-6 h-6" />
              Organization Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Organization */}
              <div>
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Organization/Institution
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  style={{ fontFamily: 'Gabarito, sans-serif' }}
                  placeholder="Your organization name"
                />
              </div>

              {/* Role */}
              <div>
                <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                  Your Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                    }`}
                  style={{ fontFamily: 'Gabarito, sans-serif' }}
                  placeholder="e.g., Student, NGO Worker, Researcher"
                />
              </div>
            </div>
          </div>

          {/* Interest Area */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-pink-500 flex items-center gap-2`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              <Users className="w-6 h-6" />
              Your Interest
            </h3>

            <div>
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                How would you like to contribute? *
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
              >
                <option value="">Select your primary interest</option>
                <option value="implementing">Implementing in my institution</option>
                <option value="funding">Providing funding/investment</option>
                <option value="partnership">Partnership opportunity</option>
                <option value="research">Research collaboration</option>
                <option value="distribution">Distribution network</option>
                <option value="awareness">Spreading awareness</option>
                <option value="volunteer">Volunteering</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Contribution Areas */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-pink-500`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Areas of Contribution
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              Select all that apply
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {contributionOptions.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.contribution.includes(option)
                      ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/20'
                      : 'border-pink-300 hover:border-pink-400'
                    } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <input
                    type="checkbox"
                    checked={formData.contribution.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-5 h-5 text-pink-500 rounded focus:ring-pink-500"
                  />
                  <span className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h3 className={`text-2xl font-bold text-pink-500 flex items-center gap-2`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
              <MessageSquare className="w-6 h-6" />
              Tell Us More
            </h3>

            <div>
              <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none transition-colors resize-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                  }`}
                style={{ fontFamily: 'Gabarito, sans-serif' }}
                placeholder="Share your ideas, questions, or how you envision contributing to the SHEvolve revolution..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-12 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-black text-xl rounded-full shadow-xl transform transition-all ${isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:scale-105 hover:shadow-2xl'
                }`}
              style={{ fontFamily: 'Gabarito, sans-serif' }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Join the Revolution! 🚀'
              )}
            </button>
          </div>

          <p className={`text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} style={{ fontFamily: 'Gabarito, sans-serif' }}>
            By submitting, you agree to be contacted by the SHEvolve team
          </p>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default RevolutionModal;