import React, { useState } from 'react';
import Notes from '../Notes/Notes'; 
import Projects from '../Projects/Projects'; 
import Navigation from '../../components/Navigation/Navigation'; 
import profileData from './ProfileData'; 
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
    const email = profileData.personal.email;
    const subject = profileData.email.subject;
    const body = profileData.email.bodyTemplate;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
  };

  const handlePageChange = (pageKey) => {
    setCurrentPage(pageKey);
  };

  // 渲染主页内容
  const renderHomeContent = () => (
    <div className="content-container">
      {/* 左侧内容 */}
      <div className="content-left">
        <div className="location">
          <span className="location-icon">{profileData.icons.location}</span>
          <span className="location-text">{profileData.personal.location}</span>
        </div>
        
        <h1 className="main-title">
          {profileData.hero.greeting}
          <br />
          <span className="highlight">{profileData.hero.title}</span>
          <br />
          {profileData.hero.subtitle}
          <br />
          <span className="highlight">{profileData.hero.highlight}</span>
        </h1>
        
        <p className="description">
          {profileData.hero.description}
        </p>
        
        <div className="cta-buttons">
          <button className="btn-primary" onClick={handleShowResume}>
            {profileData.buttons.seeResume}
          </button>
          <button 
            className="btn-secondary" 
            onClick={() => window.open(profileData.personal.linkedin, '_blank')}
          >
            {profileData.buttons.goToLinkedin}
          </button>
          <button 
            className="btn-github" 
            onClick={() => window.open(profileData.personal.github, '_blank')}
          >
            {profileData.buttons.myGithub}
          </button>
        </div>
      </div>

      {/* 右侧内容 */}
      <div className="content-right">
        <div className="profile-image-container">
          <div className="decorative-dots"></div>
          <div className="profile-image">
            <img 
              src={profileData.personal.profileImage} 
              alt="Profile" 
            />
          </div>
        </div>
      </div>
      
      {/* 右下方独立内容区域 */}
      <div className="content-bottom-right">
        <div className="content-section">
          <div className="section-title">
            {profileData.about.icon} {profileData.about.title}
          </div>
          <p className="section-text">
            {profileData.about.content}
          </p>
          
          <div className="section-title">
            {profileData.skills.icon} {profileData.skills.title}
          </div>
          
          {Object.entries(profileData.skills.categories).map(([key, category]) => (
            <p key={key} className="section-text">
              {category.label}: {category.items}
            </p>
          ))}
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
      {/* 使用独立的导航组件 */}
      <Navigation 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onConnect={handleConnect}
        className="profile-navigation"
      />

      {/* 主要内容区域 */}
      <main className={`profile-main ${currentPage === 'home' ? 'home-layout' : ''}`}>
        {renderCurrentPage()}
      </main>

      {/* PDF简历浮窗 */}
      {showResumeModal && (
        <div className="resume-modal-overlay" onClick={handleCloseModal}>
          <div className="resume-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{profileData.modal.resumeTitle}</h2>
              <button className="close-btn" onClick={handleCloseModal}>
                {profileData.modal.closeButton}
              </button>
            </div>
            <div className="modal-content">
              <iframe
                src={profileData.personal.resume}
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
                  link.href = profileData.personal.resume;
                  link.download = profileData.modal.downloadFilename;
                  link.click();
                }}
              >
                {profileData.buttons.downloadResume}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;