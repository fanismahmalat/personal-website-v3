import React from "react";

import Button from "./Button";

const ProjectCard = ({ project }) => {
  let slug = project.slug;
  let title = project.title;
  let description = project.description.description;
  let featured_image = project.featured_image.fluid.src;
  let tagsArr = project.tags;

  let tags = tagsArr.map((tag, i) => {
    if (i === tagsArr.length - 1) return <li key={tag}>{tag}</li>;
    else return <li key={tag}>{tag},</li>;
  });

  console.log(project);
  return (
    <div className="project-card">
      <div className="details">
        <div className="tags">
          <ul>{tags}</ul>
        </div>
        <h1 className="project-title">{title}</h1>
        <p className="project-description">{description}</p>
        <Button
          type="solid"
          link={`/projects/${slug}`}
          placeholder="See project"
        />
      </div>

      <img
        src={featured_image}
        // sizes="(max-width: 800px) 800px"
        alt="Project featured image"
      />
    </div>
  );
};

export default ProjectCard;
