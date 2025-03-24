import React from 'react';

function Navbar() {
  return (
    <div className="bg-light min-vh-100 border-end p-3">
      <h4>LOGO</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">
          <a className="nav-link active" href="#">
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            <i className="bi bi-calendar4 me-2"></i> Schedule
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            <i className="bi bi-list-check me-2"></i> Tasks
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            <i className="bi bi-clock-history me-2"></i> Time Tracking
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link" href="#">
            <i className="bi bi-chat-left-text me-2"></i> Chat
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
