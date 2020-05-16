import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ContactForm from "../components/ContactForm";
import SocialSection from "../components/SocialMedia/SocialSection";

const Contact = () => {
  return (
    <Layout pageTitle="contact">
      <SEO pageTitle="Contact" />

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
