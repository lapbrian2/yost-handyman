<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
</script>

<template>
  <section ref="section" class="c-hero">
    <!-- Background image -->
    <div class="hero-bg">
      <img src="/images/filler/hero.jpg" alt="" loading="eager">
    </div>

    <!-- Content -->
    <div class="hero-content -w">
      <div class="hero-text">
        <span class="display-line line-1">Quality</span>
        <span class="display-line line-2">Craftsmanship</span>
        <span class="display-line line-3">Delivered</span>
      </div>

      <div class="hero-meta">
        <p class="-mm meta-item">Licensed &amp; Insured</p>
        <p class="-mm meta-item">Saylorsburg, Pennsylvania</p>
      </div>

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
    </div>

    <!-- Decorative SVG path -->
    <svg class="hero-path" viewBox="0 0 1440 1080" preserveAspectRatio="none">
      <linearGradient id="hero-path-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#A68773" />
        <stop offset=".5" stop-color="#9FAF9B" />
        <stop offset="1" stop-color="#151415" />
      </linearGradient>
      <path
        fill="none" stroke="url(#hero-path-gradient)" stroke-width="1"
        d="M859,0c513,94.4,377,448.9-79,595.4-424,136.3-685,299.7-263,484.6"
        vector-effect="non-scaling-stroke"
      />
    </svg>

    <!-- Bottom gradient fade -->
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

/* Background */
.hero-bg {
  inset: 0;
  position: absolute;
  z-index: 0;
}

.hero-bg img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.3;
}

/* Content */
.hero-content {
  position: relative;
  z-index: 10;
  padding-top: 15vh;
  padding-bottom: 10vh;
  display: flex;
  flex-direction: column;
  gap: var(--h2);
}

/* Display text — stacked, no grid overlap */
.hero-text {
  display: flex;
  flex-direction: column;
}

.display-line {
  font-family: var(--font-display);
  color: var(--c-white);
  line-height: 0.85;
  font-size: clamp(3rem, 10vw, 10rem);
  display: block;
}

.line-2 {
  margin-left: 0.5em;
  color: var(--c-yellow);
}

.line-3 {
  margin-left: 1.5em;
}

/* Metadata */
.hero-meta {
  display: flex;
  gap: var(--h2);
  color: rgba(var(--c-yellow-rgb), 0.5);
  margin-top: var(--h5);
}

/* CTA */
.hero-cta {
  max-width: 20rem;
  margin-top: var(--h3);
}

.cta-label {
  display: block;
  color: var(--c-yellow);
  margin-bottom: var(--h5);
}

.cta-label span {
  display: block;
}

.cta-label span:first-child { padding-left: 0; }
.cta-label span:nth-child(2) { padding-left: 2em; }
.cta-label span:nth-child(3) { padding-left: 1em; }

.hero-cta :deep(.button) {
  width: 100%;
}

/* SVG path */
.hero-path {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

/* Bottom fade */
.hero-fade {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
  background: linear-gradient(to top, var(--c-black), transparent);
  pointer-events: none;
  z-index: 15;
}

@media (min-width: 1024px) {
  .hero-content {
    padding-top: 20vh;
    max-width: 80%;
  }

  .display-line {
    font-size: clamp(5rem, 9vw, 12rem);
  }

  .hero-meta {
    margin-left: 2em;
  }

  .hero-cta {
    margin-left: auto;
    margin-right: 15%;
  }
}
</style>
