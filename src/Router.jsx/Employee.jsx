import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./projectmanagmentAdmin/Login";
import Dashboard from "../employeeDashboard/Dashboard";
import Navbar from "../employeeDashboard/Navbar";
import Header from "../employeeDashboard/Header";
import Schedule from "../employeeDashboard/Schedule";
import AddEventPage from "../employeeDashboard/AddEvent";
import TasksOverview from "../employeeDashboard/TaskOverview";
import NewTaskForm from "../employeeDashboard/NewTaskForm";
import TimeTracking from "../employeeDashboard/TimeTracking";
import ChatPage from "../employeeDashboard/ChatPage";
import LeaveManagementPanel from "../employeeDashboard/LeaveManagementPanel";
import ComplianceSecurity from "../employeeDashboard/ComplianceSecurity";
import Profile from "../employeeDashboard/Profile";
import NewLeave from "../employeeDashboard/NewLeave";
import "./Employee.css"
import LatestLocaction from "../employeeDashboard/LatestLocaction";

function Employee() {
    const isMobile = window.innerWidth <= 768;
  return (
    <div className="app" id="app" style={{ marginLeft: isMobile ? "0px" : "250px" }}>
    <Header></Header>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/addEvent" element={<AddEventPage />} />
      <Route path="/task" element={<TasksOverview />} />
      <Route path="/newtask" element={<NewTaskForm />} />
      <Route path="/timeTracking" element={<TimeTracking />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="/leavemanagement" element={<LeaveManagementPanel></LeaveManagementPanel>}/>
      <Route path="/policy" element={<ComplianceSecurity></ComplianceSecurity>}/>
      <Route path="/profile" element={<Profile></Profile>}/>
      <Route path="/leave" element={<NewLeave></NewLeave>}/>
      <Route path="/LatestLocaction" element={<LatestLocaction></LatestLocaction>} />
    </Routes>
  </div>
  )
}

export default Employee




