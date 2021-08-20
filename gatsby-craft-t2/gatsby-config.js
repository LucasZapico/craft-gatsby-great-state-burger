require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'gatsby-craft-t1',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'CraftAPI',
        fieldName: 'craftAPI',
        url: 'http://web.test/actions/graphql/api',
        headers: {
          Authorization: `Bearer ${process.env.CRAFT_AUTHENTICATION_TOKEN}`,
        },
      },
    },
    // {
    //   resolve: 'gatsby-source-craftcms',
    //   options: {
    //     endpoint: 'http://web.test/actions/graphql/api',
    //     token: `Bearer ${process.env.CRAFT_AUTHENTICATION_TOKEN}`,
    //   },
    // },
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/base/layout.js'),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}',
          ],
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
        __key: 'svgs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
