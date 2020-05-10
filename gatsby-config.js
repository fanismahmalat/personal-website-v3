require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // pathPrefix: `/`,
  siteMetadata: {
    siteTitle: `Fanis Mahmalat - Web Developer`,
    siteDescription: `Portfolio website showcasing development work`,
    siteAuthor: `Fanis Mahmalat <fanismahmalat@gmail.com>`,
    siteLogoDark: `https://images.ctfassets.net/g64lvbo1m1ge/2SkiVvO7EHZvyNPKfUCko6/d675cfbee50a748e47a189fd68d0fdb2/logo_blue_version.png`,
    siteLogoWhite: `https://images.ctfassets.net/g64lvbo1m1ge/1ZYwkPGO2g5Dx6X65uUx9v/989eb34fc1528c5f1e11643f73db2e29/logo_white_version.png`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fanis Mahmalat Portfolio Website`,
        short_name: `FMWebsite`,
        start_url: `/`,
        background_color: `#11638C`,
        theme_color: `#11638C`,
        display: `minimal-ui`,
        icon: `src/images/blue_favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g64lvbo1m1ge`,
        accessToken: process.env.CONTENTFUL_TOKEN_ID,
      },
    },
  ],
};
