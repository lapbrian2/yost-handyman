<script setup lang="ts">
const { gsap } = useScrollAnimation()
const sectionRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  if (!sectionRef.value) return
  await nextTick()

  // Cinematic zoom on truck image
  gsap.fromTo('.contact-split__image img', { scale: 1.25 }, {
    scale: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top bottom', end: 'bottom top', scrub: true },
  })

  // Content slides in
  gsap.fromTo('.contact-split__content', { x: 60, opacity: 0 }, {
    x: 0, opacity: 1, ease: 'none',
    scrollTrigger: { trigger: sectionRef.value, start: 'top 75%', end: 'top 40%', scrub: true },
  })
})

function handleSubmit(e: Event) { e.preventDefault() }
</script>

<template>
  <section ref="sectionRef" class="contact-split">
    <div class="contact-split__image">
      <img src="~/assets/images/hero-work.jpg" alt="Yost Handyman Services truck">
    </div>
    <div class="contact-split__content">
      <p class="overline">Get in Touch</p>
      <h2 style="margin: var(--space-xs) 0 var(--space-md);">Contact us</h2>
      <div>
        <div class="contact-info__detail">
          <p class="contact-info__label">Phone</p>
          <p class="contact-info__value"><a href="tel:4844782994">484-478-2994</a></p>
        </div>
        <div class="contact-info__detail">
          <p class="contact-info__label">Location</p>
          <p class="contact-info__value">Saylorsburg, Pennsylvania<br>Serving all surrounding areas</p>
        </div>
        <div class="contact-info__detail">
          <p class="contact-info__label">Guarantee</p>
          <p class="contact-info__value">High quality repair services.<br>Licensed and insured.</p>
        </div>
      </div>
      <form class="contact-form" @submit="handleSubmit">
        <input type="text" class="contact-form__field" placeholder="Name" disabled>
        <input type="email" class="contact-form__field" placeholder="Email" disabled>
        <textarea class="contact-form__field contact-form__field--textarea" placeholder="Message" disabled></textarea>
        <button type="button" class="contact-form__submit" disabled>Get a Quote</button>
      </form>
    </div>
  </section>
</template>
