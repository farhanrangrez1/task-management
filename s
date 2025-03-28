import React from 'react';
import { Link } from 'react-router-dom';
import Image_login  from "../assets/Image_login.png"
import  { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsKey } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import "../index.css";
function Logind() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Left Side - Tree Logo */}
        <div className="login-left">
          <div className="tree-logo-container">
            <img 
              src={Image_login} 
              alt="Moon Learning" 
              className="tree-logo"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="login-right">
          <div className="login-header">
        <div className="admin-logo">
          <h1>LOGO</h1>
        </div>
        
        <form>
          <div className="admin-form-group">
            <label>Email address</label>
            <div className="admin-input-wrapper">
              <HiOutlineMail className="admin-input-icon" />
              <input
                type="email"
                name="email"
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <Link  to="/dashboard">
          <button
          style={{display:"inline-block",textDecoration:"none"}} 
            type="submit" 
            className="admin-sign-in-button"
          >
            Login
          </button>
          </Link>
    
  <div style={{gap:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
  <Link  to="/admin">
          <button
          style={{display:"inline-block",textDecoration:"none",width:"300px",backgroundColor:"white",color:"black",border:"1px solid black",fontWeight:"500",fontSize:"17px"}} 
            type="submit" 
            className="admin-sign-in-button"
          >
            Admin
          </button>
          </Link>
          <Link  to="/employee">
          <button
         style={{display:"inline-block",textDecoration:"none",width:"300px"}} 
            type="submit" 
            className="admin-sign-in-button"
          >
            Employee
          </button>
          </Link>
  </div>

          <div className="admin-forgot-password">
            <a href="/forgot-password">Forgot your password?</a>
          </div>

          <div className="admin-divider">
            <span>Or continue with</span>
          </div>

          <button
            type="button"
            className="admin-google-button"
          >
            <FcGoogle />
            Sign in with Google
          </button>

          <button
            type="button"
            className="admin-sso-button"
          >
            <BsKey />
            Sign in with SSO
          </button>
        </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Logind;














  
  /* Login Start */
  
  
  .admin-form-group label {
    display: block;
    margin-bottom: 8px;
    color: #4F46E5;
    font-size: 20px;
    font-weight: 500;
  }
  
  .admin-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .admin-input-icon {
    position: absolute;
    left: 12px;
    color: #4F46E5;
    font-size: 20px;
  }
  
  .admin-input-wrapper input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
    transition: border-color 0.2s;
  }
  
  .admin-input-wrapper input:focus {
    outline: none;
    border-color: #4040ff;
  }
  
  .admin-sign-in-button {
    width: 100%;
    padding: 12px;
    background: #4F46E5;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 24px;
  }
  
  .admin-sign-in-button:hover {
    background: #4F46E5;
  }
  
  .admin-forgot-password {
    text-align: right;
    margin: 16px 0 24px;
  }
  
  .admin-forgot-password a {
    color: #4F46E5;
    text-decoration: none;
    font-size: 148x;
    font-weight: 500;
  }
  
  .admin-divider {
    position: relative;
    text-align: center;
    margin: 24px 0;
  }
  
  .admin-divider::before,
  .admin-divider::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background: #e0e0e0;
  }
  
  .admin-divider::before {
    left: 0;
  }
  
  .admin-divider::after {
    right: 0;
  }
  
  .admin-divider span {
    background: white;
    padding: 0 10px;
    color: #4F46E5;
    font-size: 16px;
    font-weight: 500;
  }
  
  .admin-google-button,
  .admin-sso-button {
    width: 100%;
    padding: 12px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #4F46E5;
  }
  
  .admin-google-button svg,
  .admin-sso-button svg {
    font-size: 20px;
  }
  
  .admin-error-message {
    background: #fee2e2;
    color: #dc2626;
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 16px;
    font-size: 14px;
    text-align: center;
  }

.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
}

.login-form{
  width: 100%;
}
.login-wrapper {
  width: 100%;
  max-width: 90%;
  height: 700px;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.login-left {
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.tree-logo-container {
  width: 100%;
  max-width: 400px;
}

.tree-logo {
  width: 100%;
  height: auto;
}

.login-right {
  flex: 1;
  background-color: white;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-header {
  text-align: center;
}

.enlighten-logo {
  margin-bottom: 20px;
}

.enlighten-icon {
  width: 60px;
  height: 60px;
}

.login-header h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 600;
}

.login-header p {
  color: #666;
  font-size: 16px;
  margin-bottom: 24px;
}

.login-button {
  background-color: #ff6b4a;
  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #ff5436;
}

@media (max-width: 768px) {
  .login-wrapper {
    flex-direction: column;
    height: auto;
    margin: 20px;
  }

  .login-left {
    display: none;
  }

  .login-right {
    padding: 40px 20px;
  }
}
.login-right {
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
  /* Login  */






































  import React, { useState, useCallback, useMemo } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const defaultShifts = [
  {
    id: 1,
    title: '07:00 - 13:00',
    start: new Date(2025, 2, 11, 7, 0),
    end: new Date(2025, 2, 11, 13, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: '12:00 - 18:00',
    start: new Date(2025, 2, 11, 12, 0),
    end: new Date(2025, 2, 11, 18, 0),
    resourceId: 1,
  }
];

function Hww() {
  const [shifts, setShifts] = useState(defaultShifts);
  const [selectedShift, setSelectedShift] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shiftNotes, setShiftNotes] = useState('');

  const staff = useMemo(() => [
    {
      id: 1,
      name: 'Ryan',
      title: 'Cloud System Engineer',
    },
    {
      id: 2,
      name: 'Kate',
      title: 'Help Desk Specialist',
    },
    {
      id: 3,
      name: 'John',
      title: 'Application Developer',
    },
    {
      id: 4,
      name: 'Mark',
      title: 'Network Administrator',
    }
  ], []);

  const handleSelectEvent = useCallback((event) => {
    setSelectedShift(event);
    setShiftNotes(event.notes || '');
    setIsModalOpen(true);
  }, []);

  const handleSaveShift = useCallback(() => {
    if (selectedShift) {
      const updatedShifts = shifts.map(shift => 
        shift.id === selectedShift.id 
          ? { ...shift, notes: shiftNotes }
          : shift
      );
      setShifts(updatedShifts);
    }
    setIsModalOpen(false);
  }, [selectedShift, shifts, shiftNotes]);

  const handleDeleteShift = useCallback(() => {
    if (selectedShift) {
      setShifts(shifts.filter(shift => shift.id !== selectedShift.id));
    }
    setIsModalOpen(false);
  }, [selectedShift, shifts]);

  const resourceMap = useMemo(() => staff.map(person => ({
    resourceId: person.id,
    resourceTitle: person.name
  })), [staff]);

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={shifts}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 100px)' }}
        onSelectEvent={handleSelectEvent}
        defaultView="week"
        min={new Date(0, 0, 0, 7, 0, 0)}
        max={new Date(0, 0, 0, 18, 0, 0)}
        resources={resourceMap}
        resourceIdAccessor="resourceId"
        resourceTitleAccessor="resourceTitle"
      />

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="shift-modal"
        overlayClassName="shift-modal-overlay"
      >
        <div className="modal-content">
          <h2>{selectedShift ? 'Edit Shift' : 'New Shift'}</h2>
          
          <div className="form-group">
            <label>Time:</label>
            <p>{selectedShift && `${format(selectedShift.start, 'HH:mm')} - ${format(selectedShift.end, 'HH:mm')}`}</p>
          </div>

          <div className="form-group">
            <label>Notes:</label>
            <textarea
              value={shiftNotes}
              onChange={(e) => setShiftNotes(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="button-group">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteShift}>
              Delete
            </Button>
            <Button variant="primary" onClick={handleSaveShift}>
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Hww;













import React, { useState, useCallback, useMemo } from 'react';
import {
  Button,
  Datepicker,
  Eventcalendar,
  formatDate,
  Input,
  Popup,
  setOptions,
  Snackbar,
  Textarea,
  Toast,
} from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

const defaultShifts = [
  {
    start: '2025-03-11T07:00',
    end: '2025-03-11T13:00',
    title: '07:00 - 13:00',
    resource: 2,
    slot: 1,
  },
  // ... rest of your shifts data
];

const staff = [
  {
    id: 1,
    name: 'Ryan',
    title: 'Cloud System Engineer',
    img: 'https://img.mobiscroll.com/demos/m1.png',
    color: '#e20000'
  },
  {
    id: 2,
    name: 'Kate',
    title: 'Help Desk Specialist',
    img: 'https://img.mobiscroll.com/demos/f1.png',
    color: '#60e81a'
  },
  {
    id: 3,
    name: 'John',
    title: 'Application Developer',
    img: 'https://img.mobiscroll.com/demos/m2.png',
    color: '#3ba7ff'
  },
  {
    id: 4,
    name: 'Mark',
    title: 'Network Administrator',
    img: 'https://img.mobiscroll.com/demos/m3.png',
    color: '#e25dd2'
  },
  {
    id: 5,
    name: 'Sharon',
    title: 'Data Quality Manager',
    img: 'https://img.mobiscroll.com/demos/f2.png',
    color: '#f1e920'
  },
  {
    id: 6,
    name: 'Emma',
    title: 'Product Tactics Agent',
    img: 'https://img.mobiscroll.com/demos/f3.png',
    color: '#1ac38d'
  }
];

function Hww() {
  const [shifts, setShifts] = useState(defaultShifts);
  const [shift, setShift] = useState(null);
  const [shiftDates, setShiftDates] = useState([]);
  const [shiftNotes, setShiftNotes] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [minTime, setMinTime] = useState('07:00');
  const [maxTime, setMaxTime] = useState('13:00');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastOpen, setToastOpen] = useState(false);

  const view = useMemo(() => ({
    schedule: {
      type: 'week',
      startDay: 1,
      endDay: 0,
      startTime: '07:00',
      endTime: '18:00',
    }
  }), []);

  const getShiftTimes = useCallback((event) => {
    const d = event.start;
    const start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 7 : 12);
    const end = new Date(d.getFullYear(), d.getMonth(), d.getDate(), event.slot === 1 ? 13 : 18);

    return {
      title: formatDate('HH:mm', start) + ' - ' + formatDate('HH:mm', end),
      start: start,
      end: end,
    };
  }, []);

  const handleEventClick = useCallback((args) => {
    const event = args.event;
    setEdit(true);
    setMinTime(event.slot === 1 ? '07:00' : '12:00');
    setMaxTime(event.slot === 1 ? '13:00' : '18:00');
    setShift(event);
    setShiftDates([new Date(event.start), new Date(event.end)]);
    setShiftNotes(event.notes || '');
    setPopupOpen(true);
  }, []);

  const handleEventCreated = useCallback((args) => {
    const event = args.event;
    const newEvent = { ...event, ...getShiftTimes(event) };
    setShift(newEvent);
    setShiftDates([new Date(newEvent.start), new Date(newEvent.end)]);
    setShiftNotes('');
    setEdit(false);
    setPopupOpen(true);
  }, [getShiftTimes]);

  const handleSave = useCallback(() => {
    if (shift) {
      const newEvent = {
        ...shift,
        start: shiftDates[0],
        end: shiftDates[1] || shiftDates[0],
        notes: shiftNotes,
        title: formatDate('HH:mm', shiftDates[0]) + ' - ' + formatDate('HH:mm', shiftDates[1] || shiftDates[0])
      };

      if (isEdit) {
        setShifts(prev => prev.map(s => s.id === shift.id ? newEvent : s));
        setToastMessage('Shift updated');
      } else {
        setShifts(prev => [...prev, newEvent]);
        setToastMessage('Shift added');
      }
      setToastOpen(true);
    }
    setPopupOpen(false);
  }, [shift, shiftDates, shiftNotes, isEdit]);

  const handleDelete = useCallback(() => {
    if (shift) {
      setShifts(prev => prev.filter(s => s.id !== shift.id));
      setToastMessage('Shift deleted');
      setToastOpen(true);
    }
    setPopupOpen(false);
  }, [shift]);

  return (
    <div className="md-employee-shifts">
      <Eventcalendar
        view={view}
        data={shifts}
        resources={staff}
        dragToCreate={false}
        dragToResize={false}
        dragToMove={true}
        clickToCreate={true}
        onEventClick={handleEventClick}
        onEventCreated={handleEventCreated}
      />

      <Popup
        isOpen={isPopupOpen}
        onClose={() => setPopupOpen(false)}
        header={isEdit ? 'Edit Shift' : 'Add Shift'}
        buttons={['cancel', 'save']}
        onButtonClick={({button}) => button === 'save' ? handleSave() : setPopupOpen(false)}
      >
        <div className="mbsc-form-group">
          <Input
            label="Shift times"
            value={shiftDates}
            onChange={(ev) => setShiftDates(ev.value)}
            type="time"
            min={minTime}
            max={maxTime}
          />
          <Textarea
            label="Notes"
            value={shiftNotes}
            onChange={(ev) => setShiftNotes(ev.target.value)}
          />
        </div>
        {isEdit && (
          <div className="mbsc-button-group">
            <Button
              color="danger"
              variant="outline"
              onClick={handleDelete}
            >
              Delete shift
            </Button>
          </div>
        )}
      </Popup>

      <Toast
        message={toastMessage}
        isOpen={isToastOpen}
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
}

export default Hww;







































///
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as echarts from "echarts";
import Sidebar from "./Sidebar";

const LeaveManagementPanel = () => {
  const [leaveStats, setLeaveStats] = useState({
    annual: { days: 15, color: '#EBE9FF' },
    sick: { days: 8, color: '#FFE9E9' },
    other: { days: 5, color: '#FFF6E9' },
    total: { days: 12, color: '#E9FFE9' }
  });

  const [recentRequests] = useState([
    { date: '2024-02-15', type: 'Annual', duration: '2 days', status: 'Pending' },
    { date: '2024-02-10', type: 'Sick', duration: '1 day', status: 'Approved' },
    { date: '2024-02-01', type: 'Annual', duration: '3 days', status: 'Approved' }
  ]);

  useEffect(() => {
    const chart = echarts.init(document.getElementById('leaveStats'));
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Annual', 'Sick', 'Other'],
        top: 0
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '40px',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        axisLine: { show: false },
        axisTick: { show: false }
      },
      yAxis: {
        type: 'value',
        max: 4,
        splitLine: {
          lineStyle: { type: 'dashed' }
        }
      },
      series: [
        {
          name: 'Annual',
          type: 'bar',
          stack: 'total',
          data: [2, 1, 3, 0, 2, 1],
          color: '#4F46E5'
        },
        {
          name: 'Sick',
          type: 'bar',
          stack: 'total',
          data: [1, 0, 1, 2, 0, 1],
          color: '#EF4444'
        },
        {
          name: 'Other',
          type: 'bar',
          stack: 'total',
          data: [0, 1, 0, 1, 0, 0],
          color: '#F59E0B'
        }
      ]
    };
    
    chart.setOption(option);
    
    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const LeaveCard = ({ type, days, subtitle, color }) => (
    <div className="leave-card">
      <div className="leave-content" style={{ backgroundColor: color }}>
        <div className="leave-details">
          <span className="days">{days} days</span>
          <span className="type">{type}</span>
          <span className="subtitle">{subtitle}</span>
        </div>
      </div>
    </div>
  );

  const getStatusBadge = (status) => {
    const classes = {
      'Pending': 'status-pending',
      'Approved': 'status-approved'
    };
    return classes[status] || '';
  };





  // ///
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [leaveForm, setLeaveForm] = useState({
    startDate: '',
    endDate: '',
    reason: '',
    type: 'Annual'
  });

  const handleLeaveFormChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    console.log('Leave form submitted:', leaveForm);
    setShowLeaveForm(false);
    setLeaveForm({
      startDate: '',
      endDate: '',
      reason: '',
      type: 'Annual'
    });
  };
  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="container-fluid p-4">
          <div className="leave-cards-container mb-4">
            <div className="row g-4">
              <div className="col-md-3">
                <LeaveCard 
                  type="Annual Leave" 
                  days={leaveStats.annual.days} 
                  subtitle="Remaining" 
                  color={leaveStats.annual.color}
                />
              </div>
              <div className="col-md-3">
                <LeaveCard 
                  type="Sick Leave" 
                  days={leaveStats.sick.days} 
                  subtitle="Remaining" 
                  color={leaveStats.sick.color}
                />
              </div>
              <div className="col-md-3">
                <LeaveCard 
                  type="Other Leave" 
                  days={leaveStats.other.days} 
                  subtitle="Remaining" 
                  color={leaveStats.other.color}
                />
              </div>
              <div className="col-md-3">
                <LeaveCard 
                  type="Total Taken" 
                  days={leaveStats.total.days} 
                  subtitle="This Year" 
                  color={leaveStats.total.color}
                />
              </div>
            </div>
          </div>

          <div className="action-buttons mb-4">
  <div className="row g-3">
    <div className="col-md-4 position-relative">
      <button 
        className="btn btn-dark w-100"
        onClick={() => setShowLeaveForm(!showLeaveForm)}
      >
        <i className="fas fa-plus me-2"></i>
        Apply for New Leave
      </button>
      {showLeaveForm && (
        <div className="leave-form-popup">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title mb-4">Apply for Leave</h5>
              <form onSubmit={handleLeaveSubmit}>
                <div className="mb-3">
                  <select 
                    name="type"
                    className="form-select"
                    value={leaveForm.type}
                    onChange={handleLeaveFormChange}
                  >
                    <option value="Annual">Reason</option>
                    <option value="Sick">Sick Leave</option>
                    <option value="Other">Other Leave</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    className="form-control"
                    value={leaveForm.startDate}
                    onChange={handleLeaveFormChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    className="form-control"
                    value={leaveForm.endDate}
                    onChange={handleLeaveFormChange}
                    required
                  />
                </div>
        
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setShowLeaveForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
              <div className="col-md-4">
                <button className="btn btn-outline-secondary w-100">
                  <i className="fas fa-clock me-2"></i>
                  Check Request Status
                </button>
              </div>
              <div className="col-md-4">
                <button className="btn btn-outline-secondary w-100">
                  <i className="fas fa-calendar me-2"></i>
                  View Leave Calendar
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Recent Leave Requests</h5>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Type</th>
                          <th>Duration</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentRequests.map((request, index) => (
                          <tr key={index}>
                            <td>{request.date}</td>
                            <td>{request.type}</td>
                            <td>{request.duration}</td>
                            <td>
                              <span className={`status-badge ${getStatusBadge(request.status)}`}>
                                {request.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Leave Statistics</h5>
                  <div id="leaveStats" style={{ height: "300px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveManagementPanel;

















































 {tasksOverviewAll.map(task => (
                  <tr key={task.id}>
                    <td>{task.assigned_to}</td>
                    <td>{task.project}</td>due_date
                    <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(task.status)}`}>
                        {task.status}
                      </span>
                    </td>
                    <td>
                      <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                  </tr>
                ))}






























                import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { tasksDelete, TasksList, updateTasks } from '../features/Tasks/TasksSlice';
import Swal from 'sweetalert2';
import { FiEdit2, FiMessageSquare, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

function TasksOverview() {
  const dispatch =useDispatch()
  const [activeTab, setActiveTab] = useState('All Tasks');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Update homepage design',
      project: 'Website Redesign',
      dueDate: '2024-03-20',
      status: 'In Progress',
      priority: 'High'
    },
    {
      id: 2,
      name: 'API Integration',
      project: 'Mobile App',
      dueDate: '2024-03-25',
      status: 'Completed',
      priority: 'Medium'
    },
    {
      id: 3,
      name: 'User Testing',
      project: 'Analytics Dashboard',
      dueDate: '2024-03-22',
      status: 'In Progress',
      priority: 'Low'
    }
  ]);
  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };
  // tasks All
  const { tasksOverviewAll} = useSelector((state) => state.tasks);
  useEffect(() => {
      dispatch(TasksList());
  }, [dispatch]);
  // Search and filter tasks
  const filteredtasks = tasksOverviewAll.filter((task) => {
    const matchesSearch =
    task.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.email?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === '' ||
      (statusFilter === 'Pending' && task.is_active) ||
      (statusFilter === 'completed' && !task.is_active);
    return matchesSearch && matchesStatus;
  });

  // Delete tasks
  const handleDelete = (id) => {
    console.log(id);
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(tasksDelete(id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Employee has been deleted.',
          icon: 'success',
          timer: 2000,
        });
      }
    });
  };


  // Toggle employee status
  const handleToggleStatus = (id, isActive) => {
    dispatch(updateTasks({ id, is_active: !isActive })).then(() => {
      Swal.fire({
        title: 'Updated!',
        text: `Employee status has been ${!isActive ? 'activated' : 'deactivated'}.`,
        icon: 'success',
        timer: 2000,
      });
      dispatch(TasksList())
    });
  };

  // Search and filter employees
  const filteredTasksList = tasksOverviewAll.filter((task) => {
    const matchesSearch =
      task.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.email?.toLowerCase().includes(searchQuery.toLowerCase());
  
    const matchesStatus =
      statusFilter === '' ||
      (statusFilter === 'Pending' && task.is_active) ||
      (statusFilter === 'completed' && !task.is_active);
  
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
       <Header/>
        <div className="tasks-overview-container">
          <div className="tasks-header">
            <div>
              <h2>Tasks Overview</h2>
              <p className="text-muted">Manage and track your assigned tasks</p>
            </div> 
            <Link  to="/admin/addTasks">
          <button style={{display:"inline-block",textDecoration:"none"}} className="add-employee-btn">
            <span>+</span>New Task
          </button></Link>
          </div> 
          <div className="tasks-tabs">
            <button 
              className={`tab-btn ${activeTab === 'All Tasks' ? 'active' : ''}`}
              onClick={() => setActiveTab('All Tasks')}
            >
              All Tasks
            </button>
            <button 
              className={`tab-btn ${activeTab === 'In Progress' ? 'active' : ''}`}
              onClick={() => setActiveTab('In Progress')}
            >
              In Progress
            </button>
            <button 
              className={`tab-btn ${activeTab === 'Completed' ? 'active' : ''}`}
              onClick={() => setActiveTab('Completed')}
            >
              Completed
            </button>
          </div>
          <div className="tasks-table">
            <table>
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Project</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Priority</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody> 
              {tasksOverviewAll?.length > 0 ? (
                tasksOverviewAll.map((task,index) => (
                  <tr key={task.id}>
                    <td>{task.assigned_to}</td>
                    <td>{task.project}</td>
                    <td>{new Date(task.due_date).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(task.status)}`}>
                        {task.status}
                      </span>
                    </td>
                    <td>
                      <span className={`priority-badge ${getPriorityClass(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button  className="action-btn delete fs-5" onClick={() => handleDelete(task?.id)}>
                          <FiTrash2 />
                        </button>
                        <button className="action-btn status fs-5"  onClick={() => handleToggleStatus(task?.id, task?.is_active)}>
                          {task?.is_active ? <FiToggleRight /> : <FiToggleLeft />}
                        </button>
                        <button className="action-btn message fs-5">
                          <FiMessageSquare />
                        </button>
                      </div>
                     </td>
                  </tr>
               ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>
                    No employees found
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
           {/* Table footer */}
           <div className="table-footer">
          <div className="entries-info">
            Showing {tasksOverviewAll.length} of {tasksOverviewAll.length} entries
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksOverview;




























import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TaskOverview.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TasksList } from "../features/Tasks/TasksSlice";

import { tasksDelete, updateTasks } from '../features/Tasks/TasksSlice';
import Swal from 'sweetalert2';
import { FiTrash2, FiMessageSquare, FiToggleLeft, FiToggleRight } from 'react-icons/fi';

const TasksOverview = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
 
  const { tasksOverviewAll, isLoading, isError, message } = useSelector((state) => state.tasks);

  useEffect(() => {
      dispatch(TasksList());
  }, [dispatch]);

  const filteredTasks = tasksOverviewAll ? tasksOverviewAll.filter(task => 
    task.assigned_to?.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'status-pending';
      case 'completed': return 'status-completed';
      default: return '';
    }
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="task-overview-container flex-grow-1">
        <div className="task-header">
          <h2 className="h4 mb-0">Tasks Overview</h2>
          <div className="task-actions">
            <button className="btn-filter">
              <i className="fas fa-filter me-2"></i>Filter
            </button>
            <input
              type="text"
              className="search-tasks"
              placeholder="Search by assigned to..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="tasks-table">
            <table>
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Project</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody> 
              {filteredTasks?.length > 0 ? (
                filteredTasks.map((task,index) => (
                  <tr key={task.id}>
                    <td>{task.assigned_to}</td>
                    <td>{task.project}</td>
                    <td>{new Date(task.due_date).toLocaleDateString()}</td>
                    <td>
                      <span className={`status-badge ${(task.status)}`}>
                        {task.status}
                      </span>
                    </td>
                    <td>
                      <span className={`priority-badge ${(task.priority)}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td> 
                     </td>
                  </tr>
               ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>
                    No employees found
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default TasksOverview;



























import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add message handling logic here
    console.log("Sending message:", message);
    setMessage("");
  };

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chat live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  // const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);

      console.log("Received message:", data); // Debugging log

      setChatMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };

    console.log("Sending message:", data); // Debugging log

    socket.emit("send_message", JSON.stringify(data));

    setChatMessages((prevMessages) => [...prevMessages, data]); // Optimistic UI
    setMessage("");
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <div className="chat-item-avatar">
                    <img src={chat.avatar} alt={chat.name} />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.name}</h6>
                    <p>{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
            <div className="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.position === 'right' ? 'message-right' : 'message-left'}`}
                >
                  {msg.position === 'left' && (
                    <div className="message-avatar">
                      <img src={msg.avatar} alt={msg.sender} />
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-sender">{msg.sender}</div>
                    <div className="message-text">{msg.message}</div>
                    <div className="message-time">{msg.time}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <form onSubmit={sendMessage}>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={username} setUsername={setUsername} />

        <Stack
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, message, createdDate }, index) => {
              const self = sender === username;

              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {message}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(createdDate), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item>
              <Button type="submit">Send</Button>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;



























import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";

const socket = io("http://localhost:5173/");

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const [username, setUsername] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  const scrollRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChatMessages((prev) => [...prev, JSON.parse(data)]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };

    socket.emit("send_message", JSON.stringify(data));
    setChatMessages((prev) => [...prev, data]);
    setMessage("");
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Grid container direction="column" alignItems="center" sx={{ padding: 3 }}>
          <UsernameDialog username={username} setUsername={setUsername} />

          <Stack sx={{ width: "100%", maxWidth: "800px", height: "80vh", border: "1px solid #ddd", borderRadius: 2, overflow: "hidden" }}>
            <Typography variant="h6" sx={{ p: 2, borderBottom: "1px solid #ddd" }}>
              Chat - {selectedChat}
            </Typography>

            <Stack sx={{ flex: 1, overflowY: "auto", p: 2 }}>
              {chatMessages.map((msg, idx) => (
                <Stack key={idx} alignSelf={msg.username === username ? "flex-end" : "flex-start"} sx={{ mb: 1 }}>
                  <Typography variant="caption">{msg.username}</Typography>
                  <Typography variant="body2" sx={{ bgcolor: msg.username === username ? "#90caf9" : "#e0e0e0", p: 1, borderRadius: 1 }}>
                    {msg.message}
                  </Typography>
                  <Typography variant="caption">
                    {format(new Date(msg.createdDate), "hh:mm a")}
                  </Typography>
                </Stack>
              ))}
              <div ref={scrollRef} />
            </Stack>

            <form onSubmit={sendMessage}>
              <Grid container spacing={1} alignItems="center" sx={{ p: 2, borderTop: "1px solid #ddd" }}>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button type="submit" variant="contained" fullWidth>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Stack>
        </Grid>
      </div>
    </div>
  );
};

export default ChatPage;


























import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Grid, TextField, Button, Typography, Stack } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";

const socket = io("http://localhost:5173/");

const ChatPage = () => {
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);
      setChatMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !username) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };

    socket.emit("send_message", JSON.stringify(data));
    setChatMessages((prev) => [...prev, data]);
    setMessage("");
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Grid container direction="column" alignItems="center" sx={{ padding: 3 }}>
          <UsernameDialog username={username} setUsername={setUsername} />

          <Stack
            spacing={2}
            sx={{
              width: "100%",
              height: "80vh",
              backgroundColor: "#f7f7f7",
              borderRadius: 2,
              overflowY: "auto",
              padding: 2,
            }}
          >
            {chatMessages.map((msg, index) => (
              <Stack
                key={index}
                direction="column"
                alignSelf={msg.username === username ? "flex-end" : "flex-start"}
                sx={{ maxWidth: "60%" }}
              >
                <Typography variant="caption" textAlign={msg.username === username ? "right" : "left"}>
                  {msg.username}
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: msg.username === username ? "#90caf9" : "#e0e0e0",
                    padding: 1,
                    borderRadius: 2,
                  }}
                >
                  {msg.message}
                </Typography>
                <Typography variant="caption" textAlign={msg.username === username ? "right" : "left"}>
                  {format(new Date(msg.createdDate), "hh:mm a")}
                </Typography>
              </Stack>
            ))}
            <div ref={messagesEndRef} />
          </Stack>

          <form onSubmit={sendMessage} style={{ width: "100%", marginTop: 10 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  placeholder="Type your message..."
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button type="submit" variant="contained" fullWidth>
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    </div>
  );
};

export default ChatPage;








































import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Grid, TextField, Button, Typography, Stack } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";

const socket = io("http://localhost:5173/");

const ChatPage = () => {
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);
      setChatMessages((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !username) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };

    socket.emit("send_message", JSON.stringify(data));
    setChatMessages((prev) => [...prev, data]);
    setMessage("");
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Grid container direction="column" alignItems="center" sx={{ padding: 3 }}>
          <UsernameDialog username={username} setUsername={setUsername} />

          <Stack
            spacing={2}
            sx={{
              width: "100%",
              height: "80vh",
              backgroundColor: "#f7f7f7",
              borderRadius: 2,
              overflowY: "auto",
              padding: 2,
            }}
          >
            {chatMessages.map((msg, index) => (
              <Stack
                key={index}
                direction="column"
                alignSelf={msg.username === username ? "flex-end" : "flex-start"}
                sx={{ maxWidth: "60%" }}
              >
                <Typography variant="caption" textAlign={msg.username === username ? "right" : "left"}>
                  {msg.username}
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: msg.username === username ? "#90caf9" : "#e0e0e0",
                    padding: 1,
                    borderRadius: 2,
                  }}
                >
                  {msg.message}
                </Typography>
                <Typography variant="caption" textAlign={msg.username === username ? "right" : "left"}>
                  {format(new Date(msg.createdDate), "hh:mm a")}
                </Typography>
              </Stack>
            ))}
            <div ref={messagesEndRef} />
          </Stack>

          <form onSubmit={sendMessage} style={{ width: "100%", marginTop: 10 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={10}>
                <TextField
                  fullWidth
                  placeholder="Type your message..."
                  variant="outlined"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid item xs={2}>
                <Button type="submit" variant="contained" fullWidth>
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    </div>
  );
};

export default ChatPage;













import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
const socket = io("http://localhost:5173/"); // Make sure this URL is correct

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add message handling logic here
    console.log("Sending message:", message);
    setMessage("");
  };

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // Chat Live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  // const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);

      console.log("Received message:", data); // Debugging log

      setChatMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };

    console.log("Sending message:", data); // Debugging log

    socket.emit("send_message", JSON.stringify(data));

    setChatMessages((prevMessages) => [...prevMessages, data]); // Optimistic UI
    setMessage("");
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <div className="chat-item-avatar">
                    <img src={chat.avatar} alt={chat.name} />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.name}</h6>
                    <p>{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
          <div className="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.position === "right" ? "message-right" : "message-left"}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar} alt={msg.sender} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.sender}</div>
                    <div className="message-text">{msg.message}</div>
                    <div className="message-time">{msg.time}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>


            <form onSubmit={handleSendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <form onSubmit={sendMessage}>
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={username} setUsername={setUsername} />

        <Stack
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, message, createdDate }, index) => {
              const self = sender === username;

              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {message}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(createdDate), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
            <Button type="submit" variant="contained" fullWidth>
              <Button type="submit">Send</Button>
              </Button>
                    </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>

       <div className="dashboard-wrapper d-flex">
            <Sidebar />
            <div className="main-content flex-grow-1">
              <Grid container direction="column" alignItems="center" sx={{ padding: 3 }}>
                <UsernameDialog username={username} setUsername={setUsername} />
      
                <Stack
                  spacing={2}
                  sx={{
                    width: "100%",
                    height: "80vh",
                    backgroundColor: "#f7f7f7",
                    borderRadius: 2,
                    overflowY: "auto",
                    padding: 2,
                  }}
                >
                  {chatMessages.map((msg, index) => (
                    <Stack
                      key={index}
                      direction="column"
                      alignSelf={msg.username === username ? "flex-end" : "flex-start"}
                      sx={{ maxWidth: "60%" }}
                    >
                      <Typography variant="caption" textAlign={msg.username === username ? "right" : "left"}>
                        {msg.username}
                      </Typography>
                      <Typography
                        sx={{
                          backgroundColor: msg.username === username ? "#90caf9" : "#e0e0e0",
                          padding: 1,
                          borderRadius: 2,
                        }}
                      >
                        {msg.message}
                      </Typography>
                      <Typography variant="caption" textAlign={msg.username === username ? "right" : "left"}>
                        {format(new Date(msg.createdDate), "hh:mm a")}
                      </Typography>
                    </Stack>
                  ))}
                  <div ref={messagesEndRef} />
                </Stack>
      
                <form onSubmit={sendMessage} style={{ width: "100%", marginTop: 10 }}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={10}>
                      <TextField
                        fullWidth
                        placeholder="Type your message..."
                        variant="outlined"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <Button type="submit" variant="contained" fullWidth>
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </div>
          </div>
    </div>
  );
};

export default ChatPage;

















import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
const socket = io("http://localhost:5173/"); // Make sure this URL is correct

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Remove handleSendMessage since we're using socket-based sendMessage
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  // Chat Live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  // const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);

      console.log("Received message:", data); // Debugging log

      setChatMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };

    console.log("Sending message:", data); // Debugging log

    socket.emit("send_message", JSON.stringify(data));

    setChatMessages((prevMessages) => [...prevMessages, data]); // Optimistic UI
    setMessage("");
  };


  // user api
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profiledata, setProfileData]=useState({})
  
    useEffect(()=>{
     const data= localStorage.getItem("user")
     if(data){
       setProfileData(JSON.parse(data))
     }else{
      setProfileData("")
     }
    },[])
    console.log(profiledata.first_name);
    
  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <div className="chat-item-avatar">
                    <img src={chat.avatar} alt={chat.name} />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.name}</h6>
                    <p>{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
          <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.message}</div>
                    <div className="message-time">{format(new Date(msg.createdDate), 'hh:mm a')}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>


            <form onSubmit={sendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <form onSubmit={sendMessage} className="chat-input">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={profiledata} setUsername={profiledata} />

        <Stack
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, message, createdDate }, index) => {
              const self = sender === username;

              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {message}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(createdDate), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
            <Button type="submit" variant="contained" fullWidth>
              <Button type="submit">Send</Button>
              </Button>
                    </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ChatPage;
























































import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
import { ChatAll } from "../features/Chats/ChatsSlice";
import { useDispatch, useSelector } from "react-redux";
const socket = io("http://localhost:5173/"); // Make sure this URL is correct

const ChatPage = () => {
  const dispatch =useDispatch()
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // Chat Live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);
      console.log("Received message:", data); 
      setChatMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const data = {
      username,
      message,
      createdDate: new Date().toISOString(),
    };
    console.log("Sending message:", data); 
    socket.emit("send_message", JSON.stringify(data));

    setChatMessages((prevMessages) => [...prevMessages, data]); // Optimistic UI
    setMessage("");
  };


  // user api
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profiledata, setProfileData]=useState({})
  
    useEffect(()=>{
     const data= localStorage.getItem("user")
     if(data){
       setProfileData(JSON.parse(data))
       console.log(data);
       
     }else{
      setProfileData("")
     }
    },[])
    console.log(profiledata.first_name);
    
    // chat all
        const { chatsArr } = useSelector((state) => state.chats);
        console.log(chatsArr);
        
      useEffect(() => {
        dispatch(ChatAll());
      }, [dispatch]);
  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <div className="chat-item-avatar">
                    <img src={chat.avatar} alt={chat.name} />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.name}</h6>
                    <p>{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
          <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.message}</div>
                    <div className="message-time">{format(new Date(msg.createdDate), 'hh:mm a')}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>


            <form onSubmit={sendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <form onSubmit={sendMessage} className="chat-input">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={profiledata} setUsername={profiledata} />

        <Stack
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, message, createdDate }, index) => {
              const self = sender === username;

              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {message}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(createdDate), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
            <Button type="submit" variant="contained" fullWidth>
              <Button type="submit">Send</Button>
              </Button>
                    </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ChatPage; 





























import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
import { ChatAll, chats_Creat, UserAll } from "../features/Chats/ChatsSlice";
import { useDispatch, useSelector } from "react-redux";
const socket = io("http://localhost:5173/"); // Make sure this URL is correct

const ChatPage = () => {
  const dispatch =useDispatch()
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chat Live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);
      const formattedData = {
        username: data.username,
        content: data.content,
        timestamp: data.timestamp,
   
      };
   
      
      setChatMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const data = {
      username,
      content: message,
      timestamp: new Date().toISOString(),
      
    };
    console.log('Sending message data:', data);
    dispatch(chats_Creat(data))
    socket.emit("send_message", JSON.stringify(data));
    setChatMessages((prevMessages) => [...prevMessages, data]); 
    setMessage("");
  };

  // user api
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profiledata, setProfileData]=useState({})
  
    useEffect(()=>{
     const data= localStorage.getItem("user")
     if(data){
      //  setProfileData(JSON.parse(data))
      //  console.log(data);
        }else{
      setProfileData("")
     }
    },[])
    
    // UserAll all
        const { AllUser } = useSelector((state) => state.chats);
        console.log(AllUser);
        
      useEffect(() => {
        dispatch(UserAll());
      }, [dispatch]);



         // chat all
      //   const { chatsArr } = useSelector((state) => state.chats);
      //   console.log(chatsArr);
        
      // useEffect(() => {
      //   dispatch(ChatAll());
      // }, [dispatch]);
      
      const selectUser = (id)=>{
        dispatch(ChatAll(id));
      }

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {AllUser?.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  // onClick={() => setSelectedChat(chat.name)}
                  onClick={() => selectUser(chat.id)}
                >
                  <div className="chat-item-avatar">
                    {/* <img src={chat.avatar} alt={chat.name} /> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" alt="" />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.first_name}</h6>
                    <p>{chat.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
          <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.content}</div>
                    <div className="message-time">{format(new Date(msg.timestamp), 'hh:mm a')}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div> 
            <form onSubmit={sendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <form onSubmit={sendMessage} className="chat-input">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={profiledata} setUsername={profiledata} />
        <Stack                                                 
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, content, timestamp }, index) => {
              const self = sender === username;

              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {content}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(timestamp), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
            <Button type="submit" variant="contained" fullWidth>
              <Button type="submit">Send</Button>
              </Button>
                    </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;




import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
import { ChatAll, chats_Creat, UserAll } from "../features/Chats/ChatsSlice";
import { useDispatch, useSelector } from "react-redux";
const socket = io("http://localhost:5173/"); // Make sure this URL is correct

const ChatPage = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chat Live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);
      const formattedData = {
        username: data.username,
        content: data.content,
        timestamp: data.timestamp,
   
      };
      setChatMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedUserId) return;

    const data = {
      username,
      content: message,
      timestamp: new Date().toISOString(),
      receiverId: selectedUserId
    };
    dispatch(chats_Creat(data))
    socket.emit("send_message", JSON.stringify(data));
    setChatMessages((prevMessages) => [...prevMessages, data]); 
    setMessage("");
  };

  // user api
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profiledata, setProfileData]=useState({})
  
    useEffect(()=>{
     const data= localStorage.getItem("user")
     if(data){
      //  setProfileData(JSON.parse(data))
      //  console.log(data);
        }else{
      setProfileData("")
     }
    },[])
    
    // UserAll all
        const { AllUser } = useSelector((state) => state.chats);
        console.log(AllUser);        
      useEffect(() => {
        dispatch(UserAll());
      }, [dispatch]);


         // chat all
        const { chatsArr } = useSelector((state) => state.chats);
        // console.log(chatsArr);
      useEffect(() => {
        dispatch(ChatAll());
      }, [dispatch]);

      const selectUser = (id) => {
    setSelectedUserId(id);
    dispatch(ChatAll(id));
  }

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {AllUser?.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  // onClick={() => setSelectedChat(chat.name)}
                  onClick={() => selectUser(chat.id)}
                >
                  <div className="chat-item-avatar">
                    {/* <img src={chat.avatar} alt={chat.name} /> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" alt="" />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.first_name}</h6>
                    <p>{chat.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
          <div className="chat-messages">
              {chatsArr.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.content}</div>
                    {/* <div className="message-time">{format(new Date(msg.timestamp), 'hh:mm a')}</div> */}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div> 

          <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.content}</div>
                    <div className="message-time">{format(new Date(msg.timestamp), 'hh:mm a')}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div> 
            <form onSubmit={sendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
            <form onSubmit={sendMessage} className="chat-input">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={profiledata} setUsername={profiledata} />
        <Stack                                                 
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, content, timestamp }, index) => {
              const self = sender === username;
              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {content}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(timestamp), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
            <Button type="submit" variant="contained" fullWidth>
              <Button type="submit">Send</Button>
              </Button>
                    </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;