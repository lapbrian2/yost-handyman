<script setup lang="ts">
useHead({ title: 'Portfolio — Yost Handyman Services' })

const currentProject = ref(0)
const projects = [
  { name: 'Kitchen Renovation', type: 'Renovation', before: '/images/filler/kitchen.jpg', after: '/images/filler/kitchen.jpg' },
  { name: 'Deck Restoration', type: 'Outdoor', before: '/images/filler/deck.jpg', after: '/images/filler/deck.jpg' },
  { name: 'Bathroom Remodel', type: 'Renovation', before: '/images/filler/bathroom.jpg', after: '/images/filler/bathroom.jpg' },
  { name: 'Fence Painting', type: 'Outdoor', before: '/images/filler/fence.jpg', after: '/images/filler/fence.jpg' },
  { name: 'Pressure Washing', type: 'Exterior', before: '/images/filler/pressure.jpg', after: '/images/filler/pressure.jpg' },
  { name: 'Lighting Upgrade', type: 'Interior', before: '/images/filler/electrical.jpg', after: '/images/filler/electrical.jpg' },
]

const next = () => { currentProject.value = (currentProject.value + 1) % projects.length }
const prev = () => { currentProject.value = (currentProject.value - 1 + projects.length) % projects.length }
</script>

<template>
  <main class="page portfolio-page">
    <section class="page-hero">
      <div class="-w">
        <h1 class="-lrg">Our Work</h1>
      </div>
    </section>

    <section class="gallery-section">
      <div class="-w">
        <!-- Gallery display -->
        <div class="gallery-grid">
          <div class="gallery-before">
            <span class="gallery-label -mm -up">Before</span>
            <figure class="-fit">
              <img :src="projects[currentProject].before" :alt="'Before: ' + projects[currentProject].name" loading="lazy">
            </figure>
          </div>
          <div class="gallery-after">
            <span class="gallery-label -mm -up">After</span>
            <figure class="-fit">
              <img :src="projects[currentProject].after" :alt="'After: ' + projects[currentProject].name" loading="lazy">
            </figure>
          </div>
        </div>

        <!-- Project info -->
        <div class="project-info">
          <span class="-mm project-type">{{ projects[currentProject].type }}</span>
          <h2 class="-h3">{{ projects[currentProject].name }}</h2>
        </div>

        <!-- Navigation -->
        <nav class="gallery-nav">
          <button @click="prev" aria-label="Previous project">
            <svg viewBox="0 0 50 50" fill="currentColor"><polygon points="48 24.5 3 24.5 12.4 12.3 11.6 11.7 1.4 25 11.6 37.3 12.4 36.7 3.1 25.5 48 25.5 48 24.5" /></svg>
          </button>
          <span class="-h5">{{ currentProject + 1 }} / {{ projects.length }}</span>
          <button @click="next" aria-label="Next project">
            <svg viewBox="0 0 50 50" fill="currentColor"><polygon points="38.4 11.7 37.6 12.3 47 24.5 2 24.5 2 25.5 46.9 25.5 37.6 36.7 38.4 37.3 48.6 25 38.4 11.7" /></svg>
          </button>
        </nav>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page-hero {
  padding-top: calc(var(--vh, 1vh) * 30);
  padding-bottom: var(--h1);
  text-align: center;
  color: var(--c-yellow);
}

.gallery-section {
  padding-bottom: var(--large);
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--g-gap);
}

.gallery-before, .gallery-after {
  aspect-ratio: 4/3;
  border-radius: 0.4rem;
  overflow: hidden;
  position: relative;
}

.gallery-before img, .gallery-after img {
  height: 100%;
  object-fit: cover;
  width: 100%;
  position: absolute;
  inset: 0;
  transition: transform 0.9s var(--f-cubic);
}

.gallery-label {
  position: absolute;
  top: var(--m);
  left: var(--m);
  color: var(--c-yellow);
  background: rgba(var(--c-black-rgb), 0.6);
  padding: var(--mm) var(--m);
  border-radius: 0.2rem;
  z-index: 2;
  letter-spacing: 0.12em;
}

.project-info {
  margin-top: var(--h5);
}

.project-type {
  color: rgba(var(--c-yellow-rgb), 0.5);
  display: block;
  margin-bottom: var(--mm);
  letter-spacing: 0.12em;
}

.project-info h2 {
  color: var(--c-yellow);
  font-family: var(--font-heading);
}

.gallery-nav {
  display: flex;
  align-items: center;
  gap: var(--h5);
  margin-top: var(--h5);
  border-top: 1px solid rgba(var(--c-yellow-rgb), 0.2);
  padding-top: var(--h5);
}

.gallery-nav button {
  background-color: var(--c-stone);
  border-radius: 50%;
  padding: 0.8rem;
  color: var(--c-yellow);
  transition: background-color 0.6s var(--f-cubic);
}

.gallery-nav button svg {
  width: 1.5rem;
  fill: var(--c-yellow);
}

@media (min-width: 1024px) {
  .gallery-nav button:hover {
    background-color: var(--c-yellow);
  }
  .gallery-nav button:hover svg {
    fill: var(--c-black);
  }
}

.gallery-nav span {
  color: var(--c-yellow);
  font-family: var(--font-heading);
}

@media (min-width: 1024px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
