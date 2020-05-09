import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
            siteAuthor
            siteLogoDark
            siteLogoWhite
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
