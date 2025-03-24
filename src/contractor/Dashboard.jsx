import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import * as echarts from "echarts";
import Sidebar from "./Sidebar";

const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Update project documentation", due: "5:00 PM", completed: false },
    { id: 2, text: "Team meeting", due: "2:00 PM", completed: false },
    { id: 3, text: "Review code changes", due: "4:00 PM", completed: false }
  ]);
  const [messages, setMessages] = useState([
    { id: 1, user: "Sarah Johnson", text: "Hey team! Latest updates?", time: "10:30 AM", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" },
    { id: 2, user: "Mike Chen", text: "Working on the feedback updates", time: "10:35 AM", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      echarts.dispose(chartRef.current);
    }
    const timeChart = echarts.init(document.getElementById("timeChart"));
    chartRef.current = timeChart;

    const option = {
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      tooltip: {
        trigger: "axis",
        formatter: '{b}: {c} hours'
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: { show: false },
        axisTick: { show: false }
      },
      yAxis: {
        type: "value",
        name: "Hours",
        splitLine: {
          lineStyle: { type: 'dashed' }
        }
      },
      series: [{
        data: [8, 7.5, 8, 8.5, 7, 0, 0],
        type: "line",
        smooth: true,
        symbolSize: 8,
        lineStyle: { width: 3, color: "#4318FF" },
        areaStyle: {
          color: {
            type: "linear",
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(67, 24, 255, 0.2)" },
              { offset: 1, color: "rgba(67, 24, 255, 0)" }
            ]
          }
        }
      }]
    };

    timeChart.setOption(option);

    return () => {
      if (chartRef.current) {
        echarts.dispose(chartRef.current);
      }
    };
  }, []);

  const handleTaskToggle = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages([...messages, {
      id: messages.length + 1,
      user: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: "path/to/your-avatar.jpg"
    }]);
    setNewMessage("");
  };

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1 bg-light">
        <div className="container-fluid p-4">
          {/* Stats Cards */}
          <div className="row g-3 mb-4">
            {/* ... your existing stats cards code ... */}
            <div className="container-fluid p-4">
          <div className="row mb-4">
            {[
              { 
                icon: "bi bi-people", 
                title: "Current Shift", 
                value: "9:00 AM - 5:00 PM",
                bgColor: "#F4F7FE"
              },
              { 
                icon: "bi bi-list-check", 
                title: "Tasks Due Today", 
                value: "5 Tasks",
                bgColor: "#F4F7FE"
              },
              { 
                icon: "bi bi-clock", 
                title: "Hours Today", 
                value: "6h 30m",
                bgColor: "#F4F7FE"
              },
              { 
                icon: "bi bi-calendar-check", 
                title: "Attendance", 
                value: "Present", 
                success: true,
                bgColor: "#F4F7FE"
              }
            ].map((card, index) => (
              <div className="col-md-3" key={index}>
                <div className="card border-0">
                  <div className="card-body d-flex align-items-center">
                                     <div 
                      className="icon-wrapper rounded-3 d-flex align-items-center justify-content-center"
                      style={{ 
                        backgroundColor: "#4F46E5", // Changed to black
                        width: "48px",
                        height: "48px"
                      }}
                    >
                      <i className={`${card.icon} fs-4`} style={{ color: "#FFFFFF" }}></i> {/* Changed to white */}
                    </div>
                    <div className="ms-3">
                      <h6 className="text-muted mb-1" style={{ fontSize: "14px" }}>{card.title}</h6>
                      <p className={`h6 mb-0 ${card.success ? "text-success" : ""}`} style={{ fontWeight: "600" }}>
                        {card.value}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Rest of the code remains the same */}
        </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              {/* Weekly Time Tracking */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4">Weekly Time Tracking</h5>
                  <div id="timeChart" style={{ height: "300px" }}></div>
                </div>
              </div>

              {/* Tasks Section */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="card-title fw-bold mb-0">Today's Tasks</h5>
                    <button className="btn btn-dark btn-sm">
                      <i className="bi bi-plus"></i> Add Task
                    </button>
                  </div>
                  <div className="tasks-list">
                    {tasks.map(task => (
                      <div key={task.id} className="task-item d-flex justify-content-between align-items-center p-3 bg-light rounded mb-2">
                        <div className="d-flex align-items-center">
                          <input
                            type="checkbox"
                            className="form-check-input me-3"
                            checked={task.completed}
                            onChange={() => handleTaskToggle(task.id)}
                          />
                          <span className={task.completed ? 'text-decoration-line-through' : ''}>
                            {task.text}
                          </span>
                        </div>
                        <span className="text-muted small">Due {task.due}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Team Chat */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4">Team Chat</h5>
                  <div className="chat-messages mb-3" style={{ maxHeight: "300px", overflowY: "auto" }}>
                    {messages.map(message => (
                      <div key={message.id} className="message mb-3">
                        <div className="d-flex align-items-start">
                          <img src={message.avatar} alt="" className="rounded-circle me-2" style={{ width: "32px", height: "32px" }} />
                          <div>
                            <div className="d-flex align-items-center">
                              <strong className="me-2">{message.user}</strong>
                              <small className="text-muted">{message.time}</small>
                            </div>
                            <p className="mb-0">{message.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSendMessage} className="d-flex gap-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-send"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* Announcements */}
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-4">Announcements</h5>
                  <div className="announcement-item p-3 bg-light rounded mb-3">
                    <h6 className="fw-bold mb-2">Office Closure Notice</h6>
                    <p className="mb-0 text-muted">Office will be closed for maintenance this Saturday</p>
                  </div>
                  <div className="announcement-item p-3 bg-light rounded">
                    <h6 className="fw-bold mb-2">New Project Launch</h6>
                    <p className="mb-0 text-muted">Project Phoenix kicks off next week!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;