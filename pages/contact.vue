<script setup lang="ts">
useHead({ title: 'Contact — Yost Handyman Services' })

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  date: '',
  message: '',
  agreed: false,
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
}
</script>

<template>
  <main class="page contact-page">
    <!-- Background -->
    <section class="c-contact">
      <div class="contact-bg">
        <img
          src="/images/filler/hero.jpg"
          alt=""
          loading="lazy"
        >
      </div>

      <!-- Title -->
      <div class="title">
        <h1 class="-lrg-max">Request Service</h1>
      </div>

      <!-- Form -->
      <div class="-w form-section">
        <div v-if="!submitted">
          <form @submit.prevent="handleSubmit" class="-gc form-grid" style="--columns: 6;">
            <BaseInput
              v-model="form.name"
              name="full_name"
              label="Full"
              label-second="Name"
              placeholder="John Smith"
              required
            />
            <BaseInput
              v-model="form.email"
              name="email"
              label="Email"
              label-second="Address"
              placeholder="john@email.com"
              type="email"
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
              v-model="form.address"
              name="address"
              label="Address"
              placeholder="123 Main St, Saylorsburg"
            />
            <BaseInput
              v-model="form.service"
              name="service"
              label="Service"
              label-second="Needed"
              placeholder="Deck repair, plumbing, painting..."
              textarea
              :rows="3"
              required
            />
            <BaseInput
              v-model="form.date"
              name="preferred_date"
              label="Preferred"
              label-second="Date"
              placeholder="As soon as possible"
            />

            <div class="agreement checkbox-wrap -m">
              <input type="checkbox" id="contact-agreement" v-model="form.agreed">
              <span class="checkmark"></span>
              <label for="contact-agreement">
                I understand estimates are free and scheduling is subject to availability.
              </label>
            </div>

            <div class="button-wrap">
              <BaseButton big type="submit">
                Request Estimate
              </BaseButton>
            </div>
          </form>
        </div>

        <!-- Success state -->
        <div v-else class="success-message">
          <h2 class="-h2">Thank You</h2>
          <p class="-p">We'll get back to you within 24 hours.</p>
          <p class="-m" style="margin-top: var(--h5);">
            Or call us directly: <a href="tel:4844782994" style="color: var(--c-yellow);">484-478-2994</a>
          </p>
        </div>

        <!-- Booking placeholder -->
        <div class="booking-placeholder">
          <h3 class="-h5">Prefer to schedule directly?</h3>
          <div id="booking-widget" class="widget-slot">
            <p class="-m">Online scheduling coming soon.</p>
          </div>
          <p class="-m">Or call <a href="tel:4844782994">484-478-2994</a></p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.c-contact {
  display: grid;
  min-height: calc(var(--vh, 1vh) * 100);
  position: relative;
}

.contact-bg {
  grid-column: 1;
  grid-row: 1 / -1;
  overflow: hidden;
}

.contact-bg img {
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  width: 100%;
}

.title {
  grid-column: 1;
  grid-row: 1;
  padding-top: calc(var(--vh, 1vh) * 25);
  position: relative;
  text-align: center;
  z-index: 10;
}

.title h1 {
  color: var(--c-white);
  -webkit-mask: linear-gradient(180deg, transparent 10%, white 70%);
  mask: linear-gradient(180deg, transparent 10%, white 70%);
}

.form-section {
  grid-column: 1;
  grid-row: 2;
  padding-bottom: var(--large);
  z-index: 10;
}

.form-grid {
  gap: var(--g-gap);
}

.form-grid :deep(.field) {
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

.success-message {
  text-align: center;
  padding: var(--large) 0;
  color: var(--c-yellow);
}

.success-message p {
  color: var(--c-white);
  margin-top: var(--h5);
}

.booking-placeholder {
  margin-top: var(--large);
  text-align: center;
  color: var(--c-yellow);
}

.widget-slot {
  border: 1px dashed rgba(var(--c-yellow-rgb), 0.2);
  border-radius: 0.4rem;
  padding: var(--h2);
  margin: var(--h5) 0;
  color: rgba(var(--c-white-rgb), 0.3);
}

.booking-placeholder a {
  color: var(--c-yellow);
}

@media (min-width: 1024px) {
  .form-grid {
    --columns: 8;
    max-width: calc(var(--col) * 8 + var(--g-gap) * 7);
    margin: 0 auto;
  }

  .form-grid :deep(.field) {
    grid-column: 1 / 5;
  }

  .agreement { grid-column: 1 / 4; }
  .button-wrap { grid-column: 6 / 8; margin-top: var(--h1); }
}
</style>
