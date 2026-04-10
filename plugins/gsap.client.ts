import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.ticker.lagSmoothing(0)

  const initScrollEffects = () => {
    ScrollTrigger.getAll().forEach(t => t.kill())

    requestAnimationFrame(() => {
      // ── Hero background parallax ──
      const heroBg = document.querySelector('.hero-bg img')
      if (heroBg) {
        gsap.to(heroBg, {
          yPercent: 25,
          scale: 1.15,
          ease: 'none',
          scrollTrigger: {
            trigger: '.c-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // ── Parallax elements (data-speed) ──
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || '0.3')
        gsap.to(el, {
          yPercent: speed * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      // ── Gallery images: scale down on scroll ──
      gsap.utils.toArray<HTMLElement>('.gallery-image').forEach((el) => {
        gsap.fromTo(el, { scale: 1.05 }, {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'top 20%',
            scrub: true,
          },
        })
      })

      // ── Section title parallax (subtle) ──
      gsap.utils.toArray<HTMLElement>('.services-title, .test-title, .cta-title, .why-title').forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      ScrollTrigger.refresh()
    })
  }

  // Run after page is fully loaded
  nuxtApp.hook('page:finish', () => setTimeout(initScrollEffects, 300))
  window.addEventListener('load', () => setTimeout(initScrollEffects, 500), { once: true })

  return {
    provide: { gsap, ScrollTrigger },
  }
})
