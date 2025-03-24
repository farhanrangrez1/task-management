import React from 'react';
import { Link } from 'react-router-dom';
import Image_login from "../assets/Image_login.png";
import { FcGoogle } from 'react-icons/fc';

function Register() {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-left">
          <div className="tree-logo-container">
            <img src={Image_login} alt="Knowledge Learning" className="tree-logo" />
          </div>
        </div>

        <div className="register-right">
          <div className="register-form-container">
          <div className="form-header">
              <img src={Image_login} alt="Logo" className="form-logo" />
              <h3 className="form-title">Create Your Register</h3>
              <p className="form-subtitle">Please fill in the details below to register</p>
            </div>

            <form className="register-form">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Create password"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="register-button">
                Register
              </button>

              <div className="divider">
                <span>Or register with</span>
              </div>

              {/* <button type="button" className="google-button">
                <FcGoogle className="google-icon" />
                Register with Google
              </button> */}

              <div className="login-link">
                Already have an account? <Link to="/">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;