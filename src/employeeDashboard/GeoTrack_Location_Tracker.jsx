import React, { useState } from 'react';
import Sidebar from './Sidebar';

function GeoTrack_Location_Tracker() {
  const [employeeId, setEmployeeId] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState({
    name: 'John Doe',
    device: 'iPhone 12 Pro',
    status: 'Inside Geofence',
    latitude: '37.7749° N',
    longitude: '122.4194° W'
  });

  const handleSearch = () => {
    // Add search logic here
    console.log('Searching for employee:', employeeId);
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="location-tracker-container">
        <div className="tracker-card">
          <h2>Employee Location Tracker</h2>
          
          <div className="search-section">
            <input
              type="text"
              placeholder="Enter employee id"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
            <button className="fetch-button" onClick={handleSearch}>
              Fetch Details
            </button>
          </div>

          {employeeDetails && (
            <div className="employee-details">
              <h3>Employee Details</h3>
              <div className="details-grid">
                <div className="details-left">
                  <p>
                    <span className="label">Name:</span> {employeeDetails.name}
                  </p>
                  <p>
                    <span className="label">Device:</span> {employeeDetails.device}
                  </p>
                  <p>
                    <span className="label">Status:</span> {employeeDetails.status}
                    <span className="status-indicator"></span>
                  </p>
                </div>
                <div className="details-right">
                  <p>
                    <span className="label">Latitude:</span> {employeeDetails.latitude}
                  </p>
                  <p>
                    <span className="label">Longitude:</span> {employeeDetails.longitude}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GeoTrack_Location_Tracker;