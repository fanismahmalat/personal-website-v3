import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ProjectCard from "../components/ProjectCard";
import ContactCard from "../components/ContactCard";

const Project = ({ pageContext }) => {
  let title = pageContext.project.title;
  let description = pageContext.project.description;
  let date = pageContext.project.createdAt;
  let featuredImage = pageContext.project.featured_image
    ? pageContext.project.featured_image.fluid
    : "/defaultFeaturedImage.png";

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

      <section className="page-wrapper">
        <p>Keep reading...</p>
        <ProjectCard project={pageContext.randomProject} />
      </section>

      <ContactCard />
    </Layout>
  );
};

export default Project;
