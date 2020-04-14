module.exports = {
  siteMetadata: {
    title: 'BeyondTheBlockConsulting',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: "TRACKING ID WILL GO HERE"
    }
  }
  ],
};
