import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { SetGeophenceAdd } from '../features/Geo_Location/geoLocationSlice';

function SetGeophence() {
 const dispatch =useDispatch()

  const [geofenceData, setGeofenceData] = useState({
    lat: '',
    lon: '',
    radius: ''
  });

  const [currentGeofence, setCurrentGeofence] = useState({
    lat: '',
    lon: '',
    radius: ''
  });

  const handleInputChange = (e) => {
    setGeofenceData({
      ...geofenceData,
      [e.target.name]: e.target.value
    });
  };

  const handleSetGeofence = () => {
    setCurrentGeofence({
      lat: geofenceData.lat,
      lon: geofenceData.lon,
      radius: geofenceData.radius
    });
    dispatch(SetGeophenceAdd(geofenceData))
    // console.log('Geofence set:', geofenceData);
  };

  return (
    <div className="admin-dashboard-container">
    <Sidebar />
    <div className="admin-main-content">
      <Header/>
      <div className="geofence-container">
        <div className="geofence-setup-box">
          <h1>Set Geofence</h1>
          
          <div className="setup-section">
            <h2>Geofence Setup</h2>
            
            <div className="input-group">
              <label>lat of Center</label>
              <input
                type="number"
                name="lat"
                value={geofenceData.lat}
                onChange={handleInputChange}
                placeholder="Enter lat"
              />
            </div>

            <div className="input-group">
              <label>lon of Center</label>
              <input
                type="number"
                name="lon"
                value={geofenceData.lon}
                onChange={handleInputChange}
                placeholder="Enter lon"
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
                <p>lat: {currentGeofence.lat}</p>
                <p>lon: {currentGeofence.lon}</p>
                <p>Radius: {currentGeofence.radius} meters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SetGeophence;