import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(
  target: Ref<HTMLElement | null>,
  options: { threshold?: number; rootMargin?: string; repeat?: boolean } = {}
) {
  const isInView = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          target.value?.classList.add('-inview')
          if (!options.repeat) {
            observer?.unobserve(entry.target)
          }
        } else if (options.repeat) {
          isInView.value = false
          target.value?.classList.remove('-inview')
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      }
    )

    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { isInView }
}
