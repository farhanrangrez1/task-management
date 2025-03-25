import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from '../super_admin/Dashboard';
import Sidebar from '../super_admin/Sidebar';
import EmployeeTable from '../super_admin/EmployeeTable';
import CommunicationTable from '../super_admin/CommunicationTable';
import Add_employee from '../super_admin/Add_employee';
import Add_communication from '../super_admin/Add_communication';
import SchedulingTable from '../super_admin/SchedulingTable';
import New_Scheduling from '../super_admin/New_Scheduling';
import TimeEntry from '../super_admin/TimeEntry';
import TasksOverview from '../super_admin/TasksOverview';
import AddTasks from '../super_admin/AddTasks';
import Projects from '../super_admin/Projects';
import Add_products from '../super_admin/Add_products';
import Compliance from '../super_admin/Compliance';
import Add_Compliance from '../super_admin/Add_Compliance';
import SetGeophence from '../super_admin/SetGeophence';
import GetEmployeStatus from '../super_admin/GetEmployeStatus';
import LatestLocaction from '../super_admin/LatestLocaction';

function Super_admin() {
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

export default Super_admin




