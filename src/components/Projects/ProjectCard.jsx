// src/components/Projects/ProjectCard.jsx
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Github size={18} /> Code
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
