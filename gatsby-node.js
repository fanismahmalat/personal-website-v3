const path = require("path");
const createPaginatedPages = require("gatsby-paginate");

exports.onCreatePage = ({ page, actions }) => {
  // To pass variables to programmaticaly created pages
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // Templates
    const projectTemplate = path.resolve("src/templates/project.js");
    const articleTemplate = path.resolve("src/templates/article.js");
    const blogTemplate = path.resolve("src/templates/blog.js");
    const workTemplate = path.resolve("src/templates/work.js");

    // Queries
    resolve(
      graphql(`
        query MyQuery {
          blogArticles: allContentfulBlogPosts(
            sort: { fields: createdAt, order: DESC }
          ) {
            edges {
              node {
                id
                slug
                title
                featured_image {
                  fluid(maxWidth: 1600, quality: 78) {
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
          projects: allContentfulProjects(
            sort: { fields: createdAt, order: DESC }
          ) {
            edges {
              node {
                id
                slug
                title
                createdAt
                live_demo
                description {
                  description
                }
                featured_image {
                  fluid(maxWidth: 1000, quality: 88) {
                    srcSet
                    src
                  }
                }
                case_study_images {
                  fluid(maxWidth: 1400, quality: 88) {
                    srcSet
                    src
                  }
                }
                tags
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) reject(result.errors);

        // Creating WORK PAGE
        let projects = result.data.projects.edges;

        // Limiting projects to 5
        let limitProjects = projects.slice(0, 4);

        createPage({
          path: `/work`,
          component: workTemplate,
          context: {
            projects: limitProjects,
          },
        });

        // Returns a random project from projects array
        const randomProjectGenerator = current => {
          let index;

          do {
            index = Math.floor(Math.random() * projects.length);
          } while (index === current);

          return {
            title: projects[index].node.title,
            slug: projects[index].node.slug,
            createdAt: projects[index].node.createdAt,
            live_demo: projects[index].node.live_demo,
            description: projects[index].node.description,
            featured_image: projects[index].node.featured_image,
            case_study_images: projects[index].node.case_study_images.fluid,
            tags: projects[index].node.tags,
            id: projects[index].node.id,
          };
        };

        for (let i = 0; i < projects.length; i++) {
          let project = {
            title: projects[i].node.title,
            slug: projects[i].node.slug,
            createdAt: projects[i].node.createdAt,
            live_demo: projects[i].node.live_demo,
            description: projects[i].node.description.description,
            featured_image: projects[i].node.featured_image.fluid,
            case_study_images: projects[i].node.case_study_images,
            tags: projects[i].node.tags,
            id: projects[i].node.id,
          };

          let randomProject = randomProjectGenerator(i);

          createPage({
            path: `/projects/${projects[i].node.slug}`,
            component: projectTemplate,
            context: {
              project,
              randomProject,
            },
          });
        }

        // Creating BLOG PAGE
        let blogArticles = result.data.blogArticles.edges;

        createPaginatedPages({
          edges: blogArticles,
          createPage: createPage,
          pageTemplate: blogTemplate,
          pageLength: 4,
          pathPrefix: "/blog",
          context: {},
        });

        // Returns a random article from blogArticles array
        const randomArticleGenerator = current => {
          let index;

          do {
            index = Math.floor(Math.random() * blogArticles.length);
          } while (index === current);

          return {
            title: blogArticles[index].node.title,
            slug: blogArticles[index].node.slug,
            createdAt: blogArticles[index].node.createdAt,
            body: blogArticles[index].node.body.body,
            featured_image: blogArticles[index].node.featured_image,
            id: blogArticles[index].node.id,
          };
        };

        for (let i = 0; i < blogArticles.length; i++) {
          let article = {
            title: blogArticles[i].node.title,
            slug: blogArticles[i].node.slug,
            createdAt: blogArticles[i].node.createdAt,
            body: blogArticles[i].node.body.body,
            featured_image: blogArticles[i].node.featured_image.fluid,
            id: blogArticles[i].node.id,
          };

          let randomArticle = randomArticleGenerator(i);

          // Creates a page for each article and passing the article and a random one
          createPage({
            path: `/articles/${blogArticles[i].node.slug}`,
            component: articleTemplate,
            context: {
              article,
              randomArticle,
            },
          });
        }

        return;
      })
    );
  });
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ContentfulProjects implements Node @infer {
      live_demo: String
    }
  `;
  createTypes(typeDefs);
};
