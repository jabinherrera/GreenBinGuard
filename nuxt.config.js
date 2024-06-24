export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'iot-app-v1',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/socket.client.js',
    '~/plugins/axios.js'
  ],
  publicRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL || 'https://iot.ceisufro.cl:8080/api',
    apiToken: process.env.API_TOKEN || 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwLm5hdmFycmV0ZTA2QHVmcm9tYWlsLmNsIiwidXNlcklkIjoiODM3YTZlZjAtMWJiZS0xMWVmLTlhZTAtNDVkMTA5MDJmN2I1Iiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJzZXNzaW9uSWQiOiI0ZDBkNDVhZC01ODliLTQ5MTQtOGJhOC0wM2RlNmI0OTFkZTIiLCJpc3MiOiJ0aGluZ3Nib2FyZC5pbyIsImlhdCI6MTcxOTIzMTc3NCwiZXhwIjoxNzE5MjQwNzc0LCJmaXJzdE5hbWUiOiJQcmlzY2lsYSIsImxhc3ROYW1lIjoiTmF2YXJyZXRlIiwiZW5hYmxlZCI6dHJ1ZSwiaXNQdWJsaWMiOmZhbHNlLCJ0ZW5hbnRJZCI6IjhlZTM1NDEwLTFiYjgtMTFlZi05YWUwLTQ1ZDEwOTAyZjdiNSIsImN1c3RvbWVySWQiOiIxMzgxNDAwMC0xZGQyLTExYjItODA4MC04MDgwODA4MDgwODAifQ.oaqLhE_-CFZQ9npfwUv0K--lCmru4u5-sJSfhij2i6YMz_jmv4hhDxa9oRAB1ke4An_tFwPtk2OSCUK2d-0haA'
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['mqtt']
  },
}
