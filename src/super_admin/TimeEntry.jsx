import React, { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { BiSearch } from 'react-icons/bi';

import { BsBell} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';
function TimeEntry() {
  const [formData, setFormData] = useState({
    project: '',
    task: '',
    date: '',
    hours: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.project) newErrors.project = 'Project is required';
    if (!formData.task) newErrors.task = 'Task description is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.hours || formData.hours <= 0) newErrors.hours = 'Valid hours are required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Time Entry submitted:', formData);
      // Add API call here to save the data
    }
  };

  const handleCancel = () => {
    setFormData({
      project: '',
      task: '',
      date: '',
      hours: '',
      notes: ''
    });
    setErrors({});
  };

  const projects = [
    { name: "Website Redesign", color: "#FF5733" },
    { name: "Mobile App", color: "#33FF57" },
    { name: "Marketing Campaign", color: "#3357FF" }
  ];

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
      <Header/> 
        <div className="time-entry-container">
          <div className="time-entry-card">
            <h2>New Time Entry</h2>
            <p className="text-muted">Please fill in the details below to create a new time entry.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Project</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className={errors.project ? 'error' : ''}
                  >
                    <option value="">Select Project</option>
                    {projects.map((project, index) => (
                      <option 
                        key={index} 
                        value={project.name}
                        style={{ backgroundColor: project.color, color: 'white' }}
                      >
                        {project.name}
                      </option>
                    ))}
                  </select>
                  {errors.project && <span className="error-message">{errors.project}</span>}
                </div>

                <div className="form-group">
                  <label>Task</label>
                  <input
                    type="text"
                    name="task"
                    placeholder="Enter task description"
                    value={formData.task}
                    onChange={handleInputChange}
                    className={errors.task ? 'error' : ''}
                  />
                  {errors.task && <span className="error-message">{errors.task}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <div className="date-input-wrapper">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className={errors.date ? 'error' : ''}
                    />
                    <BiCalendar className="calendar-icon" />
                  </div>
                  {errors.date && <span className="error-message">{errors.date}</span>}
                </div>

                <div className="form-group">
                  <label>Hours</label>
                  <input
                    type="number"
                    name="hours"
                    placeholder="Enter hours worked"
                    value={formData.hours}
                    onChange={handleInputChange}
                    min="0"
                    step="0.5"
                    className={errors.hours ? 'error' : ''}
                  />
                  {errors.hours && <span className="error-message">{errors.hours}</span>}
                </div>
              </div>

              <div className="form-group">
                <label>Notes</label>
                <textarea
                  name="notes"
                  placeholder="Add any additional notes..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Save Time Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeEntry;