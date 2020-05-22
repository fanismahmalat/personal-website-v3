import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Button from "./Button";

const BlogCTA = () => {
  const data = useStaticQuery(graphql`
    query BlogCTA {
      blogCTA: allContentfulCallToActions {
        edges {
          node {
            identifier
            headline
            body {
              body
            }
          }
        }
      }
    }
  `);

  let blog = {};

  data.blogCTA.edges.map(edge => {
    if (edge.node.identifier === "blog") return (blog = edge.node);
  });

  return (
    <section className="blog-cta">
      <div className="card-inner">
        <div className="background" />

        <div className="headline">
          <p>{blog.headline}</p>
          <Button link="/blog" type="solid" placeholder="Read my blog" />
        </div>

        <img src="/img.png" alt="Blog" />
      </div>
    </section>
  );
};

export default BlogCTA;
