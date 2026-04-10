import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.ticker.lagSmoothing(0)

  // Obsidian Assembly easing curves
  const EASE_CUBIC = 'cubic-bezier(0.35, 0.35, 0, 1)'

  gsap.defaults({
    ease: 'power3.out',
    duration: 1.5,
  })

  // Initialize all scroll animations after each page render
  const initAnimations = () => {
    // Kill existing triggers to prevent duplicates on route change
    ScrollTrigger.getAll().forEach(t => t.kill())

    requestAnimationFrame(() => {
      // ── 1. Entrance animations: fade + slide up ──
      gsap.utils.toArray<HTMLElement>('.anim-enter').forEach((el, i) => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── 2. Staggered group entrances ──
      gsap.utils.toArray<HTMLElement>('.anim-stagger').forEach((container) => {
        const children = container.querySelectorAll('.anim-stagger-item')
        if (!children.length) return

        gsap.fromTo(children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── 3. Parallax elements ──
      gsap.utils.toArray<HTMLElement>('.anim-parallax').forEach((el) => {
        const speed = parseFloat(el.dataset.speed || '0.3')
        gsap.fromTo(el,
          { y: -50 * speed },
          {
            y: 50 * speed,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      // ── 4. Scale-on-scroll (hero bg, images) ──
      gsap.utils.toArray<HTMLElement>('.anim-scale').forEach((el) => {
        gsap.fromTo(el,
          { scale: 1.15 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      })

      // ── 5. Text reveal (clip-path slide up) ──
      gsap.utils.toArray<HTMLElement>('.anim-reveal').forEach((el) => {
        gsap.fromTo(el,
          { clipPath: 'inset(100% 0 0 0)', y: 30 },
          {
            clipPath: 'inset(0% 0 0 0)',
            y: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── 6. Fade sections (opacity on scroll) ──
      gsap.utils.toArray<HTMLElement>('.anim-fade-section').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // ── 7. Hero-specific: staggered line entrance ──
      const heroLines = document.querySelectorAll('.display-line')
      if (heroLines.length) {
        gsap.fromTo(heroLines,
          { y: 80, opacity: 0, skewY: 3 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 1.8,
            ease: 'power3.out',
            stagger: 0.15,
            delay: 0.3,
          }
        )
      }

      // Hero meta + CTA entrance
      const heroMeta = document.querySelector('.hero-meta')
      const heroCta = document.querySelector('.hero-cta')
      if (heroMeta) {
        gsap.fromTo(heroMeta,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1.0 }
        )
      }
      if (heroCta) {
        gsap.fromTo(heroCta,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1.2 }
        )
      }

      // Hero background parallax
      const heroBg = document.querySelector('.hero-bg img')
      if (heroBg) {
        gsap.to(heroBg, {
          y: '20%',
          scale: 1.1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.c-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      // Refresh after all setup
      ScrollTrigger.refresh()
    })
  }

  // Run on initial load
  nuxtApp.hook('page:finish', () => {
    setTimeout(initAnimations, 100)
  })

  // Also run immediately for first page
  if (document.readyState === 'complete') {
    setTimeout(initAnimations, 200)
  } else {
    window.addEventListener('load', () => setTimeout(initAnimations, 200), { once: true })
  }

  return {
    provide: { gsap, ScrollTrigger },
  }
})
