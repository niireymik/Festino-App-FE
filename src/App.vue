<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Festino!',
  meta: [
    { name: 'description', content: 'Festino! 모두함께 즐기는 한국공학교 대동제!', vmid: 'description' },
    { name: 'keywords', content: 'Festino, 한국공학대학교, 한국공대, 축제', vmid: 'keywords' },
    { property: 'og:title', content: 'Festino!', vmid: 'og:title' },
    { property: 'og:description', content: 'Festino! 모두함께 즐기는 한국공학교 대동제!', vmid: 'og:description' },
    { property: 'og:image', content: '/images/seo/title-images.png', vmid: 'og:image' },
    { property: 'og:url', content: 'https://festino.dev-tino.com', vmid: 'og:url' },
    { property: 'og:type', content: 'website', vmid: 'og:type' },
  ],
});
</script>

<template>
  <RouterView />
  <Transition name="slide">
    <Footer class="limit-width"></Footer>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(100%);
}
.limit-width {
  min-width: 375px;
  max-width: 500px;
}
</style>
