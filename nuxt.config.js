export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ssr: false,
  target: 'static',
  router: {
    base: '/buscasaurio/'
  },

  head: {
    title: 'Buscasaurio, para tus compras Jurásicas.',
    htmlAttrs: {
      lang: 'es_ar'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Buscá productos en Mercado Libre sin publicidades molestas. Orientado a tus búsquedas de dinosaurios.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:image', property: 'og:image', content: 'https://samaycomic.com/wp-content/uploads/2023/10/share-web.jpg' }      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/axios'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
