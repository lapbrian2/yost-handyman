<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

useInView(section, { threshold: 0.1 })
useScrollProgress(section, { start: 'top bottom', end: 'bottom top' })

// Split text animations will be added in polish phase
</script>

<template>
  <section ref="section" class="c-testimonials">
    <!-- Background image with parallax -->
    <div class="testimonial-bg">
      <figure class="-fit">
        <img
          src="/images/filler/hero.jpg"
          alt=""
          loading="lazy"
          :style="{ transform: `translate3d(0, calc(var(--vh, 1vh) * 20 * var(--progress)), 0)` }"
        >
      </figure>
    </div>

    <!-- Large display text -->
    <div class="-w title-wrap">
      <span ref="titleRef" class="-lrg title">Trusted</span>
    </div>

    <!-- Testimonial content -->
    <div class="-w -gc content" style="--columns: 6;">
      <span class="article -h2 -m-h4 -a-to-bottom" style="--l-delay: 0.2;">
        By Homeowners
      </span>

      <div class="quote-block -a-to-top" style="--l-delay: 0.4;">
        <blockquote class="-h4 -m-h5">
          "I was amazed by the level of craftsmanship and attention to detail
          that Yost Handyman Services provided. They truly exceeded my expectations
          and I will definitely be using their services again in the future!"
        </blockquote>
        <cite class="-mm">— Barbara S.</cite>
      </div>

      <div class="quote-block-2 -a-to-top" style="--l-delay: 0.6;">
        <blockquote class="-h5 -m-h6">
          "Fast, reliable, and the quality speaks for itself.
          Our deck looks brand new."
        </blockquote>
        <cite class="-mm">— Client Testimonial</cite>
      </div>
    </div>
  </section>
</template>

<style scoped>
.c-testimonials {
  overflow: hidden;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 100);
}

.testimonial-bg {
  inset: 0;
  position: absolute;
}

.testimonial-bg figure {
  height: 120%;
  width: 100%;
  position: absolute;
  top: -20%;
}

.testimonial-bg::after {
  background: linear-gradient(
    180deg,
    rgba(var(--c-black-rgb), 0.3) 0%,
    rgba(var(--c-black-rgb), 0.7) 50%,
    var(--c-black) 100%
  );
  content: "";
  inset: 0;
  position: absolute;
}

.title-wrap {
  position: relative;
  z-index: 2;
  padding-top: calc(var(--vh, 1vh) * 30);
}

.title {
  color: var(--c-white);
  display: block;
  text-align: center;
}

.content {
  position: relative;
  z-index: 2;
  padding-bottom: var(--large);
}

.article {
  --top: 1; --left: 1; --width: 6;
  color: var(--c-yellow);
  text-align: center;
  margin-top: calc(var(--large) * -0.3);
  font-family: var(--font-heading);
}

.quote-block {
  --top: 2; --left: 1; --width: 6;
  margin-top: var(--h1);
}

.quote-block blockquote {
  color: var(--c-white);
  font-family: var(--font-heading);
  font-style: italic;
  border-left: 2px solid rgba(var(--c-yellow-rgb), 0.3);
  padding-left: var(--p);
}

.quote-block cite,
.quote-block-2 cite {
  display: block;
  margin-top: var(--m);
  color: var(--c-yellow);
  font-style: normal;
}

.quote-block-2 {
  --top: 3; --left: 2; --width: 4;
  margin-top: var(--h2);
}

.quote-block-2 blockquote {
  color: rgba(var(--c-white-rgb), 0.7);
  font-family: var(--font-heading);
  font-style: italic;
  border-left: 2px solid rgba(var(--c-yellow-rgb), 0.15);
  padding-left: var(--p);
}

@media (min-width: 1024px) {
  .content { --columns: 12; }
  .article { --width: 12; }
  .quote-block { --left: 3; --width: 5; }
  .quote-block-2 { --left: 7; --width: 4; margin-top: var(--h1); }
}
</style>
