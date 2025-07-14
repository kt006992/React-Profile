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
              欢迎来到我的应用
            </h1>
            
            <div className="button-container">
              <button 
                className="nav-button dashboard"
                onClick={() => { window.location.href = '/home'; }}
              >
                📊 跳转到Dashboard
              </button>
              
              <button 
                className="nav-button profile"
                onClick={() => { window.location.href = '/profile'; }}
              >
                👋 跳转到Profile页面
              </button>
            </div>
            
            <p className="home-description">
              这是一个包含Dashboard和Profile页面的演示应用，点击上方按钮来探索不同的页面功能。
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