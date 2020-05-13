import React from "react";

import SocialCard from "./SocialCard";

const SocialSection = () => {
  return (
    <section className="social-section">
      <div className="social-inner">
        <SocialCard platform="instagram" />
        <SocialCard platform="facebook" />
        <SocialCard platform="linkedin" />
      </div>
    </section>
  );
};

export default SocialSection;
