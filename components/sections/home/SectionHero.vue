<script setup lang="ts">
const section = ref<HTMLElement | null>(null)

useScrollProgress(section, { start: 'top top', end: 'bottom top' })
</script>

<template>
  <section ref="section" class="c-hero">
    <!-- Arch clip path -->
    <svg width="0" height="0">
      <defs>
        <clipPath id="hero-arch" clipPathUnits="objectBoundingBox">
          <path d="M 0 1 L 0 0.75 Q 0.5 0 1 0.75 L 1 1 Z" />
        </clipPath>
      </defs>
    </svg>

    <!-- Background image -->
    <div class="hero-bg">
      <img
        src="/images/filler/hero.jpg"
        alt=""
        loading="eager"
      >
    </div>

    <div class="-w -gc" style="--columns: 6;">
      <!-- Display text -->
      <span  class="-lrg title line-1" aria-hidden="true">
        Quality
      </span>
      <span  class="-lrg title line-2" aria-hidden="true">
        Craftsmanship
      </span>
      <span  class="-lrg title line-3" aria-hidden="true">
        Delivered
      </span>

      <!-- Subtexts -->
      <p class="-mm line-1-m -a-to-top" style="--l-delay: 0.3;">
        Licensed &amp;<br>Insured
      </p>
      <p class="-mm line-2-m -a-to-top" style="--l-delay: 0.45;">
        Saylorsburg,<br>Pennsylvania
      </p>

      <!-- CTA -->
      <div class="cta -a-to-top" style="--l-delay: 0.6;">
        <span class="cta-label -hp">
          <span>Professional</span>
          <span>Handyman</span>
          <span>Services /</span>
        </span>
        <BaseButton big tag="a" href="/contact">
          Get Free Estimate
        </BaseButton>
      </div>

      <!-- Decorative cards -->
      <figure class="-fit card-left">
        <img
          src="/images/filler/electrical.jpg"
          alt=""
          loading="lazy"
        >
      </figure>
      <figure class="-fit card-right">
        <img
          src="/images/filler/deck.jpg"
          alt=""
          loading="lazy"
        >
      </figure>
    </div>

    <!-- Decorative SVG path -->
    <svg class="hero-path" viewBox="0 0 1440 1080" preserveAspectRatio="none">
      <linearGradient id="hero-path-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#A68773" />
        <stop offset=".5" stop-color="#9FAF9B" />
        <stop offset="1" stop-color="#151415" />
      </linearGradient>
      <path
        fill="none"
        stroke="url(#hero-path-gradient)"
        stroke-width="1"
        d="M859,0c513,94.4,377,448.9-79,595.4-424,136.3-685,299.7-263,484.6"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  </section>
</template>

<style scoped>
.c-hero {
  background-color: var(--c-black);
  box-shadow: 0 1px 0 var(--c-black);
  contain: paint;
  overflow: hidden;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
}

.c-hero::before {
  background-color: var(--c-black);
  clip-path: url(#hero-arch);
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: -60%;
  right: -60%;
  top: calc(var(--vh, 1vh) * 20);
  z-index: 1;
}

.c-hero::after {
  background-image: linear-gradient(
    180deg,
    transparent 50%,
    rgba(var(--c-black-rgb), 0) 50%,
    rgba(var(--c-black-rgb), 0.04) 56.5%,
    rgba(var(--c-black-rgb), 0.13) 62.5%,
    rgba(var(--c-black-rgb), 0.26) 67.5%,
    rgba(var(--c-black-rgb), 0.42) 72.5%,
    rgba(var(--c-black-rgb), 0.58) 77.5%,
    rgba(var(--c-black-rgb), 0.74) 82.5%,
    rgba(var(--c-black-rgb), 0.87) 87.5%,
    rgba(var(--c-black-rgb), 0.96) 93.5%,
    var(--c-black) 100%
  );
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: calc(var(--vh, 1vh) * 80);
  width: 100%;
  bottom: 0;
  pointer-events: none;
  z-index: 20;
}

.hero-bg {
  inset: 0;
  position: absolute;
  z-index: 0;
}

.hero-bg img {
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
}

.c-hero > .-w {
  position: relative;
  z-index: 10;
  padding-top: calc(var(--vh, 1vh) * 25);
  padding-bottom: calc(var(--vh, 1vh) * 10);
  align-items: center;
}

/* Display text */
.title {
  color: var(--c-white);
  pointer-events: none;
  position: relative;
}

.line-1 {
  --top: 1; --left: 2; --width: 5;
  justify-self: start;
  text-align: left;
}

.line-2 {
  --top: 2; --left: 1; --width: 6;
  justify-self: start;
  justify-content: flex-end;
  transform: translate3d(0, calc(var(--progress) * var(--vh, 1vh) * 10), 0);
}

.line-3 {
  --top: 3; --left: 2; --width: 5;
  justify-self: start;
  text-align: left;
  transform: translate3d(0, calc(var(--progress) * var(--vh, 1vh) * 20), 0);
  z-index: 20;
}

/* Subtexts */
.line-1-m, .line-2-m {
  align-self: center;
  justify-content: center;
  text-align: center;
  color: rgba(var(--c-yellow-rgb), 0.4);
}

.line-1-m {
  --top: 1; --left: 5; --width: 2;
  margin-top: calc(var(--large) * -1);
}

.line-2-m {
  --top: 2; --left: 1; --width: 2;
  margin-top: var(--h5);
}

/* CTA */
.cta {
  --top: 4; --left: 2; --width: 4;
  align-self: start;
  color: var(--c-yellow);
  margin-top: var(--h1);
  position: relative;
  transform: translate3d(0, calc(var(--progress) * var(--vh, 1vh) * 5), 0);
  z-index: 20;
}

.cta-label {
  display: block;
  margin-bottom: var(--h5);
}

.cta-label span {
  display: block;
  transition: translate 0.6s var(--f-cubic);
}

.cta-label span:first-child { translate: 4em 0; }
.cta-label span:nth-child(2) { translate: 6em 0; }
.cta-label span:nth-child(3) { translate: 5em 0; }

.cta :deep(.button) {
  width: 100%;
}

/* Decorative cards */
.card-left, .card-right {
  --top: 2; --height: 3; --width: 2;
  align-self: end;
  aspect-ratio: 22/30;
  border-radius: 0.4rem;
  position: relative;
  translate: 0 calc(var(--vh, 1vh) * 20 + var(--progress) * 10 * var(--vh, 1vh));
  z-index: 15;
  overflow: hidden;
}

.card-left {
  --left: 1;
  rotate: calc(-15deg + var(--progress) * 45deg);
  transform-origin: -150% 50%;
}

.card-right {
  --left: 5;
  rotate: calc(15deg - var(--progress) * 45deg);
  transform-origin: 250% 50%;
}

.card-left img, .card-right img {
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

/* SVG path */
.hero-path {
  aspect-ratio: 1440/1080;
  height: 100%;
  inset: 0;
  pointer-events: none;
  position: absolute;
  width: 100%;
  z-index: 30;
}

/* ── Desktop ── */
@media (min-width: 1024px) {
  .c-hero::before {
    left: -20%;
    right: -20%;
    top: calc(var(--vh, 1vh) * 60);
  }

  .c-hero > .-w {
    --columns: 12;
    padding-top: calc(var(--vh, 1vh) * 15);
  }

  .line-1 { --left: 4; --width: 9; }
  .line-2 { --left: 1; --width: 9; justify-self: end; }
  .line-3 { --left: 5; --width: 8; }

  .line-1-m { --left: 9; --width: 2; margin-top: var(--h2); }
  .line-2-m { --left: 3; --width: 2; margin-top: var(--h2); }

  .cta { --left: 6; --width: 2; }

  .cta-label span:first-child { translate: 0 0; }
  .cta-label span:nth-child(2) { translate: 2em 0; }
  .cta-label span:nth-child(3) { translate: 1em 0; }

  .card-left { z-index: 2; }
  .card-right { --left: 11; z-index: 2; }
}
</style>
