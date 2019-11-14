module.exports = {
  siteMetadata: {
    title: `Gatsby Base`,
    description: `Base startup files for gatsby projects`,
    author: `@jessicavrooyen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          `gatsby-remark-autolink-headers`, 
          `gatsby-remark-smartypants`,
        ],
        plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 600,
          },
        },
        `gatsby-remark-autolink-headers`,
        `gatsby-remark-smartypants`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-base`,
        short_name: `base`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
