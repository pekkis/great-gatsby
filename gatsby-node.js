/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path");

function* generatorePage(nodes) {
  for (const node of nodes) {
    yield {
      path: `/${node.uri}`,
      component: path.resolve("./src/templates/page.js"),
      context: node,
    };
  }
}

function* generatore(data) {
  yield* generatorePage(data.wpapi.pages.nodes);
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const query = await graphql(`
    query RootDataQuery {
      wpapi {
        pages {
          nodes {
            id
            uri
          }
        }
      }
    }
  `);

  for (const page of generatore(query.data)) {
    console.log('CREATING PAGE', page.path)
    createPage(page)
  }
};
