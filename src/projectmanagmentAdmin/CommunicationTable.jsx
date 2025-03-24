import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { BsBell } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';

function CommunicationTable() {
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
       <Header/>

        <div className="communication-header">
          <h3>Communication</h3>
          <div className="communication-buttons"  style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <Link to="/create-group-chat">
              <button className="add-employee-btn" style={{ marginRight: '10px' }}>
                <span>+</span> Create Group Chat
              </button>
            </Link>
            <Link to="/addCommunication">
              <button className="add-employee-btn">
                <span>+</span> New Message
              </button>
            </Link>
          </div>
        </div>

        <div className="communication-filters">
          <div className="search-wrapper">
            <BiSearch className="search-icon" />
            <input type="search" placeholder="Search messages..." />
          </div>
          <div className="filter-buttons">
            <select className="filter-select">
              <option value="">Channel</option>
              <option value="general">General</option>
              <option value="development">Development</option>
              <option value="marketing">Marketing</option>
            </select>
            <select className="filter-select">
              <option value="">Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <select className="filter-select">
              <option value="">Project</option>
              <option value="website-redesign">Website Redesign</option>
              <option value="mobile-app">Mobile App</option>
              <option value="crm-system">CRM System</option>
            </select>
          </div>
        </div>

        <div className="messages-table">
          <table>
            <thead>
              <tr>
                <th>From</th>
                <th>Subject</th>
                <th>Channel</th>
                <th>Priority</th>
                <th>Project</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="message-from">
                    <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Team Meeting" />
                    <div>
                      <div className="message-name">Team Meeting</div>
                      <div className="message-description">Weekly progress update discussion</div>
                    </div>
                  </div>
                </td>
                <td>General</td>
                <td>
                  <span className="channel-badge high">High</span>
                </td>
                <td>
                  <span className="priority-badge high">High</span>
                </td>
                <td>Website Redesign</td>
                <td>Jan 15, 2023</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit"><FiEdit2 /></button>
                    <button className="action-btn delete"><FiTrash2 /></button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="message-from">
                    <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Project Update" />
                    <div>
                      <div className="message-name">Project Update</div>
                      <div className="message-description">Development milestone completed</div>
                    </div>
                  </div>
                </td>
                <td>Development</td>
                <td>
                  <span className="channel-badge medium">Medium</span>
                </td>
                <td>
                  <span className="priority-badge medium">Medium</span>
                </td>
                <td>Mobile App</td>
                <td>Mar 20, 2023</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit"><FiEdit2 /></button>
                    <button className="action-btn delete"><FiTrash2 /></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="entries-info">
            Showing 1 to 2 of 15 messages
          </div>
          <div className="pagination">
            <button className="page-btn prev">‹</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn next">›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunicationTable;