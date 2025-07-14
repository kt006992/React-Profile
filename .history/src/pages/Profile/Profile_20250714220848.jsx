import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleShowResume = () => {
    setShowResumeModal(true);
  };

  const handleCloseModal = () => {
    setShowResumeModal(false);
  };

  return (
    <div className="profile-page">
      {/* 导航栏 */}
      <header className="profile-header">
        <div className="nav-container">
          <div className="logo">
            👋
          </div>
          <nav className="nav-menu">
            {/* <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#blog" className="nav-link">Blog</a> */}
            <button className="connect-btn">Connect</button>
          </nav>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className="profile-main">
        <div className="content-container">
          {/* 左侧内容 */}
          <div className="content-left">
            <div className="location">
              <span className="location-icon">📍</span>
              <span className="location-text">Perth, Western Australia</span>
            </div>
            
            <h1 className="main-title">
              I am a
              <br />
              <span className="highlight">Fresh Postgraduated SDE</span>
              <br />
              That Looking for
              <br />
              <span className="highlight">Work Opportunity</span>
            </h1>
            
            <p className="description">
              I have many hand-on skills and keep the enthusiasm for learning.
            </p>
            
            <div className="cta-buttons">
              <button className="btn-primary" onClick={handleShowResume}>See my work</button>
              <button className="btn-secondary" onClick={() => window.open('https://www.linkedin.com/in/runtian-liang-mpe-sde', '_blank')}>Go to Linkedin</button>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="content-right">
            <div className="profile-image-container">
              <div className="decorative-dots"></div>
              <div className="profile-image">
                <img 
                  src="/images/Selfie.jpg" 
                  alt="Profile" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* PDF简历浮窗 */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={handleCloseModal}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>My Resume</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                ✕
              </button>
            </div>
            <div className="modal-content">
              <iframe
                src="/resume/RTL_Resume.pdf"
                width="100%"
                height="600px"
                title="Resume"
                style={{ border: 'none' }}
              />
            </div>
            <div className="modal-actions">
              <button 
                className="download-btn"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume/resume.pdf';
                  link.download = 'Runtian_Liang_Resume.pdf';
                  link.click();
                }}
              >
                📥 Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;