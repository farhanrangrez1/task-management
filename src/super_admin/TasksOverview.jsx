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


  const [activeTab, setActiveTab] = useState('All Tasks');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  // tasks All
  const { tasksOverviewAll} = useSelector((state) => state.tasks);
  useEffect(() => {
      dispatch(TasksList());
  }, [dispatch]);
  // Search and filter tasks
  // const filteredtasks = tasksOverviewAll.filter((task) => {
  //   const matchesSearch =
  //   task.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   task.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   task.email?.toLowerCase().includes(searchQuery.toLowerCase());
  //   const matchesStatus =
  //     statusFilter === '' ||
  //     (statusFilter === 'Pending' && task.is_active) ||
  //     (statusFilter === 'completed' && !task.is_active);
  //   return matchesSearch && matchesStatus;
  // });

  // Delete tasks
  const handleDelete = (id) => {
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
  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
    dispatch(updateTasks({ id, status: newStatus })).then(() => {
      Swal.fire({
        title: 'Updated!',
        text: `Task status has been changed to ${newStatus}`,
        icon: 'success',
        timer: 2000,
      });
      dispatch(TasksList());
    });
  };

  // Search and filter status
  const filteredTasksList = tasksOverviewAll.filter((task) => {
    const matchesSearch =
      task.assigned_to?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.project?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === 'All Tasks' ||
      (activeTab === 'In Progress' && task.status === 'Pending') ||
      (activeTab === 'Completed' && task.status === 'Completed');

    return matchesSearch && matchesTab;
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
              {filteredTasksList?.length > 0 ? (
                filteredTasksList.map((task,index) => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
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
                        <button className="action-btn status fs-5" onClick={() => handleToggleStatus(task?.id, task?.status)}>
                          {task?.status === 'Completed' ? <FiToggleRight /> : <FiToggleLeft />}
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