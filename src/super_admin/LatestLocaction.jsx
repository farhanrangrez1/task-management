import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { LatestLocactionAll } from '../features/Geo_Location/geoLocationSlice';

function LatestLocaction() {
  const dispatch = useDispatch();

     const { Location, isLoading, isError, message } = useSelector((state) => state.geoLocation);
  
      console.log("Location Data:", Location); 
  
      useEffect(() => {
          dispatch(LatestLocactionAll());
      }, [dispatch]);
  
  return (
    <div className="admin-dashboard-container">
    <Sidebar />
    <div className="admin-main-content">
      <Header/>
      <div className="location-data-container">
        <div className="location-table">
          <table>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Employee Name</th>
                <th>Device Info</th>
                <th>message</th>
                <th>Date</th>
                <th>status</th>
                <th>time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Location && typeof Location === "object" && !Array.isArray(Location) ? (
                <tr>
                  {/* <td>{Location.id}</td> */}
                  <td>{Location.employname}</td>
                  <td>{Location.device_info}</td>
                  <td>{Location.message}</td>
                  <td>{Location.date}</td>
                  <td>{Location.status}</td>
                  <td>{Location.time}</td>
                  <td>
                    <button className="action-btn">Delete</button>
                  </td>
                </tr>
       ) : (
        <p>No employee data available</p>
    )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LatestLocaction;