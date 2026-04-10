<template>
  <header
    ref="headerEl"
    class="header"
    :class="{ '-scrolled': isScrolled, '-hidden': isHidden }"
  >
    <div class="header-overlay" />

    <div class="header-inner -w -gc">
      <!-- Logo -->
      <div class="header-logo">
        <NuxtLink to="/" class="-nl">
          <span class="logo-line">Yost</span>
          <span class="logo-line -indent-1">/</span>
          <span class="logo-line -indent-1">Handyman</span>
          <span class="logo-line -indent-2">/</span>
          <span class="logo-line -indent-2">Services</span>
        </NuxtLink>
      </div>

      <!-- Nav -->
      <nav class="header-nav">
        <NuxtLink to="/services" class="header-btn -nl">Services</NuxtLink>
        <NuxtLink to="/portfolio" class="header-btn -nl">Portfolio</NuxtLink>
      </nav>

      <!-- CTA -->
      <div class="header-cta" :class="{ '-visible': isScrolled }">
        <NuxtLink to="/contact" class="header-cta-btn -nl">
          <span>Get Free Estimate</span>
        </NuxtLink>
      </div>

      <!-- Menu -->
      <button
        class="header-menu"
        aria-label="Menu"
        @click="$emit('toggle-menu')"
      >
        <span class="menu-line" />
        <span class="menu-line" />
        <span class="menu-line" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const headerEl = ref<HTMLElement | null>(null)
const isScrolled = ref(false)
const isHidden = ref(false)

let lastScrollY = 0
let ticking = false

defineEmits<{
  'toggle-menu': []
}>()

function onScroll() {
  if (ticking) return
  ticking = true

  requestAnimationFrame(() => {
    const scrollY = window.scrollY
    const threshold = 80

    isScrolled.value = scrollY > threshold

    // Hide on scroll down, show on scroll up
    if (scrollY > lastScrollY && scrollY > 200) {
      isHidden.value = true
    } else {
      isHidden.value = false
    }

    lastScrollY = scrollY
    ticking = false
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.header {
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  transition:
    transform 0.6s var(--f-cubic),
    opacity 0.6s var(--f-cubic);
  z-index: 102;
}

.header.-hidden {
  transform: translateY(-100%) skewY(2deg);
  opacity: 0;
}

.header-overlay {
  background: linear-gradient(
    180deg,
    rgba(var(--c-brown-rgb), 0.6) 0%,
    transparent 100%
  );
  inset: 0;
  pointer-events: none;
  position: absolute;
  z-index: -1;
}

.header.-scrolled .header-overlay {
  background: linear-gradient(
    180deg,
    rgba(var(--c-black-rgb), 0.85) 0%,
    transparent 100%
  );
}

.header-inner {
  align-items: start;
  padding-bottom: var(--h6);
  padding-top: var(--h6);
  pointer-events: none;
}

.header-inner > * {
  pointer-events: all;
}

/* ── Logo ── */
.header-logo {
  --left: 1;
  --width: 3;
}

.header-logo a {
  display: block;
}

.logo-line {
  color: var(--c-yellow);
  display: block;
  font-family: var(--font-heading);
  font-size: var(--h5);
  font-weight: 300;
  line-height: var(--h5-lh);
}

.logo-line.-indent-1 {
  margin-left: 0.85em;
}

.logo-line.-indent-2 {
  margin-left: 1em;
}

/* ── Nav buttons ── */
.header-nav {
  --left: 1;
  --top: 2;
  --width: 3;
  align-items: center;
  display: flex;
  gap: var(--p);
  margin-top: var(--p);
}

.header-btn {
  border: 1px solid rgba(var(--c-yellow-rgb), 0.3);
  color: var(--c-yellow);
  font-family: var(--font-body);
  font-size: var(--mm);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.35em 0.85em;
  text-transform: uppercase;
  transition:
    border-color 0.4s var(--f-cubic),
    background-color 0.4s var(--f-cubic);
}

.header-btn:hover {
  background-color: rgba(var(--c-yellow-rgb), 0.08);
  border-color: rgba(var(--c-yellow-rgb), 0.6);
}

/* ── CTA ── */
.header-cta {
  --left: 4;
  --top: 1;
  --width: 2;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transform: translateY(-0.5em);
  transition:
    opacity 0.5s var(--f-cubic),
    transform 0.5s var(--f-cubic);
}

.header-cta.-visible {
  opacity: 1;
  transform: translateY(0);
}

.header-cta-btn {
  background-color: var(--c-yellow);
  color: var(--c-black);
  font-family: var(--font-body);
  font-size: var(--mm);
  font-weight: 500;
  letter-spacing: 0.05em;
  padding: 0.45em 1em;
  text-transform: uppercase;
  transition:
    background-color 0.4s var(--f-cubic),
    transform 0.3s var(--f-cubic);
}

.header-cta-btn:hover {
  background-color: var(--c-white);
  transform: scale(1.02);
}

/* ── Menu hamburger ── */
.header-menu {
  --left: 6;
  --top: 1;
  --width: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-self: end;
  padding: 0.5em;
}

.menu-line {
  background-color: var(--c-yellow);
  display: block;
  height: 1px;
  transform-origin: center;
  transition:
    width 0.4s var(--f-cubic),
    transform 0.4s var(--f-cubic);
  width: 1.5em;
}

.menu-line:nth-child(2) {
  width: 1.1em;
}

.menu-line:nth-child(3) {
  width: 0.8em;
}

.header-menu:hover .menu-line {
  width: 1.5em;
}

.header-menu:hover .menu-line:nth-child(1) {
  transform: translateY(1px);
}

.header-menu:hover .menu-line:nth-child(3) {
  transform: translateY(-1px);
}

/* ── Desktop: 12-col ── */
@media (min-width: 1024px) {
  .header-logo {
    --left: 1;
    --width: 3;
  }

  .header-nav {
    --left: 5;
    --top: 1;
    --width: 3;
    margin-top: 0;
  }

  .header-cta {
    --left: 9;
    --top: 1;
    --width: 3;
  }

  .header-menu {
    --left: 12;
    --top: 1;
    --width: 1;
  }
}
</style>
