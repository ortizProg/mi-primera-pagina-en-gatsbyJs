module.exports = {
  siteMetadata: {
    title: `My page`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ["gatsby-plugin-image",
  "gatsby-plugin-sharp",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `pages`,
      path: `${__dirname}/src/pages/`,
    },
  },
  `gatsby-plugin-mdx`
  
],
}
