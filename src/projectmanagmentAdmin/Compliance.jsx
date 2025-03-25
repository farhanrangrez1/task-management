import React, { useState } from "react";
import { BiSearch, BiEdit, BiTrash } from "react-icons/bi";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// import { BiSearch } from 'react-icons/bi';
import { BsBell } from "react-icons/bs";
import Header from "./Header";
function Compliance() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://projectmanagement-employe-1.onrender.com/api/compliences")
      .then((res) => {
        if (res.data.status === "success") {
          // API se aayi fields ko adjust karo agar name alag hain
          const mapped = res.data.data.map((item) => ({
            id: item.id,
            subject: item.subjects,
            description: item.Discription,
            date: item.date,
            postedBy: item.posted_by,
          }));
          setProjects(mapped);
        }
      })
      .catch((err) => {
        console
          .error("GET compliance failed ❌", err)
          .finally(() => setLoading(false));
      });
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [teamFilter, setTeamFilter] = useState("All");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.subject.toLowerCase().includes(query) ||
      project.postedBy.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredProjects.length / 10);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? <p>Loading compliance data...</p> : <table> ... </table>}

      <div className="admin-dashboard-container">
        <Sidebar />
        <div className="admin-main-content">
          <Header />
          <div className="projects-container">
            <div className="projects-header">
              <h3>Compliance</h3>
              <Link to="/admin/addCompliance">
                <button
                  style={{ display: "inline-block", textDecoration: "none" }}
                  className="add-employee-btn"
                >
                  <span>+</span> Add Compliance
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
                    <th>Subject</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Posted By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project) => (
                    <tr key={project.id}>
                      <td>{project.subject}</td>
                      <td>{project.description}</td>
                      <td>{new Date(project.date).toLocaleDateString()}</td>
                      <td>{project.postedBy}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn edit">
                            <BiEdit />
                          </button>
                          <button className="action-btn delete">
                            <BiTrash />
                          </button>
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
                    className={`page-btn ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
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
  );
}

export default Compliance;
