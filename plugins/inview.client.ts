export default defineNuxtPlugin(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('-inview')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
  )

  // Observe all animated elements after each page render
  const observe = () => {
    requestAnimationFrame(() => {
      document.querySelectorAll('.-a-to-top, .-a-to-bottom, .-splitted, [class*="c-"]').forEach((el) => {
        if (!el.classList.contains('-inview')) {
          observer.observe(el)
        }
      })
    })
  }

  // Run on initial load and on route change
  const nuxtApp = useNuxtApp()
  nuxtApp.hook('page:finish', observe)

  // Also run immediately after a short delay for the initial page
  setTimeout(observe, 100)
})
