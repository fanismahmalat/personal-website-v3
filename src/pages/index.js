import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import QuoteCard from "../components/QuoteCard";
import BlogCard from "../components/BlogCard";
import SocialSection from "../components/SocialMedia/SocialSection";

import BackgroundImage from "../images/homepage_bg.svg";
import HeroIllustration from "../images/homepage_hero.svg";
import MouseIcon from "../images/mouse_icon.svg";

const Homepage = () => {
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
        <section className="hero" data-sal="fade-up">
          <div className="text">
            <h3
              data-sal="slide-up"
              data-sal-delay="150"
              className="author-name"
            >
              Fanis Mahmalat
            </h3>
            <h1
              data-sal="fade"
              data-sal-duration="700"
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
          <ProjectCard />
          <div className="btn-wrapper">
            <Button type="bordered" link="/" placeholder="See more projects" />
          </div>
        </section>

        <QuoteCard />

        <BlogCard />

        <SocialSection />
      </div>
    </Layout>
  );
};

export default Homepage;
