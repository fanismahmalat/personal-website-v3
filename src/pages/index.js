import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import QuoteCard from "../components/QuoteCard";
import BlogCTA from "../components/BlogCTA";
import SocialSection from "../components/SocialMedia/SocialSection";
import ContactCard from "../components/ContactCard";

import BackgroundImage from "../images/homepage_bg.svg";
import HeroIllustration from "../images/homepage_hero.svg";
import MouseIcon from "../images/mouse_icon.svg";

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query HomeProjects {
      projects: allContentfulProjects(
        sort: { fields: createdAt, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            id
            slug
            title
            createdAt
            live_demo
            description {
              description
            }
            featured_image {
              fluid(maxWidth: 1000, quality: 88) {
                srcSet
                src
              }
            }
            case_study_images {
              fluid(maxWidth: 1400, quality: 88) {
                srcSet
                src
              }
            }
            tags
          }
        }
      }
    }
  `);

  let projectCards = data.projects.edges.map(project => {
    return <ProjectCard project={project.node} key={project.node.id} />;
  });

  const handleClick = e => {
    const projectsSection = document.querySelector(".projects").offsetTop;

    window.scrollTo({ top: projectsSection, behavior: "smooth" });
  };

  return (
    <Layout pageTitle="homepage">
      <SEO pageTitle="Home" />
      <BackgroundImage className="hero-background" />
      <div className="bg-color" />

      <div className="page-wrapper">
        <section className="hero">
          <div className="text">
            <h3
              data-sal="slide-down"
              data-sal-delay="550"
              className="author-name"
            >
              Fanis Mahmalat
            </h3>
            <h1
              data-sal="fade"
              data-sal-duration="600"
              data-sal-delay="180"
              className="headline"
            >
              Front-end
              <br />
              Developer
            </h1>
            <p
              data-sal="fade"
              data-sal-duration="700"
              data-sal-delay="200"
              className="description"
            >
              Hi, I'm Fanis, a Web Developer and Multimedia designer. I am the
              guy who brings elegant, pixel-perfect and user-centered designs to
              life - with code of course!
            </p>
            <div onClick={handleClick} className="mouse-icon">
              <MouseIcon />
            </div>
          </div>

          <HeroIllustration className="hero-illustration" />
        </section>

        <section className="projects">
          {projectCards}
          <div className="btn-wrapper">
            <Button
              type="bordered"
              link="/work"
              placeholder="See more projects"
            />
          </div>
        </section>

        <QuoteCard />

        <BlogCTA />

        <SocialSection />

        <ContactCard />
      </div>
    </Layout>
  );
};

export default Homepage;
