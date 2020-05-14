import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BlogCard from "../components/BlogCard";
import SocialSection from "../components/SocialMedia/SocialSection";

import BackgroundImage from "../images/page_bg.svg";

const Work = () => {
  return (
    <Layout pageTitle="blog">
      <SEO pageTitle="Blog" />
      <BackgroundImage className="page-bg" />

      <div className="page-wrapper">
        <section className="hero">
          <div className="text">
            <h1 className="headline">
              I also like to share
              <br />
              my thoughts...
            </h1>
            <p className="description">
              Grab a coffee and let's discuss! On this page I'm sharing personal
              stories and my thoughts on various topics. I talk about
              development and design and maybe drop some tutorials here and
              there!
            </p>
          </div>
        </section>

        <section className="articles">
          <BlogCard />
        </section>

        <SocialSection />
      </div>
    </Layout>
  );
};

export default Work;
