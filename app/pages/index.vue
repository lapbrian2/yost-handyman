<script setup lang="ts">
const { gsap, ScrollTrigger } = useScrollAnimation()

useHead({ title: 'Yost Handyman Services — Saylorsburg, PA' })

onMounted(async () => {
  await nextTick()

  // Scroll progress bar
  gsap.to('.scroll-progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true },
  })

  ScrollTrigger.refresh()
})
</script>

<template>
  <div>
    <div class="scroll-progress" style="position: fixed; top: 0; left: 0; height: 2px; background: var(--gold-gradient); z-index: 200; transform-origin: left; transform: scaleX(0); width: 100%;"></div>
    <SiteHeader />
    <main>
      <HeroSection />
      <WhySection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <CtaSection />
    </main>
    <SiteFooter />
  </div>
</template>
