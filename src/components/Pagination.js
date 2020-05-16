import React, { useState, useEffect } from "react";
import { Link } from "gatsby";

import pagination from "../utils/pagination";

const Pagination = ({ pageContext }) => {
  let _isMounted = false;

  const { first, last, pathPrefix, index, pageCount } = pageContext;

  const [styles, setStyles] = useState();
  const [responsivePages, setResponsivePages] = useState();

  console.log(responsivePages);

  let previousPagePath = first
    ? false
    : index === 2
    ? pathPrefix
    : `${pathPrefix}/${index - 1}`;

  let nextPagePath = last ? false : `${pathPrefix}/${index + 1}`;

  let pages = pagination(pageCount, index, pathPrefix);

  useEffect(() => {
    _isMounted = true;
    let styles;
    let displayPages;
    let innerWidth = window.innerWidth;

    // Hide pagination if 1 or less pages
    if (pageCount <= 1) {
      styles = { display: "none" };
      return setStyles(styles);
    }

    // Handle how many pages to display
    const handlePages = () => {
      innerWidth = window.innerWidth;

      // Responsive pages display
      if (innerWidth <= 500) {
        // Current page only
        displayPages = pages.filter(page => parseInt(page.key) === index);
      } else if (innerWidth <= 1050) {
        // 3 pages only
        displayPages = pages.filter(
          page =>
            parseInt(page.key) === index ||
            parseInt(page.key) - 1 === index ||
            parseInt(page.key) + 1 === index
        );
      } else {
        displayPages = pages;
      }
    };

    // Set the initial number of pages to display
    handlePages();
    setResponsivePages(displayPages);

    // Resize listener
    const handleResponsivePages = window.addEventListener("resize", e => {
      handlePages();
      _isMounted && setResponsivePages(displayPages);
    });

    return () => {
      window.removeEventListener("resize", handleResponsivePages);
      _isMounted = false;
    };
  }, []);

  return (
    <div className="pagination">
      <div className="wrapper">
        <Link
          to={previousPagePath ? previousPagePath : ""}
          className={`prev nav-btn ${!previousPagePath && "disabled"}`}
        >
          Previous
        </Link>
        <ul className="pages">{responsivePages}</ul>
        <Link
          to={nextPagePath ? nextPagePath : ""}
          className={`next nav-btn ${!nextPagePath && "disabled"}`}
        >
          Next
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
