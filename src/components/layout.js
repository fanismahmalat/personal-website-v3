import React from "react";
import PropTypes from "prop-types";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

import Header from "./header";

const Layout = ({ children }) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
