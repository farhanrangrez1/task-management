import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUpload } from 'react-icons/fa';

const LeaveManagementPanel = () => {
    return (
        <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <main className="container py-4">
                <div className="mx-auto bg-white rounded shadow p-4" style={{ maxWidth: '800px' }}>
                    <h2 className="h4 mb-4">Apply for New Leave</h2>
                    <form>
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Leave Type</label>
                                <select className="form-select">
                                    <option>Annual Leave</option>
                                    <option>Sick Leave</option>
                                    <option>Other Leave</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Duration</label>
                                <select className="form-select">
                                    <option>Full Day</option>
                                    <option>Half Day - Morning</option>
                                    <option>Half Day - Afternoon</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Start Date</label>
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">End Date</label>
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Reason for Leave</label>
                                <textarea className="form-control" rows="4" placeholder="Please provide details about your leave request..."></textarea>
                            </div>
                            <div className="col-12">
                                <label className="form-label">Supporting Documents</label>
                                <div className="border border-secondary rounded p-4 text-center">
                                    <FaUpload className="text-secondary fs-1 mb-3"/>
                                    <div className="d-flex justify-content-center">
                                        <label className="btn btn-outline-primary">
                                            Upload a file
                                            <input type="file" className="d-none"/>
                                        </label>
                                        <span className="ms-2 text-secondary">or drag and drop</span>
                                    </div>
                                    <p className="text-muted small">PNG, JPG, PDF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-outline-secondary">Cancel</button>
                            <button type="submit" className="btn btn-primary">Submit Request</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default LeaveManagementPanel;
