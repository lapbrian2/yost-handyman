<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  name: string
  label: string
  labelSecond?: string
  type?: string
  placeholder?: string
  required?: boolean
  textarea?: boolean
  rows?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const id = computed(() => props.name.replace(/\s+/g, '_').toLowerCase())
const hasValue = computed(() => props.modelValue.length > 0)
</script>

<template>
  <div class="field" :class="name">
    <label :class="textarea ? '-h4 -m-hp' : '-hp -m-hm'" :for="id">
      <span>{{ label }}</span>
      <span v-if="labelSecond">{{ labelSecond }}</span>
    </label>
    <span v-if="placeholder && !hasValue" class="placeholder" :class="textarea ? '-h4 -m-h6' : '-h2 -m-h6'">
      {{ placeholder }}
    </span>
    <textarea
      v-if="textarea"
      :id="id"
      :class="['-h4', '-m-h6']"
      :name="name"
      :rows="rows || 4"
      :required="required"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <input
      v-else
      :id="id"
      :class="['-h2', '-m-h6']"
      :type="type || 'text'"
      :name="name"
      :required="required"
      :value="modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </div>
</template>

<style scoped>
.field {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: var(--g-gap);
  position: relative;
}

label {
  color: var(--c-yellow);
  grid-column: 1 / -1;
  display: flex;
  gap: 0.5em;
  opacity: 0.6;
  transition: opacity 0.6s var(--f-cubic);
  pointer-events: none;
}

.field:focus-within label {
  opacity: 1;
}

label span:nth-child(2) {
  margin-left: 0.5em;
}

.placeholder {
  color: rgba(var(--c-white-rgb), 0.15);
  grid-column: 1 / -1;
  grid-row: 2;
  pointer-events: none;
  position: relative;
}

input, textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(var(--c-yellow-rgb), 0.2);
  box-shadow: none;
  color: var(--c-white);
  grid-column: 1 / -1;
  grid-row: 2;
  padding: 0.2em 0;
  position: relative;
  transition: border-color 0.6s var(--f-cubic);
  width: 100%;
}

input:focus, textarea:focus {
  border-color: var(--c-yellow);
  outline: none;
}

textarea {
  resize: vertical;
}

@media (min-width: 1024px) {
  input, textarea {
    font-size: var(--body-font-size);
  }
}
</style>
