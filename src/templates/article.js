import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import BackgroundImage from "../images/page_bg.svg";
import Button from "../components/Button";
import SocialSection from "../components/SocialMedia/SocialSection";
import ContactCard from "../components/ContactCard";
import BlogCard from "../components/BlogCard";

const Article = ({ pageContext }) => {
  // Current article
  let title = pageContext.article.title;
  let body = pageContext.article.body;
  let date = pageContext.article.createdAt;
  let featured_image = pageContext.article.featured_image
    ? pageContext.article.featured_image.srcSet
    : "/defaultFeaturedImage.png";

  let SeoImage =
    pageContext.article.featured_image &&
    pageContext.article.featured_image.src;

  return (
    <Layout pageTitle="article">
      <SEO pageTitle={title} pageDescription={body} pageImage={SeoImage} />
      <BackgroundImage className="page-bg" />

      <section className="page-wrapper">
        <img
          srcSet={featured_image}
          sizes="(max-width: 500px) 400px, (max-width: 800px) 800px, 1600px"
          alt="Article featured image"
          className="featured-image"
        />

        <div className="article-body">
          <span className="date">{date}</span>
          <h1 className="title">{title}</h1>

          <p className="text" dangerouslySetInnerHTML={{ __html: body }}></p>

          <Button type="solid" placeholder="<< All stories" link="/blog" />
        </div>

        <p>Keep reading...</p>
        <BlogCard article={pageContext.randomArticle} />
      </section>

      <SocialSection />

      <ContactCard />
    </Layout>
  );
};

export default Article;
