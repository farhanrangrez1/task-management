import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import {GetEmployeStatusDelete, GetEmployeStatusList} from "../features/Geo_Location/geoLocationSlice"

function GetEmployeStatus() {
  const dispatch = useDispatch();


  const { Location, isLoading, isError, message } = useSelector((state) => state.geoLocation);
  console.log("Location Data:", Location); 

  useEffect(() => {
      dispatch(GetEmployeStatusList());
  }, [dispatch]);

  const deletefunction = (id) => {
    dispatch(GetEmployeStatusDelete(id));
  }; 

  const [employeeId, setEmployeeId] = useState('');
  
  const handleSearch = () => {
      console.log('Searching for employee:', employeeId);
  };


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
    console.log('Filtering by:', { filterDate, filterName });
  };

  return (
    <div className="admin-dashboard-container">
    <Sidebar />
    <div className="admin-main-content">
      <Header/>
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

   {Location?.data && Array.isArray(Location.data) && Location.data.length > 0 ? (
      Location.data.map((item, index) => (
    <tr key={index}>
      <td>{item.employname}</td>
      <td>{item.date}</td>
      <td>{item.device_info}</td>
      <td>{item.inside_time}</td>
      <td>{item.outside_time}</td>
      <td>{item.total_time_spent_inside_geo_fence}</td>
      <td>
      <button className="delete-btn" onClick={() => deletefunction(item.id)}>Delete</button>
      </td>
    </tr>
          ))
         ) : (
    !isLoading && !isError && <tr><td colSpan="7">No data available</td></tr>
    )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default GetEmployeStatus;