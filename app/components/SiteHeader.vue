<script setup lang="ts">
const scrolled = ref(false)

function scrollTo(selector: string) {
  const { $lenis } = useNuxtApp()
  const el = document.querySelector(selector)
  if ($lenis && el) $lenis.scrollTo(el, { offset: -80, duration: 1.2 })
}

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 50 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="site-header__inner">
      <span class="site-header__name">Yost Handyman</span>
      <nav class="site-header__nav">
        <span class="site-header__link" @click="scrollTo('.services')">Services</span>
        <span class="site-header__link" @click="scrollTo('.testimonial')">Reviews</span>
        <span class="site-header__link" @click="scrollTo('.contact-split')">Contact</span>
        <a href="tel:4844782994" class="site-header__phone">484-478-2994</a>
      </nav>
    </div>
  </header>
</template>
