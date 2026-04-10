<script setup lang="ts">
</script>

<template>
  <section class="c-why-us">
    <div class="-w">
      <div class="why-header">
        <h2 class="why-title">
          <span>Why</span>
          <span>Choose</span>
          <span>Yost</span>
        </h2>
      </div>

      <p class="why-subtitle -p-h6">
        Professional handyman services you can trust.
      </p>

      <p class="why-body -m">
        With years of experience serving Saylorsburg and the surrounding Poconos area,
        we bring reliability, attention to detail, and honest pricing to every job.
        Licensed, insured, and committed to getting it right the first time.
      </p>

      <div class="why-cta">
        <span class="cta-label -hp">
          <span>Ready to</span>
          <span>Get Started? /</span>
        </span>
        <BaseButton big tag="a" href="/contact" class="-dark">
          Get Free Estimate
        </BaseButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.c-why-us {
  background-color: var(--c-yellow);
  color: var(--c-black);
  padding: var(--large) 0;
  position: relative;
}

.why-header {
  margin-bottom: var(--h1);
}

.why-title {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 7vw, 6rem);
  font-weight: 300;
  line-height: 0.9;
}

.why-title span {
  display: block;
}

.why-title span:first-child { padding-left: 0.5em; }
.why-title span:nth-child(2) { padding-left: 1.5em; }

.why-subtitle {
  margin-bottom: var(--h5);
  max-width: 40ch;
}

.why-body {
  max-width: 50ch;
  margin-bottom: var(--h2);
  line-height: 1.6;
}

.why-cta {
  display: flex;
  flex-direction: column;
  gap: var(--h5);
  max-width: 20rem;
}

.cta-label {
  color: var(--c-black);
}

.cta-label span {
  display: block;
}

.cta-label span:nth-child(2) {
  padding-left: 2em;
}

@media (min-width: 1024px) {
  .-w {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--h2);
  }

  .why-header {
    grid-column: 1;
  }

  .why-subtitle {
    grid-column: 1;
  }

  .why-body {
    grid-column: 1;
  }

  .why-cta {
    grid-column: 2;
    justify-self: end;
    align-self: end;
  }
}
</style>
