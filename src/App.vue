<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import { onMounted, ref } from 'vue';
import { useHead } from '@vueuse/head';

const ORIGINAL_HEIGHT = window.innerHeight;
const MIN_HEIGHT = 30;
const MAX_HEIGHT = 200;

const showFooter = ref(true);
const lastScroll = ref(0);
const isBottom = ref(false);
const toggleScrollListener = ref(true);

const handleScroll = () => {
  if (!toggleScrollListener.value) return;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  const scollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  if (scrollTop < MIN_HEIGHT) {
    showFooter.value = true;
  }

  if (scrollTop < lastScroll.value) {
    showFooter.value = true;
  } else {
    showFooter.value = false;
  }

  if (scrollTop + clientHeight - scollHeight > -MIN_HEIGHT) {
    showFooter.value = true;
    isBottom.value = true;
  } else {
    isBottom.value = false;
  }

  lastScroll.value = scrollTop;
};

const handleResize = () => {
  const currentHeight = window.innerHeight;

  if (ORIGINAL_HEIGHT - currentHeight > MAX_HEIGHT) {
    showFooter.value = false;
    toggleScrollListener.value = false;
  } else {
    showFooter.value = true;
    toggleScrollListener.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
});

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
    <Footer v-if="showFooter" class="limit-width"></Footer>
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
