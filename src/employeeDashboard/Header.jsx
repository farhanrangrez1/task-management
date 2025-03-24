import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { VscProject, VscAccount, VscSignOut } from 'react-icons/vsc';
const DashboardNavbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profiledata, setProfileData]=useState({})

  useEffect(()=>{
   const data= localStorage.getItem("user")
   if(data){
     setProfileData(JSON.parse(data))
   }else{
    setProfileData("")
   }
  },[])
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
          <div className="container-fluid d-flex justify-content-between align-items-center px-4">
            <button className="btn d-flex align-items-center" style={{ backgroundColor: '#4F46E5', color: 'white' }}>
              <i className="bi bi-clock me-2"></i> Clock In
            </button>

            <div className="d-flex align-items-center gap-3">
              <div className="position-relative">
                <i className="bi bi-bell fs-5 text-secondary"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </div>

              <div className="profile-dropdown">
                <div className="profile-trigger" onClick={() => setShowProfileMenu(!showProfileMenu)}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s"
                    alt="User"
                    className="rounded-circle"
                  />
                  <span>{profiledata.first_name}</span>
                </div>

                {showProfileMenu && (
                  <div className="profile-menu">
                    <div className="profile-header">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3oYa9BljpcyhfIwVizBrEuo4HjsWq1mNzw&s"
                        alt="User"
                        className="profile-avatar"
                      />
                      <div className="profile-info">
                        <h3>{profiledata.first_name}</h3>
                        <p>{profiledata.email}</p>
                      </div>
                    </div> 
                    <div className="profile-footer">
                      <div className="sync-status">
                      <Link to="/employee/profile" className="customize-link">
                        <VscAccount size={18} />
                        <span>Profile</span>
                        </Link>
                      </div>
                      <Link to="/" className="customize-link">
                       <VscSignOut size={18} />
                        <span>Logout</span>
                       </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DashboardNavbar;