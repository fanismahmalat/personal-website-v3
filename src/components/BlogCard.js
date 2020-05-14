import React from "react";

import Button from "./Button";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="details">
        <span className="date">25 May 2020</span>
        <h2 className="title">The importance of reward systems in UX</h2>
        <Button type="solid" link="/" placeholder="Read the story" />
      </div>

      <img src="/img.png" alt="Article image" />
    </div>
  );
};

export default BlogCard;
