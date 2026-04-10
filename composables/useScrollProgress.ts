import { ref, onMounted, onUnmounted } from 'vue'

interface ScrollProgressOptions {
  key?: string
  start?: string
  end?: string
}

export function useScrollProgress(
  target: Ref<HTMLElement | null>,
  options: ScrollProgressOptions = {}
) {
  const progress = ref(0)
  const { key = '--progress', start = 'top bottom', end = 'bottom top' } = options

  onMounted(async () => {
    if (!target.value) return

    const { $gsap, $ScrollTrigger } = useNuxtApp()
    if (!$gsap || !$ScrollTrigger) return

    const gsap = $gsap as any
    const ScrollTrigger = $ScrollTrigger as any

    const obj = { value: 0 }

    gsap.to(obj, {
      value: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: target.value,
        start,
        end,
        scrub: true,
        onUpdate: (self: any) => {
          progress.value = self.progress
          target.value?.style.setProperty(key, String(self.progress))
        },
      },
    })
  })

  return { progress }
}
