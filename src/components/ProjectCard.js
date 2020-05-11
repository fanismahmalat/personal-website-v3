import React from "react";

import Button from "./Button";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="details">
        <div className="tags">
          <ul>
            <li>Web,</li>
            <li>Development</li>
          </ul>
        </div>
        <h1 className="project-title">Todo List</h1>
        <p className="project-description">
          Web app created for practice purposes. The technologies used for this
          project were React for UI framework, NodeJS for the backend and
          Firebase for the database.
        </p>
        <Button type="solid" link="#link" placeholder="See project" />
      </div>

      <img src="/img.png" alt="Project featured image" />
    </div>
  );
};

export default ProjectCard;
