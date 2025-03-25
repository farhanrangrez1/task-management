import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BsListTask, BsBell, BsCalendar4, BsClock } from 'react-icons/bs';
import { VscProject, VscAccount, VscSignOut } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

function Header() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Add click outside handler to close profile menu
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.profile-dropdown')) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="admin-dashboard-header">
      <div className="admin-search-wrapper">
      <button className="btn d-flex align-items-center" style={{ backgroundColor: '#4F46E5', color: 'white' }}>
              <i className="bi bi-clock me-2"></i> Clock In
            </button>
      </div>
      <div className="admin-header-right">
        <div className="admin-notification">
          <BsBell size={20} />
          <span className="admin-notification-dot"></span>
        </div>
        
        <div className="profile-dropdown">
          <div 
            className="profile-trigger" 
            onClick={(e) => {
              e.stopPropagation();
              setShowProfileMenu(!showProfileMenu);
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s"
              alt="User"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
            <span>Farhan</span>
          </div>

          {showProfileMenu && (
            <div className="profile-menu">
              <div className="profile-header">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s"
                  alt="User"
                  className="profile-avatar"
                />
                <div className="profile-info">
                  <h3>Farhan Ragrez</h3>
                  <p>farhanragrez@gmail.com</p>
                </div>
              </div>
              <div className="profile-footer">
                <div className="sync-status">
                  <Link to="/employee/profile" className="customize-link">
                    <VscAccount size={18} />
                    <span>Profile</span>
                  </Link>
                </div>
                <Link to="/" className="customize-link">
                  <VscSignOut size={18} />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;