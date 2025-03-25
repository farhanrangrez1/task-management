import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { BiSearch, BiCloudUpload } from 'react-icons/bi';
import { BsBell } from 'react-icons/bs';


import { Link } from 'react-router-dom';
import Header from './Header';

function Add_communication() {
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    channel: 'General',
    priority: 'Low',
    message: '',
    attachments: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
     <Header/>

        <div className="message-form-container">
          <h2>New Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>To</label>
              <input
                type="text"
                placeholder="Enter recipient(s)"
                value={formData.to}
                onChange={(e) => setFormData({...formData, to: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Channel</label>
              <select
                value={formData.channel}
                onChange={(e) => setFormData({...formData, channel: e.target.value})}
              >
                <option value="General">General</option>
                <option value="Development">Development</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({...formData, priority: e.target.value})}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={6}
              />
            </div>

            <div className="form-group">
              <label>Attachments</label>
              <div className="upload-box">
                <BiCloudUpload size={24} />
                <p>Upload a file or drag and drop</p>
                <span>PNG, JPG, PDF up to 5MB</span>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn">Cancel</button>
              <button type="submit" className="send-btn">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_communication;