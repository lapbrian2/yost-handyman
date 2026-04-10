export default defineNuxtPlugin(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
  )

  const setup = () => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          observer.observe(el)
        }
      })
    })
  }

  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', setup)
  setTimeout(setup, 200)
})
