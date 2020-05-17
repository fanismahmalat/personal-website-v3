import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import SocialCard from "./SocialCard";

const SocialSection = () => {
  const data = useStaticQuery(graphql`
    query SocialMedia {
      socialMedia: allContentfulSocialMedia {
        edges {
          node {
            identifier
            body {
              body
            }
            account_username
            profile_url
          }
        }
      }
    }
  `);

  const result = data.socialMedia.edges;

  const cards = result.map(social => (
    <SocialCard key={social.node.identifier} platformInfo={social.node} />
  ));

  return (
    <section className="social-section">
      <div className="social-inner">{cards}</div>
    </section>
  );
};

export default SocialSection;
