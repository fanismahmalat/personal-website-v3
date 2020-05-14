import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const Footer = () => {
  const { siteLogoWhite } = useSiteMetadata();

  return (
    <footer>
      <section className="footer-inner">
        <img src={siteLogoWhite} alt="Fanis Mahmalat Logo" className="logo" />

        <div className="details">
          <span className="copyright">© fanismahmalat.com 2020</span>
          <span className="seperator">|</span>
          <span className="rights"> All rights reserved</span>
          <span className="seperator">|</span>
          <span className="handcrafted">Handcrafted by Fanis Mahmalat</span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
