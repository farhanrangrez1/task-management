import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image_login from "../assets/Image_login.png";
import { FcGoogle } from 'react-icons/fc';
import { BsKey } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { LoginFrom } from '../features/user/userSlice';

function Login() {
const dispatch = useDispatch()

const [fromData,setFromData]=useState({
  email:"",
  password:"",
})

const {email,password}=fromData
const handleChange=(e)=>{
  setFromData(
    {...fromData,
      [e.target.name]:e.target.value
    })}

    const handleSubmit =(e)=>{
      e.preventDefault();
      dispatch(LoginFrom(fromData))
      console.log(fromData);
      
    }

 
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="tree-logo-container">
            <img src={Image_login} alt="Moon Learning" className="tree-logo" />
          </div>
        </div>

        <div className="login-right" >
            <div className="admin-logo" >
              {/* <img src="/enlighten-icon.png" alt="Logo" className="logo-icon" /> */}
              <h4>Logo</h4>
            </div>
            
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="admin-form-group">
                <label>Email address</label>
                <div className="admin-input-wrapper">
                  <HiOutlineMail className="admin-input-icon" />
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>Password</label>
                <div className="admin-input-wrapper">
                  <RiLockPasswordLine className="admin-input-icon" />
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <div className="remember-forgot">
                <div className="admin-forgot-password">
                  <a href="/forgot-password">Forgot password?</a>
                </div>
              </div>

                <button type="submit" className="admin-sign-in-button">
                  Sign in
                </button>

              <div className="role-buttons">
                <Link to="/admin" className="full-width-link">
                  <button type="button" className="admin-role-button">
                    Admin
                  </button>
                </Link>
                <Link to="/employee" className="full-width-link">
                  <button type="button" className="employee-role-button">
                    Employee
                  </button>
                </Link>
              </div>

              <div className="admin-divider">
                <span>Or continue with</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="admin-google-button">
                  <FcGoogle />
                  Sign in with Google
                </button>
                <button type="button" className="admin-sso-button">
                  <BsKey />
                  Sign in with SSO
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Login;