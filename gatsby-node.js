const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.onCreatePage = ({ page, actions }) => {
  // To pass variables to programmaticaly created pages
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const articleTemplate = path.resolve("src/templates/article.js");
    const blogTemplate = path.resolve("src/templates/blog.js");

    resolve(
      graphql(`
        {
          blogArticles: allContentfulBlogPosts(
            sort: { fields: createdAt, order: DESC }
          ) {
            edges {
              node {
                id
                slug
                title
                featured_image {
                  fluid {
                    srcSet
                    src
                  }
                }
                body {
                  body
                }
                createdAt(formatString: "DD MMM YYYY")
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) reject(result.errors);

        let blogArticles = result.data.blogArticles.edges;

        createPaginatedPages({
          edges: blogArticles,
          createPage: createPage,
          pageTemplate: blogTemplate,
          pageLength: 2,
          pathPrefix: "/blog",
          context: {},
        });

        for (let i = 0; i < blogArticles.length; i++) {
          let article = {
            title: blogArticles[i].node.title,
            slug: blogArticles[i].node.slug,
            createdAt: blogArticles[i].node.createdAt,
            body: blogArticles[i].node.body.body,
            featuredImage: blogArticles[i].node.featured_image.fluid,
            id: blogArticles[i].node.id,
          };

          createPage({
            path: `/articles/${blogArticles[i].node.slug}`,
            component: articleTemplate,
            context: {
              article,
            },
          });
        }

        return;
      })
    );
  });
};
