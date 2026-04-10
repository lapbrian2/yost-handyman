<script setup lang="ts">
useHead({ title: 'Services — Yost Handyman Services' })
</script>

<template>
  <main class="page services-page">
    <section class="page-hero">
      <div class="-w">
        <h1 class="-lrg">What We Do</h1>
      </div>
    </section>

    <section class="service-list">
      <div class="-w -gc" style="--columns: 6;">
        <div
          v-for="(service, i) in [
            { name: 'Appliance Installation', desc: 'Expert installation of household appliances, ensuring proper fit and function.' },
            { name: 'Plumbing Repair', desc: 'Quick and efficient plumbing repairs to keep your home running smoothly.' },
            { name: 'Faucet Installation & Repair', desc: 'New faucets installed or existing ones fixed — kitchen and bath.' },
            { name: 'Toilet Repair & Replacement', desc: 'Running, leaking, or broken toilets repaired or replaced same-day.' },
            { name: 'Door & Window Repair', desc: 'Fix drafty doors, stuck windows, and broken hardware.' },
            { name: 'Interior & Exterior Painting', desc: 'Clean, professional painting that transforms any space.' },
            { name: 'Lighting Installation', desc: 'New fixtures, switches, and outlets installed safely.' },
            { name: 'Fence Repair & Painting', desc: 'Restore and protect your fence from the elements.' },
            { name: 'Pressure Washing', desc: 'Restore driveways, siding, and decks to like-new condition.' },
            { name: 'Deck Repair & Staining', desc: 'Structural repairs and protective staining for lasting beauty.' },
          ]"
          :key="service.name"
          class="service-item -a-to-top"
          :style="{ '--l-delay': 0.1 * i }"
        >
          <span class="service-num -mm">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="-h5">{{ service.name }}</h3>
          <p class="-m">{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="pricing -inverted">
      <div class="-w -gc" style="--columns: 6;">
        <h2 class="pricing-title -h1 -m-h3">Transparent Pricing</h2>
        <div class="pricing-card" v-for="tier in [
          { name: 'Quick Fix', price: 'Starting at $XX/hr', desc: 'Small repairs, installations, minor fixes. Perfect for quick jobs.' },
          { name: 'Project Work', price: 'Custom Quote', desc: 'Medium jobs — full-day work, multi-step projects. We scope it together.' },
          { name: 'Full Renovation', price: 'Free Detailed Estimate', desc: 'Large scope projects. We walk the site, plan the work, and quote it right.' },
        ]" :key="tier.name">
          <h3 class="-h4">{{ tier.name }}</h3>
          <span class="tier-price -h6">{{ tier.price }}</span>
          <p class="-m">{{ tier.desc }}</p>
        </div>
        <p class="pricing-note -mm">Prices vary by scope and materials. Call 484-478-2994 for exact pricing.</p>
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

.service-list {
  padding-bottom: var(--large);
}

.service-item {
  --width: 6;
  border-bottom: 1px solid rgba(var(--c-yellow-rgb), 0.1);
  padding: var(--h5) 0;
}

.service-num {
  color: rgba(var(--c-yellow-rgb), 0.3);
  display: block;
  margin-bottom: var(--mm);
}

.service-item h3 {
  color: var(--c-yellow);
  margin-bottom: var(--mm);
}

.service-item p {
  color: var(--c-white);
  max-width: 50ch;
}

.pricing {
  background-color: var(--c-yellow);
  color: var(--c-black);
  padding: var(--large) 0;
}

.pricing-title {
  --width: 6;
  margin-bottom: var(--h2);
  font-family: var(--font-heading);
}

.pricing-card {
  --width: 6;
  border: 1px solid rgba(var(--c-black-rgb), 0.1);
  border-radius: 0.4rem;
  padding: var(--h5);
  margin-bottom: var(--g-gap);
}

.pricing-card h3 {
  font-family: var(--font-heading);
  margin-bottom: var(--mm);
}

.tier-price {
  display: block;
  color: var(--c-brown);
  margin-bottom: var(--m);
  font-family: var(--font-heading);
}

.pricing-note {
  --width: 6;
  color: rgba(var(--c-black-rgb), 0.5);
  margin-top: var(--h5);
}

@media (min-width: 1024px) {
  .service-item { --width: 6; }
  .service-list .-gc { --columns: 12; }
  .pricing .-gc { --columns: 12; }
  .pricing-title { --width: 12; }
  .pricing-card { --width: 4; }
  .pricing-note { --width: 12; }
}
</style>
