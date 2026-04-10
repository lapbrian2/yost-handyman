<template>
  <footer class="footer">
    <div class="footer-inner -w">
      <!-- Top row -->
      <div class="footer-top -gc">
        <div class="footer-badge">
          <span class="-mm">Licensed &amp; Insured</span>
        </div>

        <div class="footer-tagline">
          <p class="-hp" style="color: var(--c-yellow)">
            Professional Handyman Services — Saylorsburg, PA
          </p>
        </div>
      </div>

      <!-- Location display -->
      <div class="footer-location -gc">
        <div class="footer-location-text">
          <span class="location-line -h4">Serving</span>
          <span class="location-line -h4 -offset-1">/</span>
          <span class="location-line -h4 -offset-1">Saylorsburg</span>
          <span class="location-line -h4 -offset-2">&amp; Beyond</span>
        </div>
      </div>

      <!-- Nav links -->
      <nav class="footer-nav -gc">
        <NuxtLink to="/services" class="footer-link -h0 -nl">Services</NuxtLink>
        <NuxtLink to="/portfolio" class="footer-link -h0 -nl">Portfolio</NuxtLink>
        <NuxtLink to="/about" class="footer-link -h0 -nl">About</NuxtLink>
        <NuxtLink to="/contact" class="footer-link -h0 -nl">Contact</NuxtLink>
      </nav>

      <!-- Contact row -->
      <div class="footer-contact -gc">
        <a href="tel:4844782994" class="footer-phone -h5">
          484-478-2994
        </a>
        <p class="footer-copy -mm">&copy; 2026</p>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom -gc">
        <div class="footer-bottom-logo">
          <span class="logo-line">Yost</span>
          <span class="logo-line -indent-1">Handyman</span>
          <span class="logo-line -indent-2">Services</span>
        </div>

        <span class="footer-slash">/</span>

        <p class="footer-desc -m">
          Reliable craftsmanship for every corner of your home.
          From repairs to renovations, handled with care.
        </p>
      </div>
    </div>

    <!-- Stone texture background -->
    <div class="footer-texture" />
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
  background-color: var(--c-black);
  color: var(--c-yellow);
  margin-top: -20%;
  overflow: hidden;
  padding-bottom: calc(var(--h1) * 2);
  padding-top: calc(var(--h0) * 2);
  position: relative;
}

.footer-texture {
  background-color: var(--c-stone);
  inset: 0;
  mix-blend-mode: overlay;
  opacity: 0.15;
  pointer-events: none;
  position: absolute;
  z-index: 0;
}

.footer-inner {
  position: relative;
  z-index: 1;
}

/* ── Top row ── */
.footer-top {
  align-items: center;
  margin-bottom: calc(var(--h2) * 2);
}

.footer-badge {
  --left: 1;
  --width: 3;
  border: 1px solid rgba(var(--c-yellow-rgb), 0.25);
  display: inline-block;
  padding: 0.3em 0.75em;
}

.footer-badge .-mm {
  color: var(--c-yellow);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.footer-tagline {
  --left: 1;
  --top: 2;
  --width: 6;
  margin-top: var(--p);
}

/* ── Location display ── */
.footer-location {
  margin-bottom: calc(var(--h2) * 2);
}

.footer-location-text {
  --left: 1;
  --width: 6;
}

.location-line {
  color: var(--c-yellow);
  display: block;
  font-family: var(--font-heading);
  font-weight: 300;
}

.location-line.-offset-1 {
  transform: translateX(0.5em);
}

.location-line.-offset-2 {
  transform: translateX(1em);
}

/* ── Nav links ── */
.footer-nav {
  border-top: 1px solid rgba(var(--c-yellow-rgb), 0.15);
  gap: 0;
  margin-bottom: calc(var(--h2) * 2);
  padding-top: var(--h5);
}

.footer-link {
  --left: 1;
  --width: 6;
  color: var(--c-yellow);
  display: block;
  font-family: var(--font-heading);
  font-weight: 300;
  padding: 0.1em 0;
  transition: opacity 0.4s var(--f-cubic);
}

.footer-link:hover {
  opacity: 0.6;
}

/* ── Contact row ── */
.footer-contact {
  align-items: baseline;
  margin-bottom: calc(var(--h1) * 2);
}

.footer-phone {
  --left: 1;
  --width: 4;
  color: var(--c-yellow);
  font-family: var(--font-heading);
  font-weight: 300;
}

.footer-copy {
  --left: 5;
  --width: 2;
  color: rgba(var(--c-yellow-rgb), 0.4);
  justify-self: end;
}

/* ── Bottom bar ── */
.footer-bottom {
  align-items: start;
  border-top: 1px solid rgba(var(--c-yellow-rgb), 0.1);
  padding-top: var(--h5);
}

.footer-bottom-logo {
  --left: 1;
  --width: 2;
}

.footer-bottom-logo .logo-line {
  color: rgba(var(--c-yellow-rgb), 0.35);
  display: block;
  font-family: var(--font-heading);
  font-size: var(--m);
  font-weight: 300;
  line-height: 1.2;
}

.footer-bottom-logo .logo-line.-indent-1 {
  margin-left: 0.5em;
}

.footer-bottom-logo .logo-line.-indent-2 {
  margin-left: 0.75em;
}

.footer-slash {
  --left: 3;
  --width: 1;
  color: rgba(var(--c-yellow-rgb), 0.2);
  font-family: var(--font-heading);
  font-size: var(--h3);
  font-weight: 300;
  line-height: 1;
}

.footer-desc {
  --left: 4;
  --width: 3;
  color: rgba(var(--c-yellow-rgb), 0.4);
  max-width: 28ch;
}

/* ── Desktop: 12-col ── */
@media (min-width: 1024px) {
  .footer-badge {
    --left: 1;
    --width: 3;
  }

  .footer-tagline {
    --left: 5;
    --top: 1;
    --width: 8;
    margin-top: 0;
  }

  .footer-location-text {
    --left: 1;
    --width: 6;
  }

  .footer-link {
    --width: 3;
  }

  .footer-link:nth-child(1) { --left: 1; }
  .footer-link:nth-child(2) { --left: 4; }
  .footer-link:nth-child(3) { --left: 7; }
  .footer-link:nth-child(4) { --left: 10; }

  .footer-phone {
    --left: 1;
    --width: 6;
  }

  .footer-copy {
    --left: 10;
    --width: 3;
  }

  .footer-bottom-logo {
    --left: 1;
    --width: 2;
  }

  .footer-slash {
    --left: 3;
    --width: 1;
  }

  .footer-desc {
    --left: 5;
    --width: 5;
    max-width: 40ch;
  }
}
</style>
