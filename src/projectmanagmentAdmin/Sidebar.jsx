import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsChatSquareDots, BsCalendar4, BsClock, BsListTask, BsShield } from 'react-icons/bs';
import { VscProject } from 'react-icons/vsc';
import { FaMapMarkerAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      path: '/admin',
      name: 'Dashboard',
      icon: <AiOutlineHome size={18} />
    },
    {
      path: '/admin/employeeTable',
      name: 'Employees',
      icon: <HiOutlineUsers size={18} />
    },
    {
      path: '/admin/communicationTable',
      name: 'Communication',
      icon: <BsChatSquareDots size={18} />
    },
    {
      path: '/admin/schedulingTable',
      name: 'Scheduling',
      icon: <BsCalendar4 size={18} />
    },
    {
      path: '/admin/newScheduling',
      name: 'Time Tracking',
      icon: <BsClock size={18} />
    },
    {
      path: '/admin/tasksOverview',
      name: 'Tasks',
      icon: <BsListTask size={18} />
    },
    {
      path: '/admin/projects',
      name: 'Projects',
      icon: <VscProject size={18} />
    },
    {
      path: '/admin/compliance',
      name: 'Compliance',
      icon: <BsShield size={18} />
    },
    {
      path: '/admin/setGeophence',
      name: 'Set Geophence',
      icon: <FaMapMarkerAlt size={18} />
    },
    {
      path: '/admin/getEmployeStatus',
      name: 'List GetEmployeStatus',
      icon: <FaMapMarkerAlt size={18} />
    },
    {
     path: '/admin/latestLocaction',
     name: 'LatestLocaction',
     icon: <FaMapMarkerAlt size={18} />
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      <div className={`admin-sidebar ${isSidebarOpen ? 'show' : ''}`}>
        <div className="admin-logo">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 8L32 16V24L20 32L8 24V16L20 8Z" fill="#4F46E5"/>
          </svg>
          <h3>Admin</h3>
        </div>
        <nav className="admin-nav">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className={`admin-nav-item ${
                (location.pathname === '/' && item.path === '/') ||
                (location.pathname !== '/' && location.pathname.startsWith(item.path))
                  ? 'active'
                  : ''
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              <span className="admin-nav-label">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;