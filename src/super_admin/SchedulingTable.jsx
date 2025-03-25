import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { BsBell} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';

function SchedulingTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      department: 'Marketing',
      shift: '9:00 AM - 5:00 PM',
      date: 'Jan 15, 2023',
      status: 'active',
      clockedIn: false,
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      department: 'Development',
      shift: '2:00 PM - 10:00 PM',
      date: 'Mar 20, 2023',
      status: 'off-duty',
      clockedIn: false,
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  ]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredSchedules = schedules.filter(schedule => {
    const matchesSearch = schedule.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || schedule.status === statusFilter;
    const matchesDepartment = teamFilter === 'All' || schedule.department.toLowerCase() === teamFilter.toLowerCase();
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  const totalPages = Math.ceil(filteredSchedules.length / 10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleClockInOut = (id) => {
    setSchedules(schedules.map(schedule => 
      schedule.id === id 
        ? { ...schedule, clockedIn: !schedule.clockedIn }
        : schedule
    ));
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
   <Header/>

        <div className="scheduling-header">
          <h3>Scheduling</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="export-btn">Export Timesheet</button>
            <Link to="/admin/newScheduling">
              <button style={{display:"inline-block",textDecoration:"none"}} className="add-employee-btn">
                <span>+</span> New Schedule
              </button>
            </Link>
          </div>
        </div>

        <div className="scheduling-filters">
          <div className="search-wrapper">
            <BiSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search schedules..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <div className="filter-buttons">
            <select 
              className="filter-select"
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
            >
              <option value="All">Department</option>
              <option value="marketing">Marketing</option>
              <option value="development">Development</option>
            </select>
            <select 
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">Status</option>
              <option value="active">Active</option>
              <option value="off-duty">Off Duty</option>
            </select>
          </div>
        </div>

        <div className="schedule-table">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Shift</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedules.map(schedule => (
                <tr key={schedule.id}>
                  <td>
                    <div className="employee-info">
                      <img src={schedule.avatar} alt={schedule.name} />
                      <div>
                        <div className="employee-name">{schedule.name}</div>
                        <div className="employee-department">{schedule.department}</div>
                      </div>
                    </div>
                  </td>
                  <td>{schedule.department}</td>
                  <td>{schedule.shift}</td>
                  <td>
                    <label className="switch">
                      <input 
                        type="checkbox" 
                        checked={schedule.clockedIn}
                        onChange={() => handleClockInOut(schedule.id)}
                      />
                      <span className="slider round"></span>
                    </label>
                    <span className="clock-status">
                      {schedule.clockedIn ? 'Clocked In' : 'Clocked Out'}
                    </span>
                  </td>
                  <td>{schedule.date}</td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-btn edit"><FiEdit2 /></button>
                      <button className="action-btn delete"><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="entries-info">
            Showing 1 to {filteredSchedules.length} of {schedules.length} schedules
          </div>
          <div className="pagination">
            <button 
              className="page-btn"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ‹
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button 
              className="page-btn"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchedulingTable;