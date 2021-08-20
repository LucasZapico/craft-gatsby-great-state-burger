const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const defaultTemplate = path.resolve(
    'src/templates/default-template.js',
  );
  const result = await graphql(`
    query {
      craftAPI {
        ping
        entries {
          title
          uid
          uri
          slug
        }
      }
    }
  `);

  await result.data.craftAPI.entries.forEach((node) => {
    createPage({
      path: node.slug,
      component: defaultTemplate,
      context: {
        title: node.title,
      },
    });
  });
};
