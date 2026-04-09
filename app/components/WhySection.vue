<script setup lang="ts">
const { createTimeline, gsap, splitTextReveal } = useScrollAnimation()
const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const stats = [
  { value: '484-478-2994', label: 'Direct Line' },
  { value: 'Licensed', label: '& Insured' },
  { value: 'Saylorsburg', label: 'Pennsylvania' },
]

onMounted(async () => {
  if (!sectionRef.value) return
  await nextTick()

  // Watermark parallax
  gsap.fromTo('.watermark', { y: 80 }, {
    y: -80, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top bottom', end: 'bottom top', scrub: true },
  })

  // Gold bar draws in
  createTimeline({
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%', end: 'top 50%', scrub: true },
  }).fromTo('.why__bar', { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1 })

  // splitTextReveal on heading
  if (headingRef.value) {
    splitTextReveal(headingRef.value, { trigger: sectionRef.value, start: 'top 70%' })
  }

  // Body text
  gsap.fromTo('.why__body', { y: 30, opacity: 0 }, {
    y: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 60%', end: 'top 35%', scrub: true },
  })

  // Stats stagger
  sectionRef.value.querySelectorAll('.why__stat').forEach((stat, i) => {
    gsap.fromTo(stat, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: sectionRef.value, start: `${55 + i * 8}% bottom`, end: `${70 + i * 8}% bottom`, scrub: true },
    })
  })
})
</script>

<template>
  <section ref="sectionRef" class="why">
    <span class="watermark" aria-hidden="true">Yost</span>
    <div class="container">
      <div class="why__layout">
        <div>
          <div class="why__bar"></div>
          <h2 ref="headingRef">Quality craftsmanship for your home</h2>
          <p class="why__body">
            Quick and efficient repair services to keep your home running smoothly.
            Trust our team of skilled professionals to handle all of your handyman
            needs with care and precision.
          </p>
        </div>
        <div class="why__stats">
          <div v-for="stat in stats" :key="stat.label" class="why__stat">
            <span class="why__stat-value">{{ stat.value }}</span>
            <span class="why__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
