import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom"; // <-- add useLocation
 
import LandingPage from './pages/LandingPage';
 

function App() { 
  const navigate = useNavigate(); 
   
  return (
    <div> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App
