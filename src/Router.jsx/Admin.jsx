import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../projectmanagmentAdmin/Dashboard';
import Sidebar from '../projectmanagmentAdmin/Sidebar';
import EmployeeTable from '../projectmanagmentAdmin/EmployeeTable';
import CommunicationTable from '../projectmanagmentAdmin/CommunicationTable';
import Add_employee from '../projectmanagmentAdmin/Add_employee';
import Add_communication from '../projectmanagmentAdmin/Add_communication';
import SchedulingTable from '../projectmanagmentAdmin/SchedulingTable';
import New_Scheduling from '../projectmanagmentAdmin/New_Scheduling';
import TimeEntry from '../projectmanagmentAdmin/TimeEntry';
import TasksOverview from '../projectmanagmentAdmin/TasksOverview';
import AddTasks from '../projectmanagmentAdmin/AddTasks';
import Projects from '../projectmanagmentAdmin/Projects';
import Add_products from '../projectmanagmentAdmin/Add_products';
import Compliance from '../projectmanagmentAdmin/Compliance';
import Add_Compliance from '../projectmanagmentAdmin/Add_Compliance';
import SetGeophence from '../projectmanagmentAdmin/SetGeophence';
import GetEmployeStatus from '../projectmanagmentAdmin/GetEmployeStatus';
import LatestLocaction from '../projectmanagmentAdmin/LatestLocaction';

function Admin() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
         <Route path="/employeeTable" element={<EmployeeTable/>} />
        <Route path="/addEmployee" element={<Add_employee/>} />
        <Route path="/communicationTable" element={<CommunicationTable/>} /> 
        <Route path="/addCommunication" element={<Add_communication/>} />
        <Route path="/schedulingTable" element={<SchedulingTable/>} />
        <Route path="/newScheduling" element={<New_Scheduling/>} />  
        <Route path="/timeEntry" element={<TimeEntry/>} />
        <Route path='/tasksOverview' element={<TasksOverview/>}/>
        <Route path="/addTasks" element={<AddTasks/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/addproducts" element={<Add_products/>} />
        <Route path="/sidebar" element={<Sidebar/>} />
        <Route path="/compliance" element={<Compliance/>} />
        <Route path="/addCompliance" element={<Add_Compliance/>} />
        <Route path="/setGeophence" element={<SetGeophence></SetGeophence>} />
        <Route path="/getEmployeStatus" element={<GetEmployeStatus></GetEmployeStatus>} />        
        <Route path="/latestLocaction" element={<LatestLocaction></LatestLocaction>} />
        </Routes>
    </div>
  )
}

export default Admin




