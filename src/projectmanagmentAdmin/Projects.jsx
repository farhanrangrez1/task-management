import React, { useEffect, useState } from 'react';
import { BiSearch, BiEdit, BiTrash } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { BsBell } from 'react-icons/bs';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject, getProjects, updateProjectStatus } from '../features/Project/ProjectSlice';
import { getEmployees } from '../features/Employee/EmployeeSlice';

import Swal from 'sweetalert2';

function Projects() {

   const dispatch = useDispatch();
   const { employees } = useSelector((state) => state.employees);
   const { projects , loading, error } = useSelector((state) => state.projects );
   console.log("proects",projects);

   useEffect(() => {
    dispatch(getProjects());
    dispatch(getEmployees());
  }, [dispatch]);

   console.log("PROJECTS LIN ",projects);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');

  const PROJECT_STATUSES = [
    'Not Started',
    'In Progress',
    'On Hold',
    'Completed'
  ];

const getStatusColor = (status) => {
  switch (status) {
    case 'Not Started':
      return '#ff6b6b'; // Red
    case 'In Progress':
      return '#339af0'; // Blue
    case 'On Hold':
      return '#ffd43b'; // Yellow
    case 'Completed':
      return '#51cf66'; // Green
    default:
      return '#868e96'; // Gray
  }
};
  const handleStatusChange = async (id, newStatus) => {


    Swal.fire({
      title: 'Are you sure Update Status to ' + newStatus + '?',
      // text: 'You won’t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateProjectStatus({ id, project_status: newStatus })).unwrap();
        Swal.fire({
          title: 'Updated!',
          text: 'Project Status has been update.',
          icon: 'success',
          timer: 2000,
        });
      }
    });
  };

  // const handleStatusChange = async (id, newStatus) => {
  //   try {
  //     await dispatch(updateProjectStatus({ 
  //       id, 
  //       project_status: newStatus 
  //     })).unwrap();
      
  //     // Optional: Show success message
  //     Swal.fire({
  //       title: 'Success!',
  //       text: 'Project status updated successfully',
  //       icon: 'success',
  //       timer: 2000
  //     });
  //   } catch (error) {
  //     // Show error message
  //     Swal.fire({
  //       title: 'Error!',
  //       text: error.message || 'Failed to update project status',
  //       icon: 'error'
  //     });
  //   }
  // };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredProjects = projects?.filter(project => {
    if (!project || !project.project_name) return false;
    
    const matchesSearch = project.project_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.project_status === statusFilter;
    const matchesTeam = teamFilter === 'All' || project.category === teamFilter;
    return matchesSearch && matchesStatus && matchesTeam;
  }) || [];

  const totalPages = Math.ceil(filteredProjects.length / 10);

  const getEmployeeName = (id) => {
    const employee = employees.find((emp) => emp.id.toString() === id.toString());
    return employee ? `${employee.first_name} ${employee.last_name}` : "";
  };
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
        dispatch(deleteProject(id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Project has been deleted.',
          icon: 'success',
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
      <Header/>
        <div className="projects-container">
          <div className="projects-header">
            <h3>Projects</h3>
            <Link to="/admin/addproducts">
              <button style={{display:"inline-block",textDecoration:"none"}} className="add-employee-btn">
                <span>+</span>Add Projects
              </button>
            </Link>
          </div>

          {loading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          
          {!loading && !error && (
            <>
              <div className="projects-filters">
                <div className="search-wrapper">
                  <BiSearch className="search-icon" />
                  <input
                    type="search"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                <div className="filter-buttons">
                  <select 
                    className="filter-select"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">Status</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                  <select 
                    className="filter-select"
                    value={teamFilter}
                    onChange={(e) => setTeamFilter(e.target.value)}
                  >
                    <option value="All">Team</option>
                    <option value="Development">Development</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
              </div>

              <div className="projects-table">
                <table>
                  <thead>
                    <tr>
                      <th>Project Name</th>
                      <th>Team Lead</th>
                      <th>Team Size</th>
                      <th>Project Status</th>
                      <th>Due Date</th>
                      <th>Deadline</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map(project => (
                        <tr key={project?.id}>
                          <td>
                            <div className="project-info">
                              <div className="project-name">{project?.project_name}</div>
                            </div>
                          </td>
                          <td>
                            <span>{getEmployeeName(project.project_lead)}</span>
                          </td>
                          <td>{Array.isArray(project?.team_members) ? project.team_members.length : 0}</td>

                          <td>
                            {/* <select
                              className="status-select"
                              value={project?.project_status || ''}
                              onChange={(e) => handleStatusChange(project.id, e.target.value)}
                            >
                              {PROJECT_STATUSES.map((status) => (
                                <option key={status} value={status}>
                                  {status}
                                </option>
                              ))}
                            </select> */}

<select
    className="status-select"
    value={project?.project_status || ''}
    onChange={(e) => handleStatusChange(project.id, e.target.value)}
    style={{
      backgroundColor: getStatusColor(project?.project_status),
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      fontWeight: '500',
      cursor: 'pointer'
    }}
  >
    {PROJECT_STATUSES.map((status) => (
      <option 
        key={status} 
        value={status}
        style={{
          backgroundColor: 'white',
          color: '#333'
        }}
      >
        {status}
      </option>
    ))}
  </select>
                          </td>
                          <td>{project?.start_date}</td>
                          <td>{project?.due_date}</td>
                          <td>
                            <div className="action-buttons">
                              {/* <button className="action-btn edit"><BiEdit /></button> */}
                              <button className="action-btn delete" onClick={() => handleDelete(project?.id)}><BiTrash /></button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" style={{textAlign: 'center'}}>No projects found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          <div className="table-footer">
            <div className="entries-info">
              Showing 1 to 10 of {filteredProjects.length} projects
            </div>
            <div className="pagination">
              <button 
                className="page-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button 
                className="page-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;