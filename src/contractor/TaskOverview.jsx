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
                    <span className={`status-badge ${task.status.toLowerCase()}`}>
{task.status}
</span>
                    </td>
                    <td>
                    
<span className={`priority-badge ${task.priority.toLowerCase()}`}>
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







