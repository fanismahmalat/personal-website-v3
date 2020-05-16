import React from "react";
import { Link } from "gatsby";

export default (pageCount, index, pathPrefix) => {
  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    let page;

    if (i === index && i !== 1) {
      page = index;
    } else if (i === 1) {
      page = "";
    } else {
      page = i;
    }

    pages.push(
      <Link
        key={i}
        className={index === i ? "current-page" : ""}
        to={`${pathPrefix}/${page}`}
      >
        {i}
      </Link>
    );
  }

  if (pages.length >= 11 && index > 3) {
    let i = index - 1;
    let start = i - 2;
    let length = i + 3;
    pages = pages.slice(start, length);
  } else {
    pages = pages.slice(0, 10);
  }

  return pages;
};
