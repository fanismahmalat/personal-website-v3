import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Article = ({ location, pageContext }) => {
  let title = pageContext.article.title;
  let body = pageContext.article.body;
  let date = pageContext.article.createdAt;
  let featuredImage = pageContext.article.featured_image
    ? pageContext.article.featured_image.fluid
    : "/defaultFeaturedImage.png";

  let SeoImage =
    pageContext.article.featured_image &&
    pageContext.article.featured_image.fluid.src;

  return (
    <Layout pageTitle="article">
      <SEO pageTitle={title} pageDescription={body} pageImage={SeoImage} />

      <div className="content">{title}</div>
    </Layout>
  );
};

export default Article;
