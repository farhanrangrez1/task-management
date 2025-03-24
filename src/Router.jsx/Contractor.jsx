import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./projectmanagmentAdmin/Login";
import Dashboard from "../contractor/Dashboard";
import Navbar from "../contractor/Navbar";
import Header from "../contractor/Header";
import Schedule from "../contractor/Schedule";
import AddEventPage from "../contractor/AddEvent";
import TasksOverview from "../contractor/TaskOverview";
import NewTaskForm from "../contractor/NewTaskForm";
import TimeTracking from "../contractor/TimeTracking";
import ChatPage from "../contractor/ChatPage";
import LeaveManagementPanel from "../contractor/LeaveManagementPanel";
import ComplianceSecurity from "../contractor/ComplianceSecurity";
import Profile from "../contractor/Profile";
import NewLeave from "../contractor/NewLeave";
import "./Employee.css"
import LatestLocaction from "../contractor/LatestLocaction";

function Contractor() {
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

export default Contractor




