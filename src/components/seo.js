import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const SEO = ({ lang, meta, pageTitle, pageDescription, pageImage }) => {
  const {
    siteTitle,
    siteDescription,
    siteAuthor,
    siteLogoDark,
  } = useSiteMetadata();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={pageTitle}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: siteDescription,
        },
        {
          property: `og:title`,
          content: pageTitle || siteTitle,
        },
        {
          property: `og:description`,
          content: pageDescription || siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: pageImage || siteLogoDark,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteAuthor,
        },
        {
          name: `twitter:title`,
          content: pageTitle || siteTitle,
        },
        {
          name: `twitter:description`,
          content: pageDescription || siteDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  siteDescription: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string.isRequired,
};

export default SEO;
