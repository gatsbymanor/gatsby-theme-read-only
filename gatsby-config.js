var gtk = require('gatsby-themes-kit')

var sitePlugins = [
  'gatsby-plugin-sass',
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: 'gatsby-starter-default',
      short_name: 'starter',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    },
  },
  'gatsby-plugin-offline',
]

gtk.loadPlugins().forEach(plugin => {
  sitePlugins.push(plugin)
})

module.exports = {
  pathPrefix: process.env.CI ? `/story` : `/`,
  siteMetadata: {
    author: 'You!',
    title: `Gatsby theme starter`,
  },
  plugins: sitePlugins,
}
