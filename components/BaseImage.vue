<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
  fit?: boolean
}>()

const imgRef = ref<HTMLImageElement | null>(null)
const loaded = ref(false)

onMounted(() => {
  if (!imgRef.value) return
  if (imgRef.value.complete) {
    loaded.value = true
    return
  }
  imgRef.value.addEventListener('load', () => {
    loaded.value = true
  }, { once: true })
})
</script>

<template>
  <figure :class="[fit && '-fit']">
    <img
      ref="imgRef"
      :src="src"
      :alt="alt || 'Yost Handyman Services'"
      loading="lazy"
      decoding="async"
      class="lazyLoad"
      :class="{ '-loaded': loaded }"
    >
  </figure>
</template>
