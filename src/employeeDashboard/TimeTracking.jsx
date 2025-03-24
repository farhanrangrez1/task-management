import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import * as echarts from "echarts";

const TimeTrackingDashboard = () => {
  const chartRef = useRef(null);
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');
  
  const [attendanceData] = useState({
    loggedIn: {
      count: 35,
      percentage: "68.6%",
      total: "35 employees currently logged in",
      color: "#059669",
      bg: "#ECFDF5"
    },
    absent: {
      count: 8,
      percentage: "15.7%",
      total: "8 employees absent today",
      color: "#DC2626",
      bg: "#FEF2F2"
    },
    late: {
      count: 5,
      percentage: "9.8%",
      total: "5 employees arrived late",
      color: "#D97706",
      bg: "#FFFBEB"
    },
    undertime: {
      count: 3,
      percentage: "5.9%",
      total: "3 employees under required hours",
      color: "#EA580C",
      bg: "#FFF7ED"
    },
    monthly : {
      count: 80,
      percentage: "5.9%",
      total: "Monthly Hours: 3 (-5.9%). 3 employees below required hours.",
      color: "#EA580C",
      bg: "#FFF7ED"
    },
    weekly : {
      count: 15,
      percentage: "5.9%",
      total: "Weekly: 3 (-5.9%) | Monthly: 3 (-5.9%) | 3 under hours.",
      color: "#EA580C",
      bg: "#FFF7ED"
    },
   
  });

  const [activities] = useState([
    {
      title: "Project Research",
      timeRange: "9:00 AM - 11:30 AM",
      duration: "2.5h",
      color: "#22C55E"
    },
    {
      title: "Team Meeting",
      timeRange: "1:00 PM - 2:00 PM",
      duration: "1h",
      color: "#3B82F6"
    },
    {
      title: "Development",
      timeRange: "2:30 PM - 5:30 PM",
      duration: "3h",
      color: "#A855F7"
    }
  ]);

  const [projects] = useState([
    { name: "Website Redesign", progress: 70 },
    { name: "Mobile App", progress: 45 },
    { name: "API Integration", progress: 90 }
  ]);

  const renderAttendanceCard = (type, data) => (
    <div className="col-6 col-md-3">
      <div className="attendance-card p-3 h-100" style={{ backgroundColor: data.bg, borderRadius: '12px' }}>
        <div className="text-muted small mb-2">{type}</div>
        <div className="d-flex justify-content-between align-items-baseline mb-2">
          <h4 className="fw-bold mb-0" style={{ color: data.color }}>{data.count}</h4>
          <span className="small" style={{ color: data.color }}>{data.percentage}</span>
        </div>
        <p className="text-muted small mb-0">{data.total}</p>
      </div>
    </div>
  );

  useEffect(() => {
    if (chartRef.current) {
      const timeChart = echarts.init(chartRef.current);
      const option = {
        grid: {
          top: 50,
          left: 50,
          right: 20,
          bottom: 30
        },
        tooltip: {
          trigger: 'axis',
          formatter: '{b}: {c} hours',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderColor: '#e5e7eb',
          borderWidth: 1,
          textStyle: { color: '#1f2937' }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: { color: '#6b7280' }
        },
        yAxis: {
          type: 'value',
          name: 'Hours',
          min: 0,
          max: 10,
          interval: 2,
          axisLine: { show: false },
          axisTick: { show: false },
          splitLine: {
            lineStyle: { type: 'dashed', color: '#e5e7eb' }
          },
          axisLabel: { color: '#6b7280' }
        },
        series: [{
          data: [8, 7.5, 8, 8.5, 7, 0, 0],
          type: 'line',
          smooth: true,
          symbolSize: 8,
          itemStyle: {
            color: '#4318FF',
            borderWidth: 2,
            borderColor: '#fff'
          },
          lineStyle: { 
            width: 3,
            color: '#4318FF'
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(67, 24, 255, 0.1)' },
                { offset: 1, color: 'rgba(67, 24, 255, 0)' }
              ]
            }
          }
        }]
      };
      timeChart.setOption(option);
      
      const handleResize = () => timeChart.resize();
      window.addEventListener('resize', handleResize);
      return () => {
        timeChart.dispose();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [selectedPeriod]);

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="container-fluid p-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="card mb-4">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Attendance Overview</h5>
                  <div className="row g-3">
                    {renderAttendanceCard("Logged In", attendanceData.loggedIn)}
                    {renderAttendanceCard("Absent", attendanceData.absent)}
                    {renderAttendanceCard("Late", attendanceData.late)}
                    {renderAttendanceCard("Undertime", attendanceData.undertime)} 
                    {renderAttendanceCard("Monthly Total Hours", attendanceData.monthly)}
                    {renderAttendanceCard("Weekly hours total", attendanceData.weekly)}
                  </div>                  <p className="small text-muted mt-3">
                    Total Employees: <strong>51</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="card time-overview-card mb-4">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title">Time Overview</h5>
                    <select 
                      className="form-select form-select-sm"
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      style={{ width: '120px' }}
                    >
                      <option>This Week</option>
                      <option>Last Week</option>
                    </select>
                  </div>
                  <div ref={chartRef} style={{ height: "240px" }}></div>
                </div>
              </div>

              <div className="card activities-card">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Recent Activities</h5>
                  {activities.map((activity, index) => (
                    <div key={index} className="activity-item d-flex justify-content-between align-items-center py-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="activity-dot" style={{ backgroundColor: activity.color }}></div>
                        <div>
                          <div className="activity-title">{activity.title}</div>
                          <div className="activity-time text-muted">{activity.timeRange}</div>
                        </div>
                      </div>
                      <div className="activity-duration text-muted">{activity.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card summary-card">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Today's Summary</h5>
                  <div className="summary-item mb-4">
                    <div className="text-muted mb-2">Hours Worked</div>
                    <div className="summary-value">6.5h</div>
                  </div>
                  <div className="summary-item mb-4">
                    <div className="text-muted mb-2">Break Time</div>
                    <div className="summary-value">1h</div>
                  </div>
                  <div className="summary-item">
                    <div className="text-muted mb-2">Productivity</div>
                    <div className="summary-value">85%</div>
                  </div>
                </div>
              </div>

              <div className="card projects-card mt-4">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Projects</h5>
                  {projects.map((project, index) => (
                    <div key={index} className="project-item mb-4 last:mb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <span>{project.name}</span>
                        <span className="text-muted">{project.progress}%</span>
                      </div>
                      <div className="progress" style={{ height: "8px" }}>
                        <div 
                          className="progress-bar" 
                          role="progressbar"
                          style={{ width: `${project.progress}%` }}
                          aria-valuenow={project.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTrackingDashboard;