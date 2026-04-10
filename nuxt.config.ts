export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Yost Handyman Services',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#151415' },
        { name: 'color-scheme', content: 'dark' },
        { name: 'description', content: 'Professional handyman services in Saylorsburg, PA. Licensed & insured. Plumbing, painting, deck repair, pressure washing and more.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: [
    '~/assets/css/base.css',
    '~/assets/css/typography.css',
    '~/assets/css/grid.css',
    '~/assets/css/animations.css',
    '~/assets/css/utilities.css',
  ],

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'Cormorant+Garamond': [300, 400],
      'Playfair+Display': [400],
      'Inter': [400, 500],
    },
    display: 'swap',
    preload: true,
  },
})
