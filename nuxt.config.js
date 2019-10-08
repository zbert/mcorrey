// const content = require('./static/content.json')
const generateRoutes = require('./generateListOfRoutes')
const generareWorkData = require('./generateWorkData')

module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Michael Correy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal Portfolio' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Josefin+Sans|Playfair+Display:400' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  metaInfo: {
    bodyAttrs: {
      class: 'page__home'
    }
  },
  generate: {
    routes: generateRoutes()
  },
  css: [
    '@/assets/styles/main.scss'
  ],
  plugins: [
    // ssr: false to only include it on client-side
    { src: '~/plugins/vue-scrollwatch.js', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
