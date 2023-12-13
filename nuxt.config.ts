// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['assets/css/tailwind.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Nuxt-App',

    }
  },
  build: {
    postcss:{
      postcssOption: {
        Plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    }
  }
  
})
