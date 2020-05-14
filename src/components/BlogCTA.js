import React from "react";

import Button from "./Button";

const BlogCTA = () => {
  return (
    <section className="blog-cta">
      <div className="card-inner">
        <div className="background" />

        <div className="headline">
          <p>Thoughts on design, development and hustling.</p>
          <Button link="/" type="solid" placeholder="Read my blog" />
        </div>

        <img src="/img.png" alt="Blog" />
      </div>
    </section>
  );
};

export default BlogCTA;
