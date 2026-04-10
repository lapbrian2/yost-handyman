<script setup lang="ts">
</script>

<template>
  <section class="c-testimonials">
    <div class="-w">
      <h2 class="test-title animate-on-scroll anim-clip">Trusted</h2>
      <span class="test-sub -h3 animate-on-scroll">By Homeowners</span>

      <div class="quotes animate-on-scroll">
        <blockquote class="quote-main animate-on-scroll">
          <p class="-h4">
            "I was amazed by the level of craftsmanship and attention to detail
            that Yost Handyman Services provided. They truly exceeded my expectations
            and I will definitely be using their services again in the future!"
          </p>
          <cite class="-mm">-- Barbara S.</cite>
        </blockquote>

        <blockquote class="quote-secondary animate-on-scroll">
          <p class="-h5">
            "Fast, reliable, and the quality speaks for itself.
            Our deck looks brand new."
          </p>
          <cite class="-mm">-- Client Testimonial</cite>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.c-testimonials {
  background-color: var(--c-black);
  color: var(--c-white);
  padding: var(--large) 0;
  position: relative;
}

.test-title {
  font-family: var(--font-display);
  font-size: clamp(4rem, 12vw, 10rem);
  font-weight: 400;
  line-height: 0.85;
  color: var(--c-yellow);
  text-align: center;
}

.test-sub {
  display: block;
  text-align: center;
  color: rgba(var(--c-yellow-rgb), 0.6);
  font-family: var(--font-heading);
  margin-top: var(--m);
  margin-bottom: var(--h0);
}

.quotes {
  display: flex;
  flex-direction: column;
  gap: var(--h2);
  max-width: 50ch;
  margin: 0 auto;
}

.quote-main p {
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 300;
  border-left: 2px solid rgba(var(--c-yellow-rgb), 0.3);
  padding-left: var(--p);
  line-height: 1.3;
}

.quote-secondary p {
  font-family: var(--font-heading);
  font-style: italic;
  font-weight: 300;
  border-left: 2px solid rgba(var(--c-yellow-rgb), 0.15);
  padding-left: var(--p);
  color: rgba(var(--c-white-rgb), 0.6);
  line-height: 1.3;
}

cite {
  display: block;
  margin-top: var(--m);
  color: var(--c-yellow);
  font-style: normal;
  letter-spacing: 0.08em;
}

@media (min-width: 1024px) {
  .quotes {
    max-width: 60ch;
    margin-left: 15%;
  }
}
</style>
