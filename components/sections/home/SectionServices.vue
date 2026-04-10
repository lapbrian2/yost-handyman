<script setup lang="ts">
const currentSlide = ref(0)

const services = [
  { name: 'Appliance Installation', desc: 'Expert installation of household appliances, ensuring proper fit and function.', img: '/images/yost/yost-1.jpg' },
  { name: 'Plumbing Repair', desc: 'Quick and efficient plumbing repairs to keep your home running smoothly.', img: '/images/yost/yost-2.jpg' },
  { name: 'Interior Painting', desc: 'Transform any room with professional, clean painting services.', img: '/images/yost/yost-1.jpg' },
  { name: 'Deck Restoration', desc: 'Repair, stain, and restore your deck to its original beauty.', img: '/images/yost/yost-2.jpg' },
  { name: 'Door & Window Repair', desc: 'Fix drafty doors and windows for better comfort and efficiency.', img: '/images/yost/yost-1.jpg' },
  { name: 'Pressure Washing', desc: 'Restore surfaces to like-new condition with professional pressure washing.', img: '/images/yost/yost-2.jpg' },
]

const next = () => { currentSlide.value = (currentSlide.value + 1) % services.length }
const prev = () => { currentSlide.value = (currentSlide.value - 1 + services.length) % services.length }
</script>

<template>
  <section class="c-services">
    <div class="-w">
      <!-- Title -->
      <div class="services-header animate-on-scroll">
        <h2 class="services-title animate-on-scroll anim-clip" data-delay="1">Our Services</h2>
        <span class="services-caption -h5 animate-on-scroll" data-delay="2">
          <span>Craftsmanship</span>
          <span>You Can</span>
          <span>Count On</span>
        </span>
      </div>

      <!-- Gallery -->
      <div class="gallery animate-on-scroll anim-scale" data-delay="3">
        <div class="gallery-image">
          <Transition name="gallery-slide" mode="out-in">
            <img
              :key="currentSlide"
              :src="services[currentSlide].img"
              :alt="services[currentSlide].name"
              loading="lazy"
            >
          </Transition>
        </div>

        <div class="gallery-bottom">
          <div class="gallery-info">
            <span class="service-name -h3">{{ services[currentSlide].name }}</span>
            <p class="-m">{{ services[currentSlide].desc }}</p>
          </div>

          <nav class="gallery-nav">
            <button class="nav-btn" @click="prev" aria-label="Previous">
              <svg viewBox="0 0 50 50"><polygon points="48 24.5 3 24.5 12.4 12.3 11.6 11.7 1.4 25 11.6 37.3 12.4 36.7 3.1 25.5 48 25.5 48 24.5" /></svg>
            </button>
            <span class="nav-count -h5">{{ currentSlide + 1 }}<span class="dim">/{{ services.length }}</span></span>
            <button class="nav-btn" @click="next" aria-label="Next">
              <svg viewBox="0 0 50 50"><polygon points="38.4 11.7 37.6 12.3 47 24.5 2 24.5 2 25.5 46.9 25.5 37.6 36.7 38.4 37.3 48.6 25 38.4 11.7" /></svg>
            </button>
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
  padding: var(--h0) 0 var(--large);
  position: relative;
}

.services-header {
  text-align: center;
  margin-bottom: var(--h1);
}

.services-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 400;
  line-height: 0.85;
  color: var(--c-yellow);
  margin-bottom: var(--h5);
}

.services-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(var(--c-yellow-rgb), 0.5);
}

.services-caption span { display: block; }
.services-caption span:first-child { translate: -0.25em 0; }
.services-caption span:nth-child(2) { translate: 2em 0; }
.services-caption span:nth-child(3) { translate: -0.5em 0; }

/* Gallery */
.gallery {
  display: flex;
  flex-direction: column;
  gap: var(--g-gap);
}

.gallery-image {
  aspect-ratio: 16/9;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
  background-color: var(--c-stone);
}

.gallery-image img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Gallery slide transition */
.gallery-slide-enter-active {
  transition: clip-path 0.9s cubic-bezier(0.35, 0.35, 0, 1), transform 0.9s cubic-bezier(0.35, 0.35, 0, 1);
}
.gallery-slide-leave-active {
  transition: clip-path 0.6s cubic-bezier(0.35, 0.35, 0, 1), transform 0.6s cubic-bezier(0.35, 0.35, 0, 1);
}
.gallery-slide-enter-from {
  clip-path: inset(0 100% 0 0);
  transform: scale(1.1);
}
.gallery-slide-leave-to {
  clip-path: inset(0 0 0 100%);
  transform: scale(0.95);
}

.gallery-bottom {
  display: flex;
  flex-direction: column;
  gap: var(--h5);
}

.gallery-info {
  min-height: 4em;
}

.service-name {
  display: block;
  color: var(--c-yellow);
  font-family: var(--font-heading);
  margin-bottom: var(--mm);
}

.gallery-info p {
  color: var(--c-white);
  max-width: 45ch;
}

.gallery-nav {
  display: flex;
  align-items: center;
  gap: var(--h5);
  border-top: 1px solid rgba(var(--c-yellow-rgb), 0.15);
  padding-top: var(--m);
}

.nav-btn {
  background: var(--c-stone);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  transition: background-color 0.6s var(--f-cubic);
}

.nav-btn svg {
  fill: var(--c-yellow);
  width: 1.5rem;
}

.nav-count {
  font-family: var(--font-heading);
  color: var(--c-yellow);
}

.dim {
  opacity: 0.4;
}

@media (min-width: 1024px) {
  .gallery-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .gallery-nav {
    border-top: none;
    padding-top: 0;
  }

  .nav-btn:hover {
    background: var(--c-yellow);
  }

  .nav-btn:hover svg {
    fill: var(--c-black);
  }
}
</style>
