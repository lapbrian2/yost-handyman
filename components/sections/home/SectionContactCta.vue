<script setup lang="ts">
const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: '',
})
</script>

<template>
  <section class="c-contact-cta">
    <div class="-w">
      <h2 class="cta-title animate-on-scroll anim-clip">Get Your<br>Free Estimate</h2>

      <form @submit.prevent class="cta-form animate-on-scroll">
        <BaseInput v-model="form.name" name="name" label="Full" label-second="Name" placeholder="John Smith" required />
        <BaseInput v-model="form.phone" name="phone" label="Phone" placeholder="484-555-0123" type="tel" required />
        <BaseInput v-model="form.service" name="service" label="Service" label-second="Needed" placeholder="Deck repair, plumbing..." />
        <BaseInput v-model="form.message" name="message" label="Tell Us" label-second="More" placeholder="Describe what you need..." textarea :rows="3" />

        <div class="form-agree">
          <label class="-m">
            <input type="checkbox">
            I understand estimates are free and scheduling is subject to availability.
          </label>
        </div>

        <div class="form-submit">
          <BaseButton big>Request Estimate</BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.c-contact-cta {
  background-color: var(--c-stone);
  padding: var(--large) 0;
  position: relative;
}

.cta-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 400;
  line-height: 0.85;
  color: var(--c-yellow);
  text-align: center;
  margin-bottom: var(--h1);
}

.cta-form {
  max-width: 32rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--h5);
}

.form-agree {
  color: rgba(var(--c-white-rgb), 0.5);
}

.form-agree label {
  display: flex;
  align-items: flex-start;
  gap: var(--m);
  cursor: pointer;
}

.form-agree input {
  margin-top: 0.25em;
  accent-color: var(--c-yellow);
}

.form-submit :deep(.button) {
  width: 100%;
}
</style>
