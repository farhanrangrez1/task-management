import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { PolicyList } from "../features/Policy/PolicySlice";

const ComplianceSecurity = () => {

  const dispatch = useDispatch();
   const { PolicyDocuments, isLoading, isError, message } = useSelector((state) => state.policy);
     console.log(PolicyDocuments);

  useEffect(() => {
      dispatch(PolicyList());
  }, [dispatch]);

  const [searchQuery, setSearchQuery] = useState("");
  const [documents, setDocuments] = useState([
    {
      id: 1,
      title: "Employee Handbook",
      lastUpdated: "Jan 15, 2024",
      status: "Acknowledged",
      description: "Complete guide to company policies, procedures, and expectations.",
      action: "View Document"
    },
    {
      id: 2,
      title: "Safety Guidelines",
      lastUpdated: "Feb 1, 2024",
      status: "Unread",
      description: "Workplace safety protocols and emergency procedures.",
      action: "Read & Acknowledge"
    },
    {
      id: 3,
      title: "Data Security Policy",
      lastUpdated: "Jan 30, 2024",
      status: "Action Required",
      description: "Guidelines for handling sensitive company and customer data.",
      action: "Acknowledge Now"
    }
  ]);

  const handleDocumentAction = (docId) => {
    setDocuments(prevDocs => prevDocs.map(doc => {
      if (doc.id === docId) {
        let newStatus;
        let newAction;
        
        switch (doc.action) {
          case "View Document":
            newStatus = "Pending";
            newAction = "Read & Acknowledge";
            break;
          case "Read & Acknowledge":
            newStatus = "In Progress";
            newAction = "Acknowledge Now";
            break;
          case "Acknowledge Now":
            newStatus = "Acknowledged";
            newAction = "View Document";
            break;
          default:
            newStatus = doc.status;
            newAction = doc.action;
        }

        return {
          ...doc,
          status: newStatus,
          action: newAction
        };
      }
      return doc;
    }));
  };

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="container-fluid px-4 py-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="policy-title mb-0">Policy Documents</h4>
            <div className="search-container">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="search-icon" />
            </div>
          </div>

          <div className="policy-grid">
            {PolicyDocuments.map(doc => ({
              ...doc,
              action: doc.status === "Acknowledged" ? "View Document" :
                     doc.status === "Pending" ? "Read & Acknowledge" :
                     "Acknowledge Now"
            })).map(doc => (
              <div key={doc.id} className="policy-card">
                <div className="policy-content">
                  <div className="policy-header">
                    <h5>{doc.title}</h5>
                    <span className={`status-badge ${doc.status.toLowerCase().replace(' ', '-')}`}>
                      {doc.status}
                    </span>
                  </div>
                  <div className="update-date">Last updated: {doc.created_at}</div>
                  <p className="policy-description">{doc.description}</p>
                </div>
                <button
                  className={`btn ${doc.status === "Action Required" ? "btn-dark" : "btn-outline-dark"} w-100`}
                  onClick={() => handleDocumentAction(doc.id)}
                >
                  {doc.action}
                </button>
              </div>
            ))}
          </div>

          <div className="history-section mt-5">
            <h5>Acknowledgment History</h5>
            <div className="table-responsive mt-4">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th>Document</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Employee Handbook v2.1</td>
                    <td><span className="status-badge acknowledged">Acknowledged</span></td>
                    <td>Jan 15, 2024</td>
                    <td><button className="btn btn-link p-0">View Details</button></td>
                  </tr>
                  <tr>
                    <td>IT Security Guidelines</td>
                    <td><span className="status-badge acknowledged">Acknowledged</span></td>
                    <td>Jan 10, 2024</td>
                    <td><button className="btn btn-link p-0">View Details</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* <div className="security-section mt-5">
            <h5>Security Settings</h5>
            <div className="security-card mt-4">
              <div className="two-factor-auth">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6>Two-Factor Authentication</h6>
                    <p className="text-muted mb-0">Add an extra layer of security to your account</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="status-enabled me-3">Enabled</span>
                    <button className="btn btn-dark btn-sm">Configure</button>
                  </div>
                </div>
              </div>

              <div className="permissions-section mt-4 pt-4 border-top">
                <h6>Access Permissions</h6>
                <p className="text-muted">Your current role: Senior Employee</p>
                <ul className="permissions-list">
                  <li><FaCheckCircle className="text-success" /> Access to all company policies</li>
                  <li><FaCheckCircle className="text-success" /> View department-specific guidelines</li>
                  <li><FaCheckCircle className="text-success" /> Acknowledge documents</li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComplianceSecurity;