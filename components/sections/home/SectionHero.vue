<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const ready = ref(false)

onMounted(() => {
  // Trigger entrance sequence after a beat
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ready.value = true
    })
  })

  // Setup GSAP scroll parallax
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  if ($gsap && $ScrollTrigger) {
    const gsap = $gsap as any
    const ScrollTrigger = $ScrollTrigger as any

    nextTick(() => {
      // Hero bg parallax
      gsap.to('.hero-bg img', {
        yPercent: 30,
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Cards rotate + translate on scroll
      gsap.to('.card-left', {
        rotation: 30,
        y: '-40vh',
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.card-right', {
        rotation: -30,
        y: '-30vh',
        ease: 'none',
        scrollTrigger: {
          trigger: section.value,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Text lines parallax at different speeds
      gsap.to('.line-2', {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: { trigger: section.value, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.line-3', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { trigger: section.value, start: 'top top', end: 'bottom top', scrub: true },
      })

      // CTA parallax
      gsap.to('.hero-cta', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: { trigger: section.value, start: 'top top', end: 'bottom top', scrub: true },
      })

      ScrollTrigger.refresh()
    })
  }
})
</script>

<template>
  <section ref="section" class="c-hero" :class="{ '-ready': ready }">
    <!-- Background image — Yost's actual photo -->
    <div class="hero-bg">
      <img src="/images/yost/yost-1.jpg" alt="" loading="eager">
    </div>

    <!-- Arch clip overlay -->
    <div class="hero-arch"></div>

    <!-- Content grid -->
    <div class="hero-content -w">
      <!-- Display text — staggered char entrance -->
      <div class="hero-text">
        <div class="line-wrap"><span class="display-line line-1">Quality</span></div>
        <div class="line-wrap"><span class="display-line line-2">Craftsmanship</span></div>
        <div class="line-wrap"><span class="display-line line-3">Delivered</span></div>
      </div>

      <!-- Small metadata -->
      <div class="hero-meta">
        <p class="-mm meta-left">Licensed &amp;<br>Insured</p>
        <p class="-mm meta-right">Saylorsburg,<br>Pennsylvania</p>
      </div>

      <!-- CTA block -->
      <div class="hero-cta">
        <span class="cta-label -hp">
          <span>Professional</span>
          <span>Handyman</span>
          <span>Services /</span>
        </span>
        <BaseButton big tag="a" href="/contact">
          Get Free Estimate
        </BaseButton>
      </div>

      <!-- Decorative rotating cards — Yost images -->
      <figure class="card-left">
        <img src="/images/yost/yost-2.jpg" alt="" loading="lazy">
      </figure>
      <figure class="card-right">
        <img src="/images/yost/yost-1.jpg" alt="" loading="lazy">
      </figure>
    </div>

    <!-- Decorative SVG path -->
    <svg class="hero-path" viewBox="0 0 1440 1080" preserveAspectRatio="none">
      <linearGradient id="hero-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#A68773" />
        <stop offset=".5" stop-color="#9FAF9B" />
        <stop offset="1" stop-color="#151415" />
      </linearGradient>
      <path fill="none" stroke="url(#hero-grad)" stroke-width="1"
        d="M859,0c513,94.4,377,448.9-79,595.4-424,136.3-685,299.7-263,484.6"
        vector-effect="non-scaling-stroke" />
    </svg>

    <!-- Bottom fade -->
    <div class="hero-fade"></div>
  </section>
</template>

<style scoped>
.c-hero {
  background-color: var(--c-black);
  min-height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
}

/* ── Background ── */
.hero-bg {
  inset: 0;
  position: absolute;
  z-index: 0;
}
.hero-bg img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.15);
  transition: opacity 2.5s cubic-bezier(0.35, 0.35, 0, 1), transform 2.5s cubic-bezier(0.35, 0.35, 0, 1);
  will-change: transform;
}
.c-hero.-ready .hero-bg img {
  opacity: 0.35;
  transform: scale(1);
}

/* ── Arch overlay (reference pattern) ── */
.hero-arch {
  position: absolute;
  bottom: 0;
  left: -60%;
  right: -60%;
  top: 20vh;
  background-color: var(--c-black);
  clip-path: ellipse(70% 50% at 50% 100%);
  z-index: 1;
  opacity: 0.6;
}

/* ── Content ── */
.hero-content {
  position: relative;
  z-index: 10;
  padding-top: 18vh;
  padding-bottom: 8vh;
  display: flex;
  flex-direction: column;
  gap: var(--h4);
  width: 100%;
}

/* ── Display lines with clip reveal ── */
.hero-text {
  display: flex;
  flex-direction: column;
}

.line-wrap {
  overflow: hidden;
}

.display-line {
  font-family: var(--font-display);
  color: var(--c-white);
  line-height: 0.85;
  font-size: clamp(3rem, 10vw, 10rem);
  display: block;
  transform: translateY(110%) skewY(4deg);
  opacity: 0;
  filter: blur(4px);
  transition:
    transform 1.8s cubic-bezier(0.35, 0.35, 0, 1),
    opacity 1.8s cubic-bezier(0.35, 0.35, 0, 1),
    filter 1.8s cubic-bezier(0.35, 0.35, 0, 1);
  will-change: transform, opacity, filter;
}

.c-hero.-ready .line-1 { transform: translateY(0) skewY(0); opacity: 1; filter: blur(0); transition-delay: 0.15s; }
.c-hero.-ready .line-2 { transform: translateY(0) skewY(0); opacity: 1; filter: blur(0); transition-delay: 0.3s; }
.c-hero.-ready .line-3 { transform: translateY(0) skewY(0); opacity: 1; filter: blur(0); transition-delay: 0.5s; }

.line-2 {
  margin-left: 0.5em;
  color: var(--c-yellow);
}
.line-3 {
  margin-left: 1.5em;
}

/* ── Metadata ── */
.hero-meta {
  display: flex;
  gap: var(--h2);
  color: rgba(var(--c-yellow-rgb), 0.4);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.2s cubic-bezier(0.35, 0.35, 0, 1), transform 1.2s cubic-bezier(0.35, 0.35, 0, 1);
}
.c-hero.-ready .hero-meta {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.7s;
}

/* ── CTA ── */
.hero-cta {
  max-width: 20rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.2s cubic-bezier(0.35, 0.35, 0, 1), transform 1.2s cubic-bezier(0.35, 0.35, 0, 1);
}
.c-hero.-ready .hero-cta {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.9s;
}

.cta-label {
  display: block;
  color: var(--c-yellow);
  margin-bottom: var(--h5);
}
.cta-label span {
  display: block;
  transition: translate 0.6s cubic-bezier(0.35, 0.35, 0, 1);
}
.cta-label span:nth-child(2) { padding-left: 2em; }
.cta-label span:nth-child(3) { padding-left: 1em; }

.hero-cta :deep(.button) { width: 100%; }

/* ── Decorative cards (rotate on scroll via GSAP) ── */
.card-left, .card-right {
  position: absolute;
  width: 18%;
  aspect-ratio: 22/30;
  border-radius: 0.4rem;
  overflow: hidden;
  z-index: 5;
  opacity: 0;
  transform: translateY(60%);
  transition: opacity 1.5s cubic-bezier(0.35, 0.35, 0, 1), transform 1.5s cubic-bezier(0.35, 0.35, 0, 1);
  will-change: transform;
}
.card-left img, .card-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-left {
  left: 2%;
  bottom: 15%;
  rotate: -12deg;
  transform-origin: -150% 50%;
}
.card-right {
  right: 2%;
  bottom: 20%;
  rotate: 12deg;
  transform-origin: 250% 50%;
}

.c-hero.-ready .card-left,
.c-hero.-ready .card-right {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 1.1s;
}

/* ── SVG path ── */
.hero-path {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 8;
  opacity: 0;
  transition: opacity 3s ease;
}
.c-hero.-ready .hero-path { opacity: 1; transition-delay: 0.5s; }

/* ── Bottom gradient fade ── */
.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 35vh;
  background: linear-gradient(to top,
    var(--c-black) 0%,
    rgba(var(--c-black-rgb), 0.87) 25%,
    rgba(var(--c-black-rgb), 0.5) 60%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 15;
}

/* ── Desktop ── */
@media (min-width: 1024px) {
  .hero-content {
    padding-top: 20vh;
    max-width: 85%;
  }
  .display-line {
    font-size: clamp(5rem, 9vw, 12rem);
  }
  .hero-meta { margin-left: 3em; }
  .hero-cta { margin-left: auto; margin-right: 10%; }
  .hero-arch { left: -20%; right: -20%; top: 55vh; }
}
</style>
