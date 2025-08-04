import React, { useState } from 'react';
import navigationData from './NavigationData';
import './Navigation.css';

const Navigation = ({ 
  currentPage, 
  onPageChange, 
  onConnect,
  className = "" 
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handling page switching
  const handlePageChange = (pageKey) => {
    if (onPageChange) {
      onPageChange(pageKey);
    }
    setIsMobileMenuOpen(false); //Close after switching the mobile menu
  };

  // Handling Connect button click
  const handleConnect = () => {
    const { email, emailSubject, emailTemplate } = navigationData.contact;
    
    if (onConnect) {
      // If a custom connect handler is provided
      onConnect();
    } else {
      // Default email handling
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailTemplate)}`;
      window.open(gmailUrl, '_blank');
    }
    
    setIsMobileMenuOpen(false);
  };

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 渲染菜单项 
  const renderMenuItem = (item) => {
    const isActive = currentPage === item.key;
    const isDisabled = item.disabled;

    return (
      <a
        key={item.key}
        href={item.href}
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          if (!isDisabled) {
            handlePageChange(item.key);
          }
        }}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className={`navigation-header ${className}`}>
      <div className="nav-container">
        <div 
          className="nav-logo" 
          onClick={() => handlePageChange('home')}
        >
          {navigationData.logo.icon}
        </div>

        <nav className="nav-menu desktop-menu">
          {navigationData.menuItems.map(renderMenuItem)}
          {navigationData.secondaryItems.map(renderMenuItem)}

          {/* Connect */}
          <button 
            className="nav-cta-button"
            onClick={handleConnect}
          >
            {navigationData.ctaButton.label}
          </button>
        </nav>

        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav className={`nav-menu mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navigationData.menuItems.map(renderMenuItem)}
          {navigationData.secondaryItems.map(renderMenuItem)}

          {/* Connect */}
          <button 
            className="nav-cta-button"
            onClick={handleConnect}
          >
            {navigationData.ctaButton.label}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;