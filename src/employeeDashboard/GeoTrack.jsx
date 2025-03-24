import React, { useState } from 'react';
import Sidebar from './Sidebar';

function GeoTrack() {
  const [geofenceData, setGeofenceData] = useState({
    latitude: '',
    longitude: '',
    radius: ''
  });

  const [currentGeofence, setCurrentGeofence] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    radius: 500
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGeofenceData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSetGeofence = () => {
    if (geofenceData.latitude && geofenceData.longitude && geofenceData.radius) {
      setCurrentGeofence({
        latitude: parseFloat(geofenceData.latitude),
        longitude: parseFloat(geofenceData.longitude),
        radius: parseInt(geofenceData.radius)
      });
      setGeofenceData({ latitude: '', longitude: '', radius: '' });
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="geofence-container">
        <div className="geofence-setup-box">
          <h1>Set Geofence</h1>
          
          <div className="setup-section">
            <h2>Geofence Setup</h2>
            
            <div className="input-group">
              <label>Latitude of Center</label>
              <input
                type="number"
                name="latitude"
                value={geofenceData.latitude}
                onChange={handleInputChange}
                placeholder="Enter latitude"
              />
            </div>

            <div className="input-group">
              <label>Longitude of Center</label>
              <input
                type="number"
                name="longitude"
                value={geofenceData.longitude}
                onChange={handleInputChange}
                placeholder="Enter longitude"
              />
            </div>

            <div className="input-group">
              <label>Radius (meters)</label>
              <input
                type="number"
                name="radius"
                value={geofenceData.radius}
                onChange={handleInputChange}
                placeholder="Enter radius"
              />
            </div>

            <button 
              className="set-geofence-button"
              onClick={handleSetGeofence}
            >
              Set Geofence
            </button>

            <div className="current-info">
              <h2>Current Geofence Info</h2>
              <div className="info-text">
                <p>Latitude: {currentGeofence.latitude}</p>
                <p>Longitude: {currentGeofence.longitude}</p>
                <p>Radius: {currentGeofence.radius} meters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeoTrack;