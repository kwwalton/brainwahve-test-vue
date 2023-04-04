<script setup>
import ContactSalesCta from '../components/ContactSalesCta.vue'
import LogIn from '../components/LogIn.vue'
import LogoBanner from '../components/LogoBanner.vue'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 h-screen">
    <section class="grid">
      <LogoBanner />
      <LogIn />
    </section>
    <section>
      <ContactSalesCta />
    </section>
  </div>
</template>
