import React, { useEffect } from "react";

import { BsArrowDown } from "react-icons/bs";

import Layout from "../components/layout";
import SEO from "../components/seo";

import SocialSection from "../components/SocialMedia/SocialSection";

import BackgroundImage from "../images/page_bg.svg";

const ContactSuccess = () => {
  useEffect(() => {
    setTimeout(function () {
      if (typeof window !== `undefined`) window.location.replace(`/`);
    }, 4000);
  }, []);

  return (
    <Layout pageTitle="contact-success">
      <SEO pageTitle="Thank you for contacting!" />
      <BackgroundImage className="page-bg" />

      <div className="page-wrapper">
        <section>
          <h1>Thank you for contacting!</h1>
          <h2>I will be back to you as soon as possible!</h2>
          <h3>
            For now, you can still find me on social media <BsArrowDown />
          </h3>
        </section>
      </div>

      <SocialSection />
    </Layout>
  );
};

export default ContactSuccess;
