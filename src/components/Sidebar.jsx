import React from 'react';
import { 
  Search, 
  Home, 
  ShoppingCart, 
  Calendar, 
  Users, 
  BarChart3, 
  Beaker, 
  BookOpen,
  ChevronDown
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: ShoppingCart, label: 'Orders' },
    { icon: Calendar, label: 'Events' },
    { icon: Users, label: 'Speakers', badge: '4' },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Beaker, label: 'Experimental Features', experimental: true }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">UI</div>
          <span className="logo-text">UI Foundations</span>
          <ChevronDown size={16} className="logo-chevron" />
        </div>
        
        {/* 搜索框 */}
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input 
            type="text" 
            placeholder="Quick actions"
            className="search-input"
          />
        </div>

        {/* 导航菜单 */}
        <nav>
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className={`nav-item ${item.active ? 'active' : ''} ${item.experimental ? 'experimental' : ''}`}
              >
                <Icon size={16} />
                <span>{item.label}</span>
                {item.badge && <div className="nav-badge">{item.badge}</div>}
              </div>
            );
          })}
        </nav>

        {/* 底部信息 */}
        <div className="getting-started">
          <div className="getting-started-title">
            Get started in the app
          </div>
          <div className="getting-started-subtitle">
            2/7 steps completed
          </div>
        </div>

        <div className="nav-item changelog-item">
          <BookOpen size={16} />
          <span>Changelog</span>
        </div>

        {/* 用户信息 */}
        <div className="user-profile">
          <div className="user-avatar">A</div>
          <span className="user-name">Ally Allen</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;