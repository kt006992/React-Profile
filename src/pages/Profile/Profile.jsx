import React, { useState } from 'react';
import Notes from '../Notes/Notes'; // 引入Notes组件
import Projects from '../Projects/Projects'; // 引入Projects组件
import './Profile.css';

const Profile = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const handleShowResume = () => {
    setShowResumeModal(true);
  };

  const handleCloseModal = () => {
    setShowResumeModal(false);
  };

  const handleConnect = () => {
    const email = 'klaytime31@gmail.com';
    const subject = 'Connection Request from Your Portfolio';
    const body = `<example>Hi Runtian,

I visited your portfolio website and would like to connect with you.

Best regards,
[Your Name]`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
  };

  // 渲染主页内容
  const renderHomeContent = () => (
    <div className="content-container">
      {/* 左侧内容 */}
      <div className="content-left">
        <div className="location">
          <span className="location-icon">📍</span>
          <span className="location-text">Perth, Western Australia</span>
        </div>
        
        <h1 className="main-title">
          Hello, I am a
          <br />
          <span className="highlight">Graduated Software Engineer (From Bachelor to Master)</span>
          <br />
          That Looking for
          <br />
          <span className="highlight">Work Opportunity</span>
        </h1>
        
        <p className="description">
          I have many hand-on skills and keep the enthusiasm for learning.
        </p>
        
        <div className="cta-buttons">
          <button className="btn-primary" onClick={handleShowResume}>See my resume</button>
          <button className="btn-secondary" onClick={() => window.open('https://www.linkedin.com/in/runtian-liang-mpe-sde', '_blank')}>Go to Linkedin</button>
          <button className="btn-github" onClick={() => window.open('https://github.com/kt006992', '_blank')}>My GitHub</button>
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
  );

  // 根据当前页面渲染相应内容
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'home':
        return renderHomeContent();
      case 'projects':
        return <Projects />;
      case 'notes':
        return <Notes />;
      default:
        return renderHomeContent();
    }
  };

  return (
    <div className="profile-page">
      {/* 导航栏 */}
      <header className="profile-header">
        <div className="nav-container">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            👋
          </div>
          <nav className="nav-menu">
            <a 
              href="#home" 
              className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('home');
              }}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('projects');
              }}
            >
              Projects
            </a>
            <a 
              href="#notes" 
              className={`nav-link ${currentPage === 'notes' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('notes');
              }}
            >
              Notes
            </a>
            <a href="#services" className="nav-link">Continuely Updating ... </a>
            <button className="connect-btn" onClick={handleConnect}>Connect</button>
          </nav>
        </div>
      </header>

      {/* 主要内容区域 */}
      <main className={`profile-main ${currentPage === 'home' ? 'home-layout' : ''}`}>
        {renderCurrentPage()}
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