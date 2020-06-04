import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectCard from "../components/ProjectCard";
import BlogCTA from "../components/BlogCTA";
import SocialSection from "../components/SocialMedia/SocialSection";
import ContactCard from "../components/ContactCard";

import BackgroundImage from "../images/page_bg.svg";

const Work = ({ pageContext }) => {
  console.log(pageContext);

  let projectCards = pageContext.projects.map(project => {
    return <ProjectCard project={project.node} key={project.node.id} />;
  });

  return (
    <Layout pageTitle="work">
      <SEO pageTitle="Work" />
      <BackgroundImage className="page-bg" />

      <div className="page-wrapper">
        <section className="hero">
          <div className="text">
            <h1 className="headline">
              I develop smart ideas
              <br />
              and growing businesses.
            </h1>
            <p className="description">
              On this page you can find some indicative of my work. I love
              combining Frontend and Backend technologies just to make sure
              everything is on spot. I love minimal and polished designs and
              make sure my clients get the best experience.
            </p>
          </div>
        </section>

        <section className="projects">{projectCards}</section>

        <BlogCTA />

        <SocialSection />

        <ContactCard />
      </div>
    </Layout>
  );
};

export default Work;
