import React from "react";

import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
  return (
    <Layout pageTitle="contact">
      <SEO pageTitle="Contact" />
      <Helmet>
        <script src="https://www.cognitoforms.com/scripts/embed.js"></script>
      </Helmet>

      <div className="page-wrapper">
        <iframe
          title="application-form"
          id="cognito-iframe"
          src="https://www.cognitoforms.com/f/HP2yoWvs2UmHTK0iNLPXBw?id=2"
          style={{
            // visibility: loading ? "hidden" : "visible",
            position: "relative",
            width: 1,
            minWidth: "100%",
            width: "100%",
          }}
          scrolling="yes"
          seamless="seamless"
          height="974"
          width="100%"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
