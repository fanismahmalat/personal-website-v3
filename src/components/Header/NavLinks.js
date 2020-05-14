import React from "react";
import { Link } from "gatsby";

const linkSyle = {
  fontWeight: 600,
};

const NavLinks = ({ isSideMenuOpen }) => {
  return (
    <>
      <div className="links-wrapper">
        <ul className="links">
          <li className="single-link">
            <Link to="/" activeStyle={linkSyle}>
              HOME
            </Link>
          </li>
          <li className="single-link">
            <Link to="/work" activeStyle={linkSyle}>
              WORK
            </Link>
          </li>
          <li className="single-link">
            <Link to="/blog" activeStyle={linkSyle}>
              BLOG
            </Link>
          </li>
          <li className="cta single-link">
            <Link to="/contact">GET IN TOUCH</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
