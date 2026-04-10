import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.defaults({
    ease: 'power2.out',
    duration: 1.5,
  })

  return {
    provide: {
      gsap,
      ScrollTrigger,
    },
  }
})
