import React, { useState } from 'react';
import Sidebar from './Sidebar';

function GeoTrack_Location_Data() {
  const [filterDate, setFilterDate] = useState('');
  const [locationData] = useState([
    {
      id: 1,
      employeeName: 'Aditya',
      deviceInfo: 'owntracks/AditysLocation',
      date: '2023-10-01'
    },
    {
      id: 2,
      employeeName: 'John Doe',
      deviceInfo: 'owntracks/JohnDoeLocation',
      date: '2023-10-02'
    }
  ]);

  const handleFilter = () => {
    // Add filter logic here
    console.log('Filtering by date:', filterDate);
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="location-data-container">
        <div className="filter-section">
          <div className="date-filter">
            <input
              type="text"
              placeholder="YYYY-MM-DD"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
            <button className="filter-btn" onClick={handleFilter}>
              Filter
            </button>
          </div>
        </div>

        <div className="location-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Name</th>
                <th>Device Info</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locationData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.employeeName}</td>
                  <td>{item.deviceInfo}</td>
                  <td>{item.date}</td>
                  <td>
                    <button className="action-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GeoTrack_Location_Data;