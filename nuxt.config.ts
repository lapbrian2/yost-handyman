export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  future: { compatibilityVersion: 4 },
  css: [
    '~/assets/styles/tokens.css',
    '~/assets/styles/reset.css',
    '~/assets/styles/base.css',
    '~/assets/styles/components.css',
  ],
  app: {
    head: {
      title: 'Yost Handyman Services — Saylorsburg, PA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'High-quality repair services in Saylorsburg, Pennsylvania. Licensed and insured. Call 484-478-2994.' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Geist:wght@400;500&family=Geist+Mono:wght@400&display=swap',
        },
      ],
    },
  },
  build: {
    transpile: ['gsap', 'three'],
  },
})
