import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { LatestLocactionAll, LatestLocactionList } from '../features/Geo_Location/geoLocationSlice';

function LatestLocaction() {
    const dispatch = useDispatch();
 
      const { Location, isLoading, isError, message } = useSelector((state) => state.geoLocation);
      console.log("Location Data:", Location); 
    
      useEffect(() => {
          dispatch(LatestLocactionList());
      }, [dispatch]);
    
    const [employeeId, setEmployeeId] = useState('');
    
    const handleSearch = () => {
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

                    {Location && typeof Location === "object" && !Array.isArray(Location) ? (
                   <div className="employee-details">
                     <h3>Employee Details</h3>
                       <div className="details-grid">
                      <div className="details-left">
                <p><span className="label">Name:</span> {Location.employname}</p>
                <p><span className="label">Device:</span> {Location.device_info}</p>
                <p><span className="label">Status:</span> {Location.message}</p>
                <p><span className="label">Time:</span> {Location.time}</p>
            </div>
            <div className="details-right">
                <p><span className="label">Date:</span> {Location.date}</p>
                <p><span className="label">Status Changed:</span> {Location.status_changed ? "Yes" : "No"}</p>
            </div>
        </div>
    </div>
) : (
    <p>No employee data available</p>
)}

                </div>
            </div>
        </div>
    );
}

export default LatestLocaction;
