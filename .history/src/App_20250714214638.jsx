import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="home-container">
            <h1 className="home-title">
              Welcome to My App
            </h1>
            
            <div className="button-container">
              <button 
                className="nav-button dashboard"
                onClick={() => { window.location.href = '/home'; }}
              >
                📊 Go to Dashboard
              </button>
              
              <button 
                className="nav-button profile"
                onClick={() => { window.location.href = '/profile'; }}
              >
                👋 Go to Profile
              </button>
            </div>
            
            <p className="home-description">
              This is a demo app with Dashboard and Profile pages. Click the buttons above to explore different features.
            </p>
          </div>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App