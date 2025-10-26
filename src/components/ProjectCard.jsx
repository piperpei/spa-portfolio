import React from "react";

function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <div className="image-placeholder">X</div>

      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;