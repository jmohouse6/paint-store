require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'Paint-store',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'MTUwODM3OTktNGI2YS00MTRlLWE4ZTktNTM1MjBjN2ZjM2MyNjM3MjI0MTE3NjQ2NTczOTg1',
        autopop: true
      }
    },
  ],
}
