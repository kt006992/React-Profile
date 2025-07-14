import React from 'react';

const StatCard = ({ title, value, children }) => {
  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value">{value}</p>
      {children}
    </div>
  );
};

export default StatCard;