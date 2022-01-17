module.exports = {
  siteMetadata: {
    siteUrl: "https://www.syracusehistory.com",
    title: "Syracuse History",
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `477006365`,
      },
    }
  ],
};
