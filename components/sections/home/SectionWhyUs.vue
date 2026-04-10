<script setup lang="ts">
const section = ref<HTMLElement | null>(null)
useInView(section, { threshold: 0.1 })
</script>

<template>
  <section ref="section" class="c-why-us -inverted">
    <div class="figure-map">
      <figure>
        <img
          src="/images/filler/workshop.jpg"
          alt="Saylorsburg area"
          loading="lazy"
        >
      </figure>
    </div>

    <div class="-w -gc" style="--columns: 6;">
      <span class="title -h1 -m-h3">
        <span>Why</span>
        <span>Choose</span>
        <span>Yost</span>
      </span>

      <p class="subtitle -p-h6 -a-to-top" style="--l-delay: 0.2;">
        Professional handyman services you can trust.
      </p>

      <p class="caption -m -a-to-top" style="--l-delay: 0.4;">
        With years of experience serving Saylorsburg and the surrounding Poconos area,
        we bring <span class="accent -h5">reliability</span>, attention to detail,
        and honest pricing to every job. Licensed, insured, and committed to getting it right the first time.
      </p>

      <span class="cta-label -hp -a-to-top" style="--l-delay: 0.6;">
        <span>Ready to</span>
        <span>Get Started? /</span>
      </span>

      <BaseButton big tag="a" href="/contact" class="cta-btn -dark">
        Get Free Estimate
      </BaseButton>
    </div>
  </section>
</template>

<style scoped>
.c-why-us {
  background-color: var(--c-yellow);
  color: var(--c-black);
  display: grid;
  place-items: center;
  position: relative;
  z-index: 30;
}

.figure-map {
  align-self: start;
  grid-area: 1 / 1;
  justify-self: stretch;
  overflow: hidden;
  position: relative;
}

.figure-map::after {
  background-image:
    linear-gradient(to right, var(--c-yellow), rgba(var(--c-yellow-rgb), 0) 80%),
    linear-gradient(to left, var(--c-yellow), rgba(var(--c-yellow-rgb), 0) 40%),
    linear-gradient(to top, var(--c-yellow), rgba(var(--c-yellow-rgb), 0) 40%);
  content: "";
  display: block;
  inset: 0;
  position: absolute;
}

.figure-map figure {
  position: relative;
}

.figure-map img {
  width: 100%;
  opacity: 0.3;
}

.-w {
  grid-area: 1 / 1;
  justify-self: stretch;
  padding-top: var(--h1);
  padding-bottom: var(--large);
}

.title {
  --left: 1; --width: 4;
  justify-self: left;
  font-family: var(--font-heading);
}

.title span {
  display: block;
}
.title span:first-child { translate: 0.5em 0; }
.title span:nth-child(2) { translate: 1.5em 0; }

.subtitle {
  --top: 2; --left: 2; --width: 3;
  margin-top: var(--large);
}

.caption {
  --top: 3; --left: 2; --width: 4;
  margin-top: var(--h2);
}

.accent {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--c-brown);
  position: relative;
}

.accent::before {
  border: 1px solid rgba(var(--c-brown-rgb), 0.3);
  border-radius: 50%;
  content: "";
  display: block;
  padding-bottom: 300%;
  position: absolute;
  width: 300%;
}

.cta-label {
  --top: 4; --left: 2; --width: 4;
  display: block;
  justify-self: start;
  margin-top: var(--h3);
  margin-bottom: var(--h5);
}

.cta-label span {
  display: block;
  transition: translate 0.6s var(--f-cubic);
}
.cta-label span:nth-child(2) { translate: 2em 0; }

.cta-btn {
  --top: 5; --left: 2; --width: 4;
}

@media (min-width: 1024px) {
  .-w { --columns: 12; }
  .title { --left: 3; --width: 5; }
  .subtitle { --left: 3; --width: 4; }
  .caption { --left: 4; --width: 3; }
  .cta-label { --left: 8; --width: 2; margin-top: 0; }
  .cta-btn { --left: 9; --width: 2; }
}
</style>
