export default {
  srcDir: 'client/',
  // Target (https://go.nuxtjs.dev/config-target)
//   target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '플로리스트 아오이플라워',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '부산꽃배달, 부산꽃, 플라워, 부산꽃바달, 부산꽃선물, 부산플라워, 아오이플라워, 플로리스트, 부산꽃선물, 꽃선물,'},
      { hid: 'description', name: 'description', content: '플로리스트 아오이플라워 홈페이지' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css' },
    ],
    script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.js' },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
