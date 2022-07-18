
module.exports = {

  siteMetadata: {
    description: ``,
    author: `Digilock`,
    siteUrl: `https://www.digilock.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
    },
    // {
    //   resolve: `gatsby-plugin-linkedin-insight`,
    //   options: {
    //     partnerId: `1643266`,
    //
    //     // Include LinkedIn Insight in development.
    //     // Defaults to false meaning LinkedIn Insight will only be loaded in production.
    //     includeInDevelopment: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [
          '/paynow',
          '/ccpayments',
          '/authorize',
          '/thank-you',
          '/digital-locks',
          '/digital-keypad-locks',
          '/digital-rfid-locks',
          '/digital-motorized-locks',
          '/digital-cam-locks',
          '/mechanical-keypad-combo-locks',
          '/key-code-locks',
          '/electronic-locks',
          '/furniture-locks',
          '/locker-locks',
          '/workplace',
          '/chat-survey',
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     policy: [
    //       {
    //         resolve: 'gatsby-plugin-robots-txt',
    //         options: {
    //           host: 'https://www.digilock.com',
    //           sitemap: 'https://www.digilock.com/sitemap.xml',
    //           policy: [{userAgent: '*', allow: '/'}]
    //         }
    //       }
    //     ],
    //   },
    // },
    `gatsby-plugin-image`,
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
        path: `${__dirname}/src/locales`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-excel`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
        languages: [`en`, `es`, `de`, `fr`, `ja`, `ko`, `nl`, `pt`, `tr`, `zh`],
        defaultLanguage: `en`,
        // if you are using Helmet, you must include siteUrl, and make sure you add http:https
        siteUrl: `http://localhost:8000/`,
        // you can pass any i18next options
        i18nextOptions: {
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es']
          },
          {
            matchPath: '/preview',
            languages: ['en']
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-hubspot',
      options: {
        key: '6829fabf-fd7f-46ec-9a74-aa30ec2ad578',
        filters: {
          state: 'PUBLISHED',
          limit: 100,
          order_by: '-publish_date',
        },
      },
    }
  ],
};
