import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../employeeDashboard/Sidebar";

const NewTaskForm = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="container py-5">
        <div className="card mx-auto p-4" style={{ 
          maxWidth: "900px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          border: "none"
        }}>
          <h1 className="h4 mb-4">New Task</h1>

          <form>
            {/* Task Title */}
            <div className="mb-3">
              <label className="form-label">Task Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter task title"
              />
            </div>
            {/* Description */}
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter task description"
              ></textarea>
            </div>

            {/* Due Date & Priority */}
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">Due Date</label>
                <input type="date" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="form-label">Priority</label>
                <select className="form-select">
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
            </div>

            {/* Assign To */}
            <div className="mb-3">
              <label className="form-label">Assign To</label>
              <select className="form-select">
                <option>John Doe</option>
                <option>Jane Smith</option>
                <option>Mike Johnson</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-end gap-3">
              <button type="button" className="btn btn-outline-secondary">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTaskForm;
