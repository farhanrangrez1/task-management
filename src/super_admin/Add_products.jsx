import React, { useState } from 'react';
import { BiCalendar, BiX } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { BiSearch } from 'react-icons/bi';
import { BsBell} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';

function Add_products() {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    projectLead: '',
    startDate: '',
    dueDate: '',
    status: 'New',
    teamMembers: ['John Smith']
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAddMember = () => {
    setFormData(prev => ({
      ...prev,
      teamMembers: [...prev.teamMembers]
    }));
  };

  const handleRemoveMember = (index) => {
    setFormData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
    if (!formData.projectLead) newErrors.projectLead = 'Project lead is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.dueDate) newErrors.dueDate = 'Due date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Project created:', formData);
      // Add API call here to save the project
    }
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
      <Header/>
        <div className="new-project-container">
          <div className="new-project-card">
            <h2>Project color coding and Geo Fencing</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  placeholder="Enter project name"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className={errors.projectName ? 'error' : ''}
                />
                {errors.projectName && <span className="error-message">{errors.projectName}</span>}
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
                  name="projectLead"
                  value={formData.projectLead}
                  onChange={handleInputChange}
                  className={errors.projectLead ? 'error' : ''}
                >
                  <option value="">Select project lead</option>
                  <option value="Michael Chen">Michael Chen</option>
                  <option value="Sarah Johnson">Sarah Johnson</option>
                </select>
                {errors.projectLead && <span className="error-message">{errors.projectLead}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className={errors.startDate ? 'error' : ''}
                    />
                    <BiCalendar className="calendar-icon" />
                  </div>
                  {errors.startDate && <span className="error-message">{errors.startDate}</span>}
                </div>

                <div className="form-group">
                  <label>Due Date</label>
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      className={errors.dueDate ? 'error' : ''}
                    />
                    <BiCalendar className="calendar-icon" />
                  </div>
                  {errors.dueDate && <span className="error-message">{errors.dueDate}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Team Members</label>
                <div className="team-members-list">
                  {formData.teamMembers.map((member, index) => (
                    <div key={index} className="team-member-tag">
                      {member}
                      <button
                        type="button"
                        onClick={() => handleRemoveMember(index)}
                        className="remove-member-btn"
                      >
                        <BiX />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={handleAddMember}
                    className="add-member-btn"
                  >
                    + Add Member
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Project Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="On Hold">On Hold</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn">Cancel</button>
                <button type="submit" className="create-btn">Create Project</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_products;