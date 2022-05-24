// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions;
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// };
const path = require('path');
exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;
  const BlogPostTemplate = path.resolve('./src/templates/BlogPost.js');
  const result = await graphql(`
    {
  allHubspotPost(limit: 100) {
    edges {
      node {
        title,
        url,
        body,
        created,
        slug,
        id,
        meta {
          title,
          description
        },
        feature_image {
          url,
          alt_text
        }
      } 
    }
  }
}
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const BlogPosts = result.data.allHubspotPost.edges;
  BlogPosts.forEach(post => {
    createPage({
      path: `/blog/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.id
      },
    });
  });
};

