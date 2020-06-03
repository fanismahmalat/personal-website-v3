import React from "react";

import { GoLinkExternal } from "react-icons/go";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProjectCard from "../components/ProjectCard";
import ContactCard from "../components/ContactCard";

import BackgroundImage from "../images/page_bg.svg";

const Project = ({ pageContext }) => {
  let title = pageContext.project.title;
  let description = pageContext.project.description;
  let live_demo = pageContext.project.live_demo;
  let tagsArr = pageContext.project.tags;

  let tags = tagsArr.map((tag, i) => {
    if (i === tagsArr.length - 1) return <li key={tag}>{tag}</li>;
    else return <li key={tag}>{tag},</li>;
  });

  let case_study_images = pageContext.project.case_study_images.map(img => (
    <img
      key={img.fluid.srcSet}
      srcSet={img.fluid.srcSet}
      sizes="(max-width: 500px) 400px, (max-width: 1400px) 1400px, 1600px"
      alt="Case study"
      className="images"
    />
  ));

  let SeoImage =
    pageContext.project.featured_image &&
    pageContext.project.featured_image.src;

  return (
    <Layout pageTitle="project">
      <SEO
        pageTitle={title}
        pageDescription={description}
        pageImage={SeoImage}
      />
      <BackgroundImage className="page-bg" />

      <section className="page-wrapper">
        <div className="project-wrapper">
          <div className="text">
            <div className="tags">
              <ul>{tags}</ul>
            </div>
            <h1 className="project-title">{title}</h1>
            <p className="project-description">{description}</p>

            {live_demo && (
              <a
                href={live_demo}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Live project <GoLinkExternal />
              </a>
            )}
          </div>

          <div className="case-study">{case_study_images}</div>
        </div>

        <p>Keep reading...</p>
        <ProjectCard project={pageContext.randomProject} />
      </section>

      <ContactCard />
    </Layout>
  );
};

export default Project;
