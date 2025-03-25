import React, { useState } from 'react';
import { BiSearch, BiEdit, BiTrash } from 'react-icons/bi';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

// import { BiSearch } from 'react-icons/bi';
import { BsBell} from 'react-icons/bs';
import Header from './Header';
function Compliance() {
    const [projects, setProjects] = useState([
        {
          id: 1,
          name: 'Website Redesign',
          category: 'Frontend Development',
          teamLead: {
            name: 'Michael Chen',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
          },
          teamSize: 8,
          progress: 75,
          deadline: '2024-03-22'
        },
        {
            id: 1,
            name: 'Website Redesign',
            category: 'Frontend Development',
            teamLead: {
              name: 'Michael Chen',
              avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
            },
            teamSize: 8,
            progress: 75,
            deadline: '2024-03-22'
          }
      ]);
    
      const [currentPage, setCurrentPage] = useState(1);
      const [searchQuery, setSearchQuery] = useState('');
      const [statusFilter, setStatusFilter] = useState('All');
      const [teamFilter, setTeamFilter] = useState('All');
    
      const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
      };
    
      const filteredProjects = projects.filter(project => {
        return project.name.toLowerCase().includes(searchQuery.toLowerCase());
      });
    
      const totalPages = Math.ceil(filteredProjects.length / 10);
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
  return (
    <div>
       <div className="admin-dashboard-container">
      <Sidebar />
      <div className="admin-main-content">
        
   <Header/>
        <div className="projects-container">
          <div className="projects-header">
            <h3>Compliance</h3>
            <Link  to="/addCompliance">
          <button style={{display:"inline-block",textDecoration:"none"}} className="add-employee-btn">
            <span>+</span> Projects
          </button></Link>
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
                  <th>Progress</th>
                  <th>Deadline</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map(project => (
                  <tr key={project.id}>
                    <td>
                      <div className="project-info">
                        <div className="project-name">{project.name}</div>
                        <div className="project-category">{project.category}</div>
                      </div>
                    </td>
                    <td>
                      <div className="team-lead">
                        <img src={project.teamLead.avatar} alt={project.teamLead.name} />
                        <span>{project.teamLead.name}</span>
                      </div>
                    </td>
                    <td>{project.teamSize}</td>
                    <td>
                      <div className="progress-wrapper">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <span>{project.progress}%</span>
                      </div>
                    </td>
                    <td>{new Date(project.deadline).toLocaleDateString()}</td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit"><BiEdit /></button>
                        <button className="action-btn delete"><BiTrash /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
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
    </div>
  )
}

export default Compliance
