module.exports = {
  siteMetadata: {
    title: `Cyril Gouverneur | Développeur Front-End | Intégration web Freelance | Création de site internet à Biscarrosse, Landes`,
    description: `Développeur Front-End & Intégrateur Web Freelance spécialisé dans la création de site vitrine professionnel à Biscarrosse dans les Landes`,
    author: `Cyril Gouverneur`,
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
    `gatsby-plugin-sass`,
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
    }
  ],
}
