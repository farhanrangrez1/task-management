import React, { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { BiSearch } from 'react-icons/bi';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

import { BsBell} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useDispatch } from 'react-redux';
import { taskscreate } from '../features/Tasks/TasksSlice';
import { ToastContainer, toast } from 'react-toastify';

function AddTasks() {
  const dispatch =useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    project: 'Website Redesign',
    due_date: '',
    priority: 'High',
    description: '',
    assigned_to: 'John Smith'
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
    if (!formData.title.trim()) newErrors.title = 'Task name is required';
    if (!formData.project) newErrors.project = 'Project is required';
    if (!formData.due_date) newErrors.due_date = 'Due date is required';
    if (!formData.priority) newErrors.priority = 'Priority is required';
    if (!formData.assigned_to) newErrors.assigned_to = 'Assignment is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Task created:', formData);
      dispatch(taskscreate(formData))
    }

       // Show success toast message
       toast.success('Employee added successfully!', {
        position: 'top-center',
        autoClose: 2000, 
      });
  
    
      setFormData({
        title: '',
        project: '',
        due_date: '',
        priority: '',
        description: '',
        assigned_to: ''
      });
      
    };


  const handleCancel = () => {
    // Reset form
    setFormData({
      title: '',
      project: 'Website Redesign',
      due_date: '',
      priority: 'High',
      description: '',
      assigned_to: 'John Smith'
    });
    setErrors({});
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
          <Header/>
        <div className="add-task-container">
          <div className="add-task-card">
            <h2>New Task</h2>
            <p className="text-muted">Create a new task</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Task Name</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={errors.title ? 'error' : ''}
                  placeholder="Enter task name"
                />
                {errors.title && <span className="error-message">{errors.title}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Project</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    className={errors.project ? 'error' : ''}
                  >
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Marketing Campaign">Marketing Campaign</option>
                  </select>
                  {errors.project && <span className="error-message">{errors.project}</span>}
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
                <label>Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  className={errors.priority ? 'error' : ''}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                {errors.priority && <span className="error-message">{errors.priority}</span>}
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Enter task description"
                />
              </div>

              <div className="form-group">
                <label>Assign To</label>
                <select
                  name="assigned_to"
                  value={formData.assigned_to}
                  onChange={handleInputChange}
                  className={errors.assigned_to ? 'error' : ''}
                >
                  <option value="John Smith">John Smith</option>
                  <option value="Sarah Johnson">Sarah Johnson</option>
                  <option value="Michael Chen">Michael Chen</option>
                </select>
                {errors.assigned_to && <span className="error-message">{errors.assigned_to}</span>}
              </div>

              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="create-btn">
                  Create Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTasks;