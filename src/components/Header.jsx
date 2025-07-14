import React from 'react';

const Header = ({ title = "Home", subtitle = "Welcome back, Ally" }) => {
  return (
    <div className="header">
      <div>
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
      </div>
      <div className="header-buttons">
        <button className="button button-secondary">
          Customize Theme
        </button>
        <button className="button button-primary">
          Take a Tour
        </button>
      </div>
    </div>
  );
};

export default Header;