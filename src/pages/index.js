import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "../images/homepage_bg.svg";
import MouseIcon from "../images/mouse_icon.svg";

const Homepage = () => {
  const handleClick = e => {
    const about_me = document.querySelector(".about-me").offsetTop;

    window.scrollTo({ top: about_me, behavior: "smooth" });
  };

  return (
    <Layout pageTitle="homepage">
      <SEO pageTitle="Home" />
      <BackgroundImage className="hero-background" />

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
            <h1 className="headline">
              Front-end
              <br />
              Developer
            </h1>
            <p className="description">
              Hi, I'm Fanis, a Web Developer and Multimedia designer. I am the
              guy who brings elegant, pixel-perfect and user-centered designs to
              life - with code of course!
            </p>
            <div onClick={handleClick} className="mouse-icon">
              <MouseIcon />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Homepage;
