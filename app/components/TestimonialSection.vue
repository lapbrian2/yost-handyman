<script setup lang="ts">
const { createTimeline, gsap } = useScrollAnimation()
const sectionRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!sectionRef.value) return
  await nextTick()

  // Section clip-path wipe on scrub
  gsap.fromTo(sectionRef.value,
    { clipPath: 'inset(100% 0 0 0)' },
    { clipPath: 'inset(0% 0 0 0)', ease: 'none',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 95%', end: 'top 50%', scrub: true } }
  )

  // Quote mark scales in + parallax drift
  gsap.fromTo('.testimonial__mark', { scale: 0.3, opacity: 0 }, {
    scale: 1, opacity: 0.06, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 70%', end: 'top 20%', scrub: true },
  })
  gsap.to('.testimonial__mark', {
    y: -60, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top bottom', end: 'bottom top', scrub: true },
  })

  // Hook reveal
  gsap.fromTo('.testimonial__hook', { y: 40, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 55%', end: 'top 25%', scrub: true },
  })

  // Rest text
  gsap.fromTo('.testimonial__rest', { y: 25, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 40%', end: 'top 15%', scrub: true },
  })

  // Attribution
  gsap.fromTo('.testimonial__attribution', { y: 15, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 30%', end: 'top 10%', scrub: true },
  })
})
</script>

<template>
  <section ref="sectionRef" class="testimonial">
    <span class="testimonial__mark" aria-hidden="true">&ldquo;</span>
    <div class="container">
      <blockquote>
        <p class="testimonial__hook">Amazed by the craftsmanship.</p>
        <p class="testimonial__rest">
          The attention to detail that Yost Handyman Services provided truly
          exceeded my expectations. I will definitely be using their services
          again in the future.
        </p>
      </blockquote>
      <p class="testimonial__attribution">— Barbara S <span style="color: var(--on-surface-faint); margin-left: 0.5rem;">Saylorsburg, PA</span></p>
    </div>
  </section>
</template>
