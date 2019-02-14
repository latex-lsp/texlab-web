const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const component = path.resolve('src/templates/docs.tsx');
  return graphql(`
    {
      allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component,
        context: {},
      });
    });
  });
};
