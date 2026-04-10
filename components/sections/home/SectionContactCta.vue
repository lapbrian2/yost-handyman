<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
const titleRef = ref<HTMLElement | null>(null)

useInView(section, { threshold: 0.1 })

const form = reactive({
  name: '',
  phone: '',
  service: '',
  message: '',
})

// Split text animations will be added in polish phase
</script>

<template>
  <section ref="section" class="c-contact-cta">
    <!-- Background images -->
    <div class="cta-bg">
      <img
        src="/images/filler/electrical.jpg"
        alt=""
        loading="lazy"
      >
    </div>

    <!-- Title -->
    <div class="title">
      <span ref="titleRef" class="-lrg-max">Get Your Free Estimate</span>
    </div>

    <!-- Quick form -->
    <div class="-w form-wrap">
      <form @submit.prevent class="-gc" style="--columns: 6;">
        <BaseInput
          v-model="form.name"
          name="name"
          label="Full"
          label-second="Name"
          placeholder="John Smith"
          required
        />
        <BaseInput
          v-model="form.phone"
          name="phone"
          label="Phone"
          placeholder="484-555-0123"
          type="tel"
          required
        />
        <BaseInput
          v-model="form.service"
          name="service"
          label="Service"
          label-second="Needed"
          placeholder="Deck repair, plumbing..."
        />
        <BaseInput
          v-model="form.message"
          name="message"
          label="Tell Us"
          label-second="More"
          placeholder="Describe what you need..."
          textarea
          :rows="3"
        />

        <div class="agreement checkbox-wrap -m">
          <input type="checkbox" id="cta-agreement">
          <span class="checkmark"></span>
          <label for="cta-agreement">
            I understand estimates are free and scheduling is subject to availability.
          </label>
        </div>

        <div class="button-wrap">
          <BaseButton big>
            Request Estimate
          </BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.c-contact-cta {
  align-items: start;
  display: grid;
  justify-content: stretch;
  position: relative;
  z-index: 10;
}

.c-contact-cta::after {
  background-image: linear-gradient(
    180deg,
    var(--c-black) 0%,
    rgba(var(--c-black-rgb), 0.95) 17%,
    rgba(var(--c-black-rgb), 0.8) 31%,
    rgba(var(--c-black-rgb), 0.5) 50%,
    rgba(var(--c-black-rgb), 0.2) 69%,
    rgba(var(--c-black-rgb), 0) 100%
  );
  content: "";
  display: block;
  height: calc(var(--g-gap) * 4);
  inset: 0 0 auto 0;
  position: absolute;
  z-index: 20;
}

.cta-bg {
  grid-column: 1;
  grid-row: 1 / 3;
  overflow: hidden;
  position: relative;
  min-height: calc(var(--vh, 1vh) * 50);
}

.cta-bg img {
  height: 100%;
  object-fit: cover;
  opacity: 0.25;
  width: 100%;
}

.title {
  --width: 6;
  grid-column: 1;
  grid-row: 1;
  padding-top: var(--h3);
  position: relative;
  text-align: center;
  z-index: 10;
}

.title span {
  color: var(--c-white);
  -webkit-mask: linear-gradient(180deg, transparent 10%, white 70%);
  mask: linear-gradient(180deg, transparent 10%, white 70%);
  padding-bottom: var(--h3);
}

.form-wrap {
  grid-column: 1;
  grid-row: 2;
  padding-bottom: calc(var(--large) + 20%);
  z-index: 10;
}

form {
  gap: var(--g-gap);
}

form :deep(.field) {
  grid-column: 1 / -1;
}

.agreement {
  grid-column: 2 / 6;
  margin-top: var(--g-gap);
  color: var(--c-white);
}

.agreement label {
  font-size: var(--m);
  color: rgba(var(--c-white-rgb), 0.6);
}

.button-wrap {
  grid-column: 2 / 6;
  margin-top: var(--mm);
}

.button-wrap :deep(.button) {
  width: 100%;
}

@media (min-width: 1024px) {
  .title { --width: 12; }

  form {
    --columns: 8;
    grid-column: 3 / span 8;
  }

  form :deep(.field) {
    grid-column: 1 / 5;
  }

  .agreement {
    grid-column: 1 / 4;
  }

  .button-wrap {
    grid-column: 6 / 8;
    margin-top: var(--h1);
  }
}
</style>
