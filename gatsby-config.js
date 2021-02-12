module.exports = {
  siteMetadata: {
    title: `Gatsby and WordPress Demo Starter`,
    description: `Demo starter for combining Gatsby and WordPress. Created for the LinkedIn Learning course "Building a Headless WordPress Site with Gatsby" and based on Gatsby Default Starter by @gatsbyjs`,
    author: `@mor10`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://headless-site/graphql`,
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress-menus",
      options: {
        wordpressUrl: "http://headless-site/",
        languages: ["de", "en"],
        enableWpml: true,
        allowCache: true,
        maxCacheDurationSeconds: 60 * 60 * 24
      },
        },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
