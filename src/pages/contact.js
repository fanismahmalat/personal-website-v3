import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactForm from "../components/ContactForm";
import SocialSection from "../components/SocialMedia/SocialSection";

import BackgroundImage from "../images/page_bg.svg";

const Contact = () => {
  return (
    <Layout pageTitle="contact">
      <SEO pageTitle="Contact" />
      <BackgroundImage className="page-bg" />

      <div className="page-wrapper">
        <section>
          <ContactForm />
        </section>
      </div>

      <SocialSection />
    </Layout>
  );
};

export default Contact;
