<script setup lang="ts">
const { createTimeline, createTween, gsap, ScrollTrigger } = useScrollAnimation()
const heroRef = ref<HTMLElement | null>(null)
const imageWrapRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!heroRef.value || !imageWrapRef.value) return
  await nextTick()

  // Clip-path reveal on the image (Neon Ronin pattern)
  gsap.set(imageWrapRef.value, { clipPath: 'inset(15% 15% 15% 15%)' })

  const entrance = createTimeline({ defaults: { ease: 'power3.inOut' } })
  entrance
    .to(imageWrapRef.value, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.8 })
    .from('.hero__overlay', { opacity: 0, duration: 0.8 }, '-=0.8')
    .from('.overline', { y: 20, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .from('.hero__title', { y: 60, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
    .from('.hero__tagline', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.4')
    .from('.hero__phone', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
    .from('.badge', { y: 10, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .from('.hero__scroll-hint', { opacity: 0, duration: 0.5 }, '-=0.2')

  // Ken Burns slow zoom (continuous)
  gsap.to('.hero__image', { scale: 1.12, duration: 25, ease: 'none', repeat: -1, yoyo: true })

  // Parallax: content fades up as user scrolls past hero
  createTimeline({
    scrollTrigger: { trigger: heroRef.value, start: 'top top', end: '80% top', scrub: 1 },
  }).to('.hero__content', { y: -60, opacity: 0, ease: 'none' })

  // Overlay darkens on scroll
  createTimeline({
    scrollTrigger: { trigger: heroRef.value, start: 'top top', end: 'bottom top', scrub: true },
  }).to('.hero__overlay', { opacity: 0.85, ease: 'none' })

  // Scroll hint fades early
  createTimeline({
    scrollTrigger: { trigger: heroRef.value, start: '5% top', end: '15% top', scrub: true },
  }).to('.hero__scroll-hint', { opacity: 0, ease: 'none' })

  ScrollTrigger.refresh()
})
</script>

<template>
  <section ref="heroRef" class="hero">
    <div ref="imageWrapRef" class="hero__image-wrap">
      <img src="~/assets/images/handyman.jpg" alt="Yost Handyman Services at work" class="hero__image">
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__content">
      <p class="overline">Saylorsburg, Pennsylvania</p>
      <h1 class="hero__title">Yost Handyman Services</h1>
      <p class="hero__tagline">
        High-quality repair services for your home. Licensed and insured.
      </p>
      <a href="tel:4844782994" class="hero__phone">484-478-2994</a>
      <div style="margin-top: var(--space-sm);">
        <span class="badge">
          <svg class="badge__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          Licensed &amp; Insured
        </span>
      </div>
    </div>
    <div class="hero__scroll-hint">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 10l5 5 5-5"/></svg>
    </div>
  </section>
</template>
