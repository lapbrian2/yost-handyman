<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)
const currentSlide = ref(0)

const services = [
  { name: 'Appliance Installation', desc: 'Expert installation of household appliances, ensuring proper fit and function.', img: '/images/filler/appliance.jpg' },
  { name: 'Plumbing Repair', desc: 'Quick and efficient plumbing repairs to keep your home running smoothly.', img: '/images/filler/plumbing.jpg' },
  { name: 'Interior Painting', desc: 'Transform any room with professional, clean painting services.', img: '/images/filler/painting.jpg' },
  { name: 'Deck Restoration', desc: 'Repair, stain, and restore your deck to its original beauty.', img: '/images/filler/deck.jpg' },
  { name: 'Door & Window Repair', desc: 'Fix drafty doors and windows for better comfort and efficiency.', img: '/images/filler/doors.jpg' },
  { name: 'Pressure Washing', desc: 'Restore surfaces to like-new condition with professional pressure washing.', img: '/images/filler/pressure.jpg' },
]

useInView(section, { threshold: 0.05 })
useScrollProgress(section, { start: 'top top', end: 'bottom top' })

const next = () => { currentSlide.value = (currentSlide.value + 1) % services.length }
const prev = () => { currentSlide.value = (currentSlide.value - 1 + services.length) % services.length }

// Split text animations will be added in polish phase
</script>

<template>
  <section ref="section" class="c-services">
    <!-- Decorative path -->
    <svg class="services-path" viewBox="0 0 1440 1080" preserveAspectRatio="none">
      <linearGradient id="services-path-gradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#15141500" />
        <stop offset=".5" stop-color="#7b5136" />
        <stop offset="1" stop-color="#15141500" />
      </linearGradient>
      <path
        fill="none" stroke="url(#services-path-gradient)" stroke-width="1"
        d="M517.1,0c246,127,804.3,132.3,752,234-27.9,54.4-412.5,84.1-649,16-228.9-65.9-467.4-48.1-462-27,15.1,59.1,394-184,527-73C924.7,350,14.1,621,250.1,1000"
        vector-effect="non-scaling-stroke"
      />
    </svg>

    <!-- Title -->
    <div class="title">
      <span ref="titleRef" class="-lrg line-1" style="--dx:0.25; --dy:-1;">
        Our Services
      </span>
    </div>

    <!-- Caption -->
    <span class="caption -h5 -m-h6">
      <span>Craftsmanship</span>
      <span>You Can</span>
      <span>Count On</span>
    </span>

    <!-- Service gallery -->
    <div class="gallery">
      <div class="-w">
        <div class="gallery-inner">
          <!-- Main image -->
          <div class="gallery-image">
            <TransitionGroup name="slide">
              <figure
                v-for="(service, i) in services"
                v-show="i === currentSlide"
                :key="service.name"
                class="-fit"
              >
                <img :src="service.img" :alt="service.name" loading="lazy">
              </figure>
            </TransitionGroup>
          </div>

          <!-- Service info -->
          <div class="gallery-info">
            <span class="service-name -h3 -m-h5">{{ services[currentSlide].name }}</span>
            <p class="-m">{{ services[currentSlide].desc }}</p>
          </div>

          <!-- Navigation -->
          <nav class="gallery-nav">
            <button class="nav-prev" @click="prev" aria-label="Previous service">
              <svg viewBox="0 0 50 50"><polygon points="48 24.5 3 24.5 12.4 12.3 11.6 11.7 1.4 25 11.6 37.3 12.4 36.7 3.1 25.5 48 25.5 48 24.5" /></svg>
            </button>
            <button class="nav-next" @click="next" aria-label="Next service">
              <svg viewBox="0 0 50 50"><polygon points="38.4 11.7 37.6 12.3 47 24.5 2 24.5 2 25.5 46.9 25.5 37.6 36.7 38.4 37.3 48.6 25 38.4 11.7" /></svg>
            </button>
            <div class="nav-count -h5">
              <span>{{ currentSlide + 1 }}</span>
              <span>/{{ services.length }}</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.c-services {
  background-color: var(--c-black);
  color: var(--c-yellow);
  padding-bottom: var(--g-gap);
  position: relative;
}

.services-path {
  aspect-ratio: 1440/1080;
  inset: calc(var(--large) * -1) 0 auto 0;
  pointer-events: none;
  position: absolute;
  z-index: 1;
}

/* Title */
.title {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  z-index: 2;
  position: relative;
  padding-top: var(--h0);
}

/* Caption */
.caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 3;
  color: var(--c-yellow);
  margin-top: var(--h5);
}

.caption span {
  display: block;
}
.caption span:first-child { translate: -0.25em 0; }
.caption span:nth-child(2) { translate: 2em 0; }
.caption span:nth-child(3) { translate: -0.5em 0; }

/* Gallery */
.gallery {
  margin-top: var(--h1);
  position: relative;
  z-index: 2;
}

.gallery-inner {
  display: grid;
  gap: var(--g-gap);
}

.gallery-image {
  aspect-ratio: 8/5;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
}

.gallery-image figure {
  position: absolute;
  inset: 0;
}

.gallery-image img {
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  inset: 0;
}

/* Slide transition */
.slide-enter-active {
  transition: clip-path 0.9s var(--f-cubic);
  z-index: 3;
}
.slide-leave-active {
  transition: clip-path 0.9s var(--f-cubic);
  z-index: 2;
}
.slide-enter-from {
  clip-path: inset(0 100% 0 0);
}
.slide-enter-to,
.slide-leave-from {
  clip-path: inset(0 0 0 0);
}
.slide-leave-to {
  clip-path: inset(0 0 0 100%);
}

/* Service info */
.gallery-info {
  padding: var(--g-gap) 0;
}

.service-name {
  display: block;
  color: var(--c-yellow);
  margin-bottom: var(--mm);
  font-family: var(--font-heading);
}

.gallery-info p {
  color: var(--c-white);
  max-width: 40ch;
}

/* Navigation */
.gallery-nav {
  display: flex;
  align-items: center;
  gap: var(--g-gap);
  border-top: 1px solid rgba(var(--c-yellow-rgb), 0.2);
  padding-top: calc(var(--g-gap) / 2);
}

.nav-prev, .nav-next {
  background-color: var(--c-black);
  border-radius: 50%;
  padding: 1rem;
  display: grid;
  place-items: center;
  overflow: hidden;
  position: relative;
}

.nav-prev svg, .nav-next svg {
  fill: var(--c-yellow);
  width: 2rem;
}

@media (min-width: 1024px) {
  .nav-prev:hover, .nav-next:hover {
    background-color: var(--c-yellow);
  }
  .nav-prev:hover svg, .nav-next:hover svg {
    fill: var(--c-black);
  }
}

.nav-count {
  display: flex;
  align-items: center;
  margin-left: auto;
  color: var(--c-yellow);
  font-family: var(--font-heading);
}

.nav-count span:nth-child(2) {
  opacity: 0.4;
}

@media (min-width: 1024px) {
  .gallery-inner {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }

  .gallery-image {
    grid-column: 1 / -1;
  }

  .gallery-info {
    grid-column: 1;
  }

  .gallery-nav {
    grid-column: 2;
    justify-self: end;
  }
}
</style>
