

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BiCalendar, BiX } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { BiSearch } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProject } from '../features/Project/ProjectSlice';
import { getEmployees } from '../features/Employee/EmployeeSlice';


function Add_products() {
const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.projects); // Redux state


  const { employees } = useSelector((state) => state.employees);
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    project_name: '',
    description: '',
    project_lead: '',
    start_date: '',
    due_date: '',
    team_members: '',
    project_status: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.project_name.trim()) newErrors.project_name = 'Project name is required';
    if (!formData.project_lead) newErrors.project_lead = 'Project lead is required';
    if (!formData.start_date) newErrors.start_date = 'Start date is required';
    if (!formData.due_date) newErrors.due_date = 'Due date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formattedData = {
        ...formData,
        team_members: formData.team_members.split(',').map((member) => member.trim()), // Convert string to array
      };

      dispatch(createProject(formattedData))
        .unwrap()
        .then(() => {
          toast.success('Project created successfully!', {
            position: 'top-center',
            autoClose: 2000,
          });
        })
        .catch(() => {
          toast.error('Error creating project', {
            position: 'top-center',
          });
        });
    }
  };

  const filteredEmployees = employees.filter((emp) => emp.role.toLowerCase() === 'employee');


  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
        <Header />
        <div className="new-project-container">
          <div className="new-project-card">
            <h2>Create New Project</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  name="project_name"
                  placeholder="Enter project name"
                  value={formData.project_name}
                  onChange={handleInputChange}
                  className={errors.project_name ? 'error' : ''}
                />
                {errors.project_name && <span className="error-message">{errors.project_name}</span>}
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  placeholder="Enter project description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

              <div className="form-group">
                <label>Project Lead</label>
                <select
                  name="project_lead"
                  value={formData.project_lead}
                  onChange={handleInputChange}
                  className={errors.project_lead ? 'error' : ''}
                >
                  <option value="">Select project lead</option>
                  {employees.map((employee) => (
                    <option key={employee.id} value={employee.first_name}>
                      {employee.first_name}
                    </option>
                  ))}
                </select>
                {errors.project_lead && <span className="error-message">{errors.project_lead}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="start_date"
                      value={formData.start_date}
                      onChange={handleInputChange}
                      className={errors.start_date ? 'error' : ''}
                    />
                    <BiCalendar className="calendar-icon" />
                  </div>
                  {errors.start_date && <span className="error-message">{errors.start_date}</span>}
                </div>

                <div className="form-group">
                  <label>Due Date</label>
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="due_date"
                      value={formData.due_date}
                      onChange={handleInputChange}
                      className={errors.due_date ? 'error' : ''}
                    />
                    <BiCalendar className="calendar-icon" />
                  </div>
                  {errors.due_date && <span className="error-message">{errors.due_date}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Team Members (comma-separated)</label>
                <input
                  type="text"
                  name="team_members"
                  placeholder="Enter team members (e.g., John Smith, Jane Doe)"
                  value={formData.team_members}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label>Project Status</label>
                <select
                  name="project_status"
                  value={formData.project_status}
                  onChange={handleInputChange}
                >
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
                <button type="submit" className="create-btn" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Project'}
                </button>
              </div>
            </form>

            {error && <p className="error-message">{error}</p>}

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_products;
