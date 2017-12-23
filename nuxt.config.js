const content = require('./static/content.json')

const workFolderName = 'work'

const sluggify = (words) =>
  words
    .toLowerCase()
    .split(' ')
    .filter(a => a)
    .join('-')

const routes = () =>
  content.work.pages
    .filter(work => work.title)
    .map(work => work.title)
    .map(sluggify)
    .map(slug => `/${workFolderName}/${slug}`)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'mcorrey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'personal portfolio' }
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Playfair+Display:400' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  metaInfo: {
    bodyAttrs: {
      class: 'page__home'
    }
  },
  generate: {
    routes: routes()
  },
  css: [
    '@/assets/styles/main.scss'
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
