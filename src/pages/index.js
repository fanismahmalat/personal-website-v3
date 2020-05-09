import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/seo";

import SideMenu from "../components/Header/SideMenu";

const Homepage = () => (
  <Layout pageTitle="homepage">
    <SEO pageTitle="Home" />
    <div className="page-wrapper"></div>
  </Layout>
);

export default Homepage;
