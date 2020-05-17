import React from "react";
import { useStaticQuery } from "gatsby";

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

  let blog = data.blogCTA.edges.filter(edge => {
    return edge.node.identifier === "blog";
  });

  return (
    <section className="blog-cta">
      <div className="card-inner">
        <div className="background" />

        <div className="headline">
          <p>{blog[0].node.headline}</p>
          <Button link="/blog" type="solid" placeholder="Read my blog" />
        </div>

        <img src="/img.png" alt="Blog" />
      </div>
    </section>
  );
};

export default BlogCTA;
