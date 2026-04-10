<script setup lang="ts">
useHead({ title: 'About — Yost Handyman Services' })

const archSection = ref<HTMLElement | null>(null)
useScrollProgress(archSection, { start: 'top bottom', end: 'bottom top' })
</script>

<template>
  <main class="page about-page">
    <!-- Bio section with arch -->
    <section ref="archSection" class="c-bio">
      <div class="-w -gc" style="--columns: 6;">
        <span class="-h4 -m-h6 title">
          <span>Built</span>
          <span>On</span>
          <span>Trust</span>
        </span>

        <span class="-lrg tt-stone">Yost</span>

        <!-- Arch frame -->
        <div class="arch">
          <div class="arch-inner">
            <img
              src="/images/filler/electrical.jpg"
              alt="Yost Handyman Services"
              loading="lazy"
            >
          </div>
        </div>

        <p class="-h4 -m-h6 caption -a-to-top">
          Yost Handyman Services is a licensed and insured LLC serving the
          Saylorsburg, Pennsylvania area. We bring years of experience,
          attention to detail, and honest pricing to every job — big or small.
        </p>

        <p class="tt-ending -p-hp -m-m -a-to-top" style="--l-delay: 0.2;">
          Your home deserves professional care.
        </p>
      </div>
    </section>

    <!-- Service area -->
    <section class="c-service-area -inverted">
      <div class="-w -gc" style="--columns: 6;">
        <h2 class="area-title -h1 -m-h3">
          <span>Proudly</span>
          <span>Serving</span>
          <span>The Poconos</span>
        </h2>

        <div class="area-map">
          <img
            src="/images/filler/workshop.jpg"
            alt="Service area map"
            loading="lazy"
          >
        </div>

        <div class="area-towns -a-to-top">
          <h3 class="-h6 -up">Service Area (~30 miles)</h3>
          <ul class="-m">
            <li>Saylorsburg</li>
            <li>Stroudsburg</li>
            <li>East Stroudsburg</li>
            <li>Tannersville</li>
            <li>Brodheadsville</li>
            <li>Kunkletown</li>
            <li>Effort</li>
            <li>Long Pond</li>
          </ul>
        </div>

        <div class="credentials -a-to-top" style="--l-delay: 0.2;">
          <h3 class="-h6 -up">Credentials</h3>
          <ul class="-m">
            <li>Licensed & Insured LLC</li>
            <li>Serving the Poconos region</li>
            <li>All work guaranteed</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.c-bio {
  background-color: var(--c-black);
  color: var(--c-white);
  padding-top: calc(var(--vh, 1vh) * 25);
  padding-bottom: var(--large);
  position: relative;
  contain: paint layout;
}

.title {
  --width: 6;
  color: var(--c-yellow);
  font-family: var(--font-heading);
}

.title span {
  display: block;
}
.title span:nth-child(2) { margin-left: 1em; }
.title span:nth-child(3) { margin-left: 2.5em; }

.tt-stone {
  --top: 2; --width: 6;
  align-self: end;
  color: var(--c-stone);
  font-size: calc(var(--vw, 1vw) * 32);
  justify-self: center;
  text-align: center;
  position: relative;
}

.arch {
  --top: 2; --left: 1; --width: 6;
  background-image: linear-gradient(-45deg, var(--c-black), var(--c-grey));
  border-radius: 50% 50% 0 0;
  padding: calc(var(--g-gap) * 2) var(--g-gap) var(--g-gap);
  scale: calc(1 - var(--progress) * 0.2);
  transform-origin: 50% 150%;
  transform: translateZ(0);
}

.arch-inner {
  aspect-ratio: 1/1;
  border-radius: 50% 50% 0 0;
  overflow: hidden;
  position: relative;
}

.arch-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  scale: calc(1 + var(--progress) * 0.5);
  transform: translateZ(0);
}

.caption {
  --top: 3; --left: 2; --width: 4;
  justify-content: center;
  margin-top: var(--h1);
  text-align: center;
  color: var(--c-yellow);
  font-family: var(--font-heading);
}

.tt-ending {
  --top: 4; --left: 3; --width: 3;
  color: var(--c-white);
  text-align: center;
  margin-top: var(--h5);
}

/* Service area */
.c-service-area {
  background-color: var(--c-yellow);
  color: var(--c-black);
  padding: var(--large) 0;
}

.area-title {
  --width: 6;
  font-family: var(--font-heading);
  margin-bottom: var(--h2);
}

.area-title span {
  display: block;
}
.area-title span:first-child { translate: 0.5em 0; }
.area-title span:nth-child(2) { translate: 1.5em 0; }

.area-map {
  --width: 6;
  border-radius: 0.4rem;
  overflow: hidden;
  margin-bottom: var(--h2);
}

.area-map img {
  width: 100%;
  opacity: 0.5;
}

.area-towns, .credentials {
  --width: 3;
  margin-bottom: var(--h5);
}

.area-towns h3, .credentials h3 {
  color: var(--c-brown);
  margin-bottom: var(--m);
  font-family: var(--font-body);
  font-weight: 500;
  letter-spacing: 0.12em;
}

.area-towns li, .credentials li {
  padding: var(--mm) 0;
  border-bottom: 1px solid rgba(var(--c-black-rgb), 0.1);
}

@media (min-width: 1024px) {
  .c-bio .-gc { --columns: 24; }
  .title, .tt-stone { --width: 24; }
  .arch { --left: 7; --width: 12; margin-top: var(--h1); }
  .caption { --left: 7; --width: 12; margin-top: var(--large); }
  .tt-ending { --left: 13; --width: 4; }

  .c-service-area .-gc { --columns: 12; }
  .area-title { --width: 6; }
  .area-map { --width: 12; }
  .area-towns { --left: 1; --width: 3; }
  .credentials { --left: 5; --width: 3; }
}
</style>
