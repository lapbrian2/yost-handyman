export default defineNuxtPlugin(() => {
  const update = () => {
    const vh = window.innerHeight * 0.01
    const vw = window.innerWidth * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    document.documentElement.style.setProperty('--vw', `${vw}px`)
  }

  update()
  window.addEventListener('resize', update, { passive: true })

  // Mark as loaded + ready
  requestAnimationFrame(() => {
    document.documentElement.classList.add('-loaded')
    requestAnimationFrame(() => {
      document.documentElement.classList.add('-ready')
    })
  })
})
