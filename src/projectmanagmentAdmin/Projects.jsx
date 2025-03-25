import React, { useEffect, useState } from 'react';
import { BiSearch, BiEdit, BiTrash } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { BsBell } from 'react-icons/bs';
import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProject, getProjects } from '../features/Project/ProjectSlice';
import Swal from 'sweetalert2';

function Projects() {

   const dispatch = useDispatch();
   const { projects  } = useSelector((state) => state?.projects );
   console.log(projects);

   useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

   console.log("PROJECTS LIN ",projects);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');



  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.project_name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    const matchesTeam = teamFilter === 'All' || project.category === teamFilter;
    return matchesSearch && matchesStatus && matchesTeam;
  });

  const totalPages = Math.ceil(filteredProjects.length / 10);

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
          text: 'Employee has been deleted.',
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
              {filteredProjects.map(project => (
    <tr key={project?.id}>
      <td>
        <div className="project-info">
          <div className="project-name">{project?.project_name}</div>
        </div>
      </td>
      <td>
        <span>{project?.project_lead}</span>
      </td>
      <td>{project?.team_members ? project.team_members.split(',').length : 0}</td>
      <td>
        <div className="project-address">{project?.project_status}</div>
      </td>
      <td>{project?.start_date}</td>
      <td>{project?.due_date}</td>
      <td>
        <div className="action-buttons">
          <button className="action-btn edit"><BiEdit /></button>
          <button className="action-btn delete" onClick={() => handleDelete(project?.id)}><BiTrash /></button>
        </div>
      </td>
    </tr>
  ))}
            </table>
          </div>

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