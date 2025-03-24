import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { getEmployees, updateEmployee } from "../features/Employee/EmployeeSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { employees, loading } = useSelector((state) => state.employees);
  console.log("employees",employees)
  const [profiledata, setProfileData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    professional_skills: "",
  });

  // Load Employee Data
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);



  // Handle Change
  const handleChange = (e) => {
    setProfileData({ ...profiledata, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    const userData = localStorage.getItem("user");
    // console.log(userData)
    if (userData && employees.length > 0) {
      const loggedInUser = JSON.parse(userData);
      console.log("loggedInUser",loggedInUser)
      const currentUser = employees.find((emp) => emp.id === loggedInUser. user_id);
      console.log("cu",currentUser)
      if (currentUser) {
        setProfileData(currentUser);
      }
    }
  }, [employees]);
  
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(profiledata))
      .unwrap()
      .then((updatedData) => {
        toast.success("Profile updated successfully!", {
          position: "top-center",
        });
        
        const userData = JSON.parse(localStorage.getItem("user"));
        const updatedUserData = {
          ...userData,
          ...updatedData,
        };
        
        localStorage.setItem("user", JSON.stringify(updatedUserData));
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
      });
  };
  
  

  return (
    <>
      <Sidebar />
      <ToastContainer/>
      <div className="main-content">
        <div className="bg-light min-vh-100 py-4">
          <div className="container-xl">
            <div className="row g-4">
              <div className="col-12 col-md-12">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h2 className="h5 mb-4">Personal Information</h2>
                    {loading ? (
                      <p>Loading...</p>
                    ) : (
                      <form onSubmit={handleUpdate}>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label">First Name</label>
                            <input
                              type="text"
                              name="first_name"
                              className="form-control"
                              value={profiledata.first_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Last Name</label>
                            <input
                              type="text"
                              name="last_name"
                              className="form-control"
                              value={profiledata.last_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              value={profiledata.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              className="form-control"
                              value={profiledata.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Department</label>
                            <input
                              type="text"
                              name="department"
                              className="form-control"
                              value={profiledata.department}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Position</label>
                            <input
                              type="text"
                              name="position"
                              className="form-control"
                              value={profiledata.position}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Emergency Contact Name</label>
                            <input
                              type="text"
                              name="emergency_contact_name"
                              className="form-control"
                              value={profiledata.emergency_contact_name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label">Emergency Contact Phone</label>
                            <input
                              type="tel"
                              name="emergency_contact_phone"
                              className="form-control"
                              value={profiledata.emergency_contact_phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="col-md-12">
                            <label className="form-label">Professional Skills</label>
                            <textarea
                              name="professional_skills"
                              className="form-control"
                              rows="3"
                              value={profiledata.professional_skills}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>

                        <div className="mt-4 text-end">
                          <button type="submit" className="btn btn-primary">
                            Update
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* End Grid Layout */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
