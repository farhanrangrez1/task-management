import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi';
import { BsListTask, BsBell, BsCalendar4, BsClock } from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = () => {
  const performanceData = [
    { day: 'Mon', tasksCompleted: 12, hoursWorked: 8 },
    { day: 'Tue', tasksCompleted: 15, hoursWorked: 7.5 },
    { day: 'Wed', tasksCompleted: 10, hoursWorked: 8 },
    { day: 'Thu', tasksCompleted: 18, hoursWorked: 8.5 },
    { day: 'Fri', tasksCompleted: 14, hoursWorked: 7 },
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'Sarah Johnson',
      action: 'clocked in',
      team: 'Marketing Team',
      time: '13:23',
      icon: 'user'
    },
    {
      id: 2,
      action: 'New task assigned to',
      team: 'Development Team',
      time: '13:15',
      icon: 'task'
    },
    {
      id: 3,
      action: 'Team meeting scheduled for',
      detail: 'tomorrow at 10:00 AM',
      time: '13:00',
      icon: 'calendar'
    }
  ];
 const currentShifts = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@company.com',
    department: 'Marketing',
    shiftTime: '9:00 AM - 5:00 PM',
    status: 'Active',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.c@company.com',
    department: 'Development',
    shiftTime: '10:00 AM - 6:00 PM',
    status: 'Active',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'
  }
];
  return (
    <div className="admin-dashboard-container">
      <Sidebar/>
      <div className="admin-main-content">
    <Header/>
        <div className="admin-stats-grid">
          <div className="admin-stat-card">
            <div className="admin-stat-header">
              <div className="admin-stat-icon-wrapper">
                <HiOutlineUsers className="admin-stat-icon" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Active Employees</span>
                <div className="admin-stat-value">24/30</div>
              </div>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-header">
              <div className="admin-stat-icon-wrapper">
                <BsListTask className="admin-stat-icon" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Open Tasks</span>
                <div className="admin-stat-value">12</div>
              </div>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-header">
              <div className="admin-stat-icon-wrapper">
                <BsCalendar4 className="admin-stat-icon" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Today's Shifts</span>
                <div className="admin-stat-value">8</div>
              </div>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-header">
              <div className="admin-stat-icon-wrapper">
                <BsClock className="admin-stat-icon" />
              </div>
              <div className="admin-stat-info">
                <span className="admin-stat-label">Time-off Requests</span>
                <div className="admin-stat-value">5</div>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-content">
          <div className="admin-activity-section">
            <h2>Recent Activity</h2>
            <div className="admin-activity-list">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="admin-activity-item">
                  <div className={`admin-activity-icon ${activity.icon}`}>
                    {activity.icon === 'user' && <HiOutlineUsers />}
                    {activity.icon === 'task' && <BsListTask />}
                    {activity.icon === 'calendar' && <BsCalendar4 />}
                  </div>
                  <div className="admin-activity-details">
                    <p>
                      {activity.user && <strong>{activity.user}</strong>} {activity.action}{' '}
                      <strong>{activity.team}</strong> {activity.detail}
                    </p>
                    <span>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-chart-section">
            <h2>Team Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="tasksCompleted" 
                  stroke="#4F46E5" 
                  name="Tasks Completed"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#4F46E5" }}
                />
                <Line 
                  type="monotone" 
                  dataKey="hoursWorked" 
                  stroke="#EC4899" 
                  name="Hours Worked"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#EC4899" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="admin-shifts-section">
  <h2>Current Shifts</h2>
  <div className="admin-shifts-table">
    <table>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Department</th>
          <th>Shift Time</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {currentShifts.map((shift) => (
          <tr key={shift.id}>
            <td>
              <div className="employee-info">
                <img src={shift.avatar} alt={shift.name} className="employee-avatar" />
                <div className="employee-details">
                  <div className="employee-name">{shift.name}</div>
                  <div className="employee-email">{shift.email}</div>
                </div>
              </div>
            </td>
            <td>{shift.department}</td>
            <td>{shift.shiftTime}</td>
            <td>
              <span className={`status-badge ${shift.status.toLowerCase()}`}>
                {shift.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;