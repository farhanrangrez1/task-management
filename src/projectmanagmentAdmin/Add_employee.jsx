import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import Header from './Header';
import { createEmployee } from '../features/Employee/EmployeeSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add_employee() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    role:'employee'
  });

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(formData));
    
    // Show success toast message
    toast.success('Employee added successfully!', {
      position: 'top-center',
      autoClose: 2000, 
    });

  
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',
    });
  };

  return (
    <div>
      <div className="admin-dashboard-container">
        <Sidebar />
        <div className="admin-main-content">
          <Header />
          <div className="container mt-4">
            <h4 className="mb-4 fw-bold">Add Employee</h4>
            <div className="card Add-Employee-card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* First and Last Name */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="form-control"
                        id="firstName"
                        placeholder="Enter first name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="form-control"
                        id="lastName"
                        placeholder="Enter last name"
                        required
                      />
                    </div>
                  </div>
                  {/* Email and Password */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        required
                      />
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        id="phone"
                        placeholder="Enter phone number"
                        required
                      />
                    </div>
                  </div>
                  {/* Add Buttons */}
                  <div className="Add-Employee-action-buttons">
                    <button type="button" className="btn btn-outline-secondary me-3">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-dark">
                      Save Employee
                    </button>
                  </div>
                </form>
                {/* Toast Container */}
                <ToastContainer />
              </div>
            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
}

export default Add_employee;
