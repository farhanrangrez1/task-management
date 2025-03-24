import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

const AddEventPage = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="container py-5">
        <div className="card mx-auto" style={{ 
          maxWidth: "900px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
          border: "none"
        }}>
          <div className="card-body">
            <h1 className="h4 mb-4">Add New Event</h1>
            <form className="needs-validation">
              {/* Event Title */}
              <div className="mb-3">
                <label className="form-label">Event Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter event title"
                />
              </div>

              {/* Date and Time */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Time</label>
                  <input type="time" className="form-control" />
                </div>
              </div>

              {/* Duration */}
              <div className="mt-3">
                <label className="form-label">Duration</label>
                <select className="form-select">
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1.5 hours</option>
                  <option>2 hours</option>
                  <option>2.5 hours</option>
                  <option>3 hours</option>
                </select>
              </div>

              {/* Description */}
              <div className="mt-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter event description"
                ></textarea>
              </div>

              {/* Participants */}
              <div className="mt-3">
                <label className="form-label">Participants</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter participant emails"
                />
              </div>

              {/* Event Color */}
              <div className="mt-3">
                <label className="form-label">Event Color</label>
                <div className="d-flex gap-2">
                  <button
                    type="button"
                    className="btn rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#3b82f6",
                    }}
                  ></button>
                  <button
                    type="button"
                    className="btn rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#22c55e",
                    }}
                  ></button>
                  <button
                    type="button"
                    className="btn rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#a855f7",
                    }}
                  ></button>
                  <button
                    type="button"
                    className="btn rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#ef4444",
                    }}
                  ></button>
                  <button
                    type="button"
                    className="btn rounded-circle"
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#eab308",
                    }}
                  ></button>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 d-flex gap-3">
                <button type="submit" className="btn btn-primary">
                  Create Event
                </button>
                <button type="button" className="btn btn-outline-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEventPage;
