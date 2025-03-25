import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { BiSearch } from 'react-icons/bi';
import { FiEdit2, FiTrash2, FiMessageSquare, FiToggleLeft, FiToggleRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Header from './Header';
import { getEmployees, deleteEmployee, updateEmployeeStatus } from '../features/Employee/EmployeeSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

 function EmployeeTable() {
  const dispatch = useDispatch();
  const { employees } = useSelector((state) => state.employees);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Fetch employees
  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  // Delete employee
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
        dispatch(deleteEmployee(id));
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
  const handleToggleStatus = (id, isActive) => {
    dispatch(updateEmployeeStatus({ id, is_active: !isActive })).then(() => {
      Swal.fire({
        title: 'Updated!',
        text: `Employee status has been ${!isActive ? 'activated' : 'deactivated'}.`,
        icon: 'success',
        timer: 2000,
      });
      dispatch(getEmployees())
    });
  };

  // Search and filter employees
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === '' ||
      (statusFilter === 'active' && emp.is_active) ||
      (statusFilter === 'inactive' && !emp.is_active);

    return matchesSearch && matchesStatus;
  });
  

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
        <Header />
        <div className="employees-header">
          <h3>Employees</h3>
          <Link to="/admin/addEmployee">
            <button
              style={{ display: 'inline-block', textDecoration: 'none' }}
              className="add-employee-btn"
            >
              <span>+</span> Add Employee
            </button>
          </Link>
        </div>

        {/* Search and status filter */}
        <div className="employees-filters">
          <div className="search-wrapper">
            <BiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search employees..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="status-filter">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        {/* Employee table */}
        <div className="employees-table">
          <table>
            <thead>
              <tr>
                <th>SL.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees?.length > 0 ? (
                filteredEmployees.map((emp,index) => (
                  <tr key={emp?.id}>
                     <td> {index+1} </td>
                    <td>{emp?.first_name} {emp?.last_name}</td>
                    <td>{emp?.email}</td>
                    <td>{emp?.phone}</td>
                    <td> <span className={`status-badge ${  emp?.is_active ? 'active-badge' : 'inactive-badge'}`}>
                     {emp?.is_active ? 'Active' : 'Inactive'} </span></td>
                    <td>
                      <div className="action-buttons">
                       
                        <button  className="action-btn delete fs-5" onClick={() => handleDelete(emp?.id)}>
                          <FiTrash2 />
                        </button>
                        <button className="action-btn status fs-5"  onClick={() => handleToggleStatus(emp?.id, emp?.is_active)}>
                          {emp?.is_active ? <FiToggleRight /> : <FiToggleLeft />}
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

        {/* Table footer */}
        <div className="table-footer">
          <div className="entries-info">
            Showing {filteredEmployees.length} of {employees.length} entries
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeTable;
