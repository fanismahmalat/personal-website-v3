import React from "react";

import Button from "./Button";

const BlogCard = ({ article }) => {
  const slug = article.slug;
  const title = article.title;
  const featured_image = article.featured_image.fluid.srcSet;
  const date = article.createdAt;

  return (
    <div className="blog-card">
      <div className="details">
        <span className="date">{date}</span>
        <h2 className="title">{title}</h2>
        <Button
          type="solid"
          link={`/articles/${slug}`}
          placeholder="Read the story"
        />
      </div>

      <img
        srcSet={featured_image}
        sizes="(max-width: 500px) 400px, (max-width: 800px) 800px, 1600px"
        alt="Article image"
      />
    </div>
  );
};

export default BlogCard;
