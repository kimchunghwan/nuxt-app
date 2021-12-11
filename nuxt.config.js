export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  router: {
    middleware: ['auth']
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/oauth2_callback',
      home: '/'
    },
    strategies: {
      google: {
        clientId: "838126075532-sgd74rpvdu44qd50ad9d0kjfhb2vh8ik.apps.googleusercontent.com",
        codeChallengeMethod: '',
        // cookie: true,
        // token: {
        //   property: 'access_token',
        //   type: 'Bearer',
        //   maxAge: 1800
        // },
        // refreshToken: {
        //   property: 'refresh_token',
        //   maxAge: 60 * 60 * 24 * 30
        // },
        // responseType: 'token',
      },
      // google2: {
      //   _scheme: 'oauth2',
      //   authorization_endpoint: 'https://accounts.google.com/o/oauth2/auth',
      //   userinfo_endpoint: `https://www.googleapis.com/oauth2/v3/userinfo`,
      //   scope: [
      //     'email',
      //     'profile',
      //     'openid',
      //     'https://www.googleapis.com/auth/drive.metadata.readonly'
      //   ],
      //   access_type: undefined,
      //   access_token_endpoint: undefined,
      //   response_type: 'token',
      //   token_type: 'Bearer',
      //   clientId: '838126075532-sgd74rpvdu44qd50ad9d0kjfhb2vh8ik.apps.googleusercontent.com', // .envで定義しておく
      //   token_key: 'access_token',
      //   codeChallengeMethod: '',
      //   messageType: ''
      // }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
