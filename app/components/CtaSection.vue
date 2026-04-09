<script setup lang="ts">
const { gsap } = useScrollAnimation()
const sectionRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!sectionRef.value) return
  await nextTick()

  gsap.fromTo('.cta-banner h2', { y: 30, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%', end: 'top 45%', scrub: true },
  })

  gsap.fromTo('.cta__sub', { y: 20, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 65%', end: 'top 40%', scrub: true },
  })

  gsap.fromTo('.cta__phone', { y: 20, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 55%', end: 'top 35%', scrub: true },
  })
})
</script>

<template>
  <section ref="sectionRef" class="cta-banner">
    <div class="container" style="text-align: center;">
      <h2>Let's get your home taken care of</h2>
      <p class="cta__sub" style="color: var(--on-surface-muted); margin: var(--space-sm) auto var(--space-lg); max-width: 40ch;">
        Saylorsburg and all surrounding areas. Licensed, insured, and ready to work.
      </p>
      <a href="tel:4844782994" class="cta__phone">484-478-2994</a>
    </div>
  </section>
</template>
