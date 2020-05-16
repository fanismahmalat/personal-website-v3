import React from "react";
import PropTypes from "prop-types";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

import Header from "./Header";

import Footer from "./Footer";

const Layout = ({ children, pageTitle }) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={siteTitle} />
      <main className={`page-${pageTitle}`}>{children}</main>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
