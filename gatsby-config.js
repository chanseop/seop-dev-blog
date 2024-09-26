/**
 * @type {import('gatsby').GatsbyConfig}
 */

const adapter = require("gatsby-adapter-netlify").default
module.exports = {
  siteMetadata: {
    title: `Seop dev blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: false,
  }),
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}



