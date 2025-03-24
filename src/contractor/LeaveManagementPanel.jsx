import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as echarts from "echarts";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetLeaveBalance, LeaveCreat, RecentLeaveRequestsList } from "../features/LeaveManagement/LeaveSlice";

const LeaveManagementPanel = () => {
const dispatch=useDispatch()

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
    start_date: '',
    end_date: '',
    reason: '',
    days:'',
    leave_type: 'Annual'
    
  });

  const handleLeaveFormChange = (e) => {
    const { name, value } = e.target;
    setLeaveForm(prev => {
      const newForm = {
        ...prev,
        [name]: value
      };
      
      if ((name === 'start_date' || name === 'end_date') && newForm.start_date && newForm.end_date) {
        const start = new Date(newForm.start_date);
        const end = new Date(newForm.end_date);
        if (end >= start) {
          const diffTime = Math.abs(end.getTime() - start.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
          newForm.days = diffDays.toString();
        } else {
          newForm.days = '';
        }
      }
      
      return newForm;
    });
  };

  const handleLeaveSubmit = (e) => {
    e.preventDefault();
    console.log('Leave form submitted:', leaveForm);
    setShowLeaveForm(false);
    setLeaveForm({
      start_date: '',
      end_date: '',
      reason:'',
      days:'',
      leave_type: 'Annual'
    });
    dispatch(LeaveCreat(leaveForm))
  };

  // GetLeaveBalance
  const { leaveData,RecentLeaveRequests, isLoading, isError, message } = useSelector((state) => state.leave);
      console.log("Location Data:", leaveData); 
console.log(RecentLeaveRequests);

      useEffect(() => {
          dispatch(GetLeaveBalance());
      }, [dispatch]);
  

// RecentLeaveRequestsList
      useEffect(() => {
          dispatch(RecentLeaveRequestsList());
      }, [dispatch]);
  
  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="container-fluid p-4">
          <div className="leave-cards-container mb-4">
            <div className="row g-4">
            

{leaveData && !Array.isArray(leaveData) ? (
    <div className="col-md-3">
        <LeaveCard 
            type="Annual Leave"
            days={leaveData.annual_remaining} 
            subtitle={`Remaining (${leaveData.year})`}
            color={leaveStats.annual.color}
        />
    </div>
) : null}
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
                    <option value="Annual">Annual Leave</option>
                    <option value="Sick">Sick Leave</option>
                    <option value="Other">Other Leave</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">reason</label>
                  <textarea
                    name="reason"
                    className="form-control"
                    value={leaveForm.reason}
                    onChange={handleLeaveFormChange}
                    required
                    rows="3"
                    placeholder="Please provide a reason for your leave"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    name="start_date"
                    className="form-control"
                    value={leaveForm.start_date}
                    onChange={handleLeaveFormChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    name="end_date"
                    className="form-control"
                    value={leaveForm.end_date}
                    onChange={handleLeaveFormChange}
                    required
                  />
                </div>
                <div className="mb-3">
  <label className="form-label">Number of Days</label>
  <input
    type="text"
    name="days"
    className="form-control"
    value={leaveForm.days}
    readOnly
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
                          <th>Start Date</th>
                          <th>End Date</th>
                          <th>Type</th>
                          <th>Duration</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                      {Array.isArray(RecentLeaveRequests) ? 
  RecentLeaveRequests.map((request, index) => (
    <tr key={index}>
      <td>{request.start_date}</td>
      <td>{request.end_date}</td>
      <td>{request.leave_type}</td>
      <td>{request.days}</td>
      <td>
        <span className={`status-badge ${getStatusBadge(request.status)}`}>
          {request.status}
        </span>
      </td>
    </tr>
  )) 
  : null
}
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