import { useState } from "react";
import { projects } from "../../data/portfolioData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("All");

  // ดึง tags ทั้งหมดมาเป็น filter options
  const allTags = ["All", ...new Set(projects.flatMap(p => p.tags))];

  // กรอง project ตาม filter
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        {/* Project Filters */}
        <div className="projects-filters">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? "active" : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
