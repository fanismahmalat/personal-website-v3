require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://fanismahmalat.com`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `g64lvbo1m1ge`,
        accessToken: process.env.CONTENTFUL_TOKEN_ID,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
  ],
};
