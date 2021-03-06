import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - frontend',
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Nanum+Gothic:wght@400;700;800&display=swap',
      },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/style.scss'
  ],
  loading: '~/components/material/loading',
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/i18n.js',
    { src: '~/plugins/vue-notification.js', ssr: false },
    { src: '~/plugins/vue-tinymce.js', ssr: false },
  ],
  router: {
    middleware: 'i18n',
  },
  generate: {
    routes: [
      {
        path: '/:lang',
        component: 'pages/index.vue',
        children: [
          {
            path: '/',
            component: 'pages/_lang/index.vue',
            name: 'home',
          },
          {
            path: 'contact_us',
            component: 'pages/_lang/Contact_us.vue',
            name: 'contact_us',
          },
          {
            path: '/Tenders',
            component: 'pages/_lang/tenders.vue',
            children: [
              {
                path: '/',
                component: 'pages/_lang/tenders.vue',
                name: 'Tender',
              },
              {
                path: '/tenderDetails/:TenderDetails',
                component: 'pages/_lang/tenders/_TenderDetails.vue',
                name: 'TenderDetails',
              },
            ]
          },
          {
            path: 'About_us',
            component: 'pages/_lang/About_us.vue',
            name: 'About_us',
          },
          {
            path: 'Login',
            component: 'pages/_lang/Login.vue',
            name: 'Login',
          },
          {
            path: '/ControlPanel',
            component: 'pages/_lang/controlPanel.vue',
            children: [
              
              {
                path: '/Majors',
                component: 'pages/_lang/controlPanel/Majors.vue',
                name: 'Majors',
              },
              {
                path: '/Tenders',
                component: 'pages/_lang/controlPanel/Tenders.vue',
                children: [
                  {
                    path: '/',
                    component: 'pages/_lang/controlPanel/Tenders.vue',
                    name: 'adminTenders',
                  },
                  {
                    path: '/AddTender',
                    component: 'pages/_lang/controlPanel/tenders/AddTender.vue',
                    name: 'AddTender',
                  },
                  {
                    path: '/:UpdateTender',
                    component: 'pages/_lang/controlPanel/tenders/_UpdateTender.vue',
                    name: 'UpdateTender',
                  },
                ]
              },
            ]
          },
        ],
      },
    ],
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: 'http://127.0.0.1:8000/api/',
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    rtl: false,
    // theme: {
    //   dark: true,
    //   themes: {
    //     dark: {
    //       primary: colors.blue.darken2,
    //       accent: colors.grey.darken3,
    //       secondary: colors.amber.darken3,
    //       info: colors.teal.lighten1,
    //       warning: colors.amber.base,
    //       error: colors.deepOrange.accent4,
    //       success: colors.green.accent3
    //     }
    //   }
    // }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
