const path = require(`path`);
const gtk = require('gatsby-themes-kit')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const results = await gtk.fetchDataFromSources(graphql)

    createPage({
      path: "/",
      component: path.resolve(`./src/templates/index.js`),
      context: {
        ...results
      },
    })
  } catch (e) {
    throw e
  }

}
