<script setup lang="ts">
const props = defineProps<{
  tag?: 'button' | 'a'
  href?: string
  big?: boolean
  reverse?: boolean
  label?: string
}>()
</script>

<template>
  <NuxtLink
    v-if="tag === 'a'"
    :to="href"
    :aria-label="label"
    class="button -nl"
    :class="[big && '-big', reverse && '-reverse', '-p', '-m-m']"
  >
    <span class="text -mm -up"><slot /></span>
  </NuxtLink>
  <button
    v-else
    :aria-label="label"
    class="button"
    :class="[big && '-big', reverse && '-reverse', '-p', '-m-m']"
  >
    <span class="text -mm -up"><slot /></span>
  </button>
</template>

<style scoped>
.button {
  align-items: center;
  background: none;
  border: 2px solid rgba(var(--c-yellow-rgb), 0.3);
  border-radius: 0.2rem;
  color: var(--c-yellow);
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-body);
  justify-content: center;
  padding: calc(var(--mm) / 2) var(--p);
  position: relative;
  transition: background-color 0.9s var(--f-cubic), border-color 0.9s var(--f-cubic), color 0.9s var(--f-cubic);
}

.button .text {
  letter-spacing: 0.12em;
  white-space: nowrap;
}

@media (min-width: 1024px) {
  .button:hover {
    background-color: var(--c-yellow);
    border-color: var(--c-yellow);
    color: var(--c-black);
  }
}

.button.-big {
  padding: calc(var(--m) / 1.5) var(--h5);
}

.button.-reverse {
  border-color: transparent;
  color: var(--c-yellow);
}

@media (min-width: 1024px) {
  .button.-reverse:hover {
    background-color: rgba(var(--c-yellow-rgb), 0.1);
    border-color: transparent;
    color: var(--c-white);
  }
}

/* Inverted section context */
.-inverted .button,
.button.-dark {
  border-color: rgba(var(--c-black-rgb), 0.3);
  color: var(--c-black);
}

@media (min-width: 1024px) {
  .-inverted .button:hover,
  .button.-dark:hover {
    background-color: var(--c-black);
    border-color: var(--c-black);
    color: var(--c-yellow);
  }
}
</style>
