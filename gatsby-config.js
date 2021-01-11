const siteAddress = new URL("https://www.dialogform.in");

module.exports = {
  siteMetadata: {
    title: `DialogForm`,
    description: `Build conversational style e-Learning content.`,
    author: `XFLR-6`,
  },
  plugins: [
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

    // MYMOTE: Everything below added by us

    `gatsby-plugin-sass`,
    // We followed instructions on
    // https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-s3-cloudfront/
    // to deploy to AWS S3 and Cloudfront.
    // We also followed instructions and optimization tips for Cloudfront on
    // https://github.com/jariz/gatsby-plugin-s3/blob/master/recipes/with-cloudfront.md
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "hssvk-chatbot-website",
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
  ],
};
