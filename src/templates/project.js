import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Project = ({ location, pageContext }) => {
  let title = pageContext.project.title;
  let description = pageContext.project.description;
  let date = pageContext.project.createdAt;
  let featuredImage = pageContext.project.featured_image
    ? pageContext.project.featured_image.fluid
    : "/defaultFeaturedImage.png";

  let SeoImage =
    pageContext.project.featured_image &&
    pageContext.project.featured_image.fluid.src;

  return (
    <Layout pageTitle="project">
      <SEO
        pageTitle={title}
        pageDescription={description}
        pageImage={SeoImage}
      />

      <div className="content">{title}</div>
    </Layout>
  );
};

export default Project;
