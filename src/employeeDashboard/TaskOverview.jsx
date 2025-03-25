import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TaskOverview.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TasksList } from "../features/Tasks/TasksSlice";

const TasksOverview = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
 
  const { tasksOverviewAll, isLoading, isError, message } = useSelector((state) => state.tasks);

  useEffect(() => {
      dispatch(TasksList());
  }, [dispatch]);

  const filteredTasks = tasksOverviewAll?.filter(task => 
    task?.assigned_to?.toLowerCase().includes(searchQuery.toLowerCase())
  ) ?? [];

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

        <div className="table-responsive">
          <div className="task-table-container" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            <div className="task-fields-header d-flex p-2 bg-light border-bottom sticky-top">
              <div className="task-left d-flex align-items-center" style={{ flex: 1, minWidth: '1000px' }}>
                <span style={{ width: '120px' }}>Status</span>
                <span style={{ width: '150px' }}>Assigned To</span>
                <span style={{ width: '200px' }}>Title</span>
                <span style={{ width: '250px' }}>Description</span>
                <span style={{ width: '150px' }}>Project</span>
                <span style={{ width: '100px' }}>Priority</span>
                <span style={{ width: '120px' }}>Due Date</span>
              </div>
            </div>

            <div className="task-list">
              {isLoading ? (
                <div className="task-item text-center p-4">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="text-muted mt-2">Loading tasks...</p>
                </div>
              ) : isError ? (
                <div className="task-item text-center p-4">
                  <p className="text-danger m-0">{message || 'Error loading tasks'}</p>
                </div>
              ) : filteredTasks?.length === 0 ? (
                <div className="task-item text-center p-4">
                  <p className="text-muted m-0">No tasks found for this search.</p>
                </div>
              ) : (
                filteredTasks?.map(task => (
                  <div key={task?.id} className="task-item d-flex align-items-center p-2 border-bottom">
                    <div className="task-left d-flex align-items-center" style={{ flex: 1, minWidth: '1000px' }}>
                      <span style={{ width: '120px' }}>
                        <span className={`status-badge ${task?.status?.toLowerCase()}`}>
                          {task?.status}
                        </span>
                      </span>
                      <span style={{ width: '150px' }}>
                        {task?.assigned_to}
                      </span>
                      <span style={{ width: '200px' }}>
                        {task?.title}
                      </span>
                      <span style={{ width: '250px' }}>
                        {task?.description}
                      </span>
                      <span style={{ width: '150px' }}>
                        {task?.project}
                      </span>
                      <span style={{ width: '100px' }}>
                        <span className={`priority-badge ${task?.priority?.toLowerCase()}`}>
                          {task?.priority}
                        </span>
                      </span>
                      <span style={{ width: '120px' }}>
                        {task?.due_date}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksOverview;