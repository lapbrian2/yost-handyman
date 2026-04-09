<script setup lang="ts">
const { gsap, splitTextReveal } = useScrollAnimation()
const sectionRef = ref<HTMLElement | null>(null)
const headingRef = ref<HTMLElement | null>(null)

const services = [
  { name: 'Appliance installation', desc: null },
  { name: 'Plumbing repair', desc: 'Keep your home running smoothly' },
  { name: 'Faucets', desc: null },
  { name: 'Toilet repair / replacement', desc: null },
  { name: 'Doors / windows repair', desc: null },
  { name: 'Painting', desc: 'Interior and exterior' },
  { name: 'Lighting', desc: null },
  { name: 'Fence repair / painting', desc: null },
  { name: 'Pressure washing', desc: 'Restore your surfaces' },
  { name: 'Deck repair / staining', desc: null },
]

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

onMounted(async () => {
  if (!sectionRef.value) return
  await nextTick()

  if (headingRef.value) {
    splitTextReveal(headingRef.value, { trigger: sectionRef.value, start: 'top 75%' })
  }

  // Service items stagger from bottom on scrub
  sectionRef.value.querySelectorAll('.services__item').forEach((item, i) => {
    gsap.fromTo(item, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, ease: 'none',
      scrollTrigger: { trigger: sectionRef.value, start: `${40 + i * 4}% bottom`, end: `${52 + i * 4}% bottom`, scrub: true },
    })
  })
})
</script>

<template>
  <section ref="sectionRef" class="services">
    <div class="container">
      <p class="overline">What we do</p>
      <h2 ref="headingRef" style="margin: var(--space-xs) 0;">Every detail, handled</h2>
      <p style="color: var(--on-surface-faint); margin-bottom: 0;">
        Not a complete list — <a href="tel:4844782994" style="color: var(--gold);">call for more</a>
      </p>
      <div class="services__list">
        <div v-for="(service, i) in services" :key="service.name" class="services__item">
          <span class="services__num">{{ pad(i + 1) }}</span>
          <div>
            <span class="services__name">{{ service.name }}</span>
            <span v-if="service.desc" class="services__desc">{{ service.desc }}</span>
          </div>
          <svg class="services__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </div>
  </section>
</template>
