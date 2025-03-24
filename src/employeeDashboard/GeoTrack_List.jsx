import React, { useState } from 'react';
import Sidebar from './Sidebar';

function GeoTrack_List() {
  const [filterDate, setFilterDate] = useState('');
  const [filterName, setFilterName] = useState('');
  const [locationData] = useState([
    {
      name: 'Alex Johnson',
      date: '2023-10-12',
      deviceInfo: 'iPhone 12',
      inTime: '09:00 AM',
      exitTime: '05:00 PM',
      totalTime: '8h'
    },
    {
      name: 'Jessica Green',
      date: '2023-10-12',
      deviceInfo: 'Samsung Galaxy S21',
      inTime: '08:30 AM',
      exitTime: '04:30 PM',
      totalTime: '8h'
    },
    {
      name: 'Michael Brown',
      date: '2023-10-12',
      deviceInfo: 'Google Pixel 6',
      inTime: '09:15 AM',
      exitTime: '05:15 PM',
      totalTime: '8h'
    }
  ]);

  const handleSubmit = () => {
    // Add filter logic here
    console.log('Filtering by:', { filterDate, filterName });
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="geotrack-list-container">
        <div className="filter-section">
          <div className="filter-group">
            <div className="filter-input">
              <input
                type="date"
                placeholder="Select Date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              />
            </div>
            <div className="filter-input">
              <input
                type="text"
                placeholder="Enter Name"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
              />
            </div>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className="location-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Device Info</th>
                <th>In Time</th>
                <th>Exit Time</th>
                <th>Total Time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {locationData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.deviceInfo}</td>
                  <td>{item.inTime}</td>
                  <td>{item.exitTime}</td>
                  <td>{item.totalTime}</td>
                  <td>
                    <button className="delete-btn">Delete</button>
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

export default GeoTrack_List;