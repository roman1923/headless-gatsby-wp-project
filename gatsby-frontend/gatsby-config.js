module.exports = {
  siteMetadata: {
    title: `Gatsby WordPress Developers`,
    description: `A database of WordPress developers`,
    author: `@gatsbyjs`,
    siteUrl: `https://developers-db.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://wordpress:80/graphql`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
        excludes: [`/dev-404-page/`, `/404/`, `/404.html`, `/offline-plugin-app-shell-fallback/`],
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://developers-db.com",
        sitemap: "https://developers-db.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WordPress Developers`,
        short_name: `WP Devs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2563eb`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}