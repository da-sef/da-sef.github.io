
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: "~/plugins/vue-script2.js",
      mode: "client"
    }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  firebase: {
    config: {
      apiKey: "AIzaSyDcaguozmiEDHdLmKZMwPH2rPgTN5SvVjg",
      authDomain: "dasef-68ba5.firebaseapp.com",
      databaseURL: "https://dasef-68ba5.firebaseio.com",
      projectId: "dasef-68ba5",
      storageBucket: "dasef-68ba5.appspot.com",
      messagingSenderId: "923884417325",
      appId: "1:923884417325:web:47eeba7214573701cea3a4",
      measurementId: "G-YLFQYS59N1"
    },
    services: {
      auth: {
        persistence: 'local',
        onAuthStateChangedMutation: 'user/ON_AUTH_STATE_CHANGED_MUTATION',
        ssr: false
      },
      storage: true
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
