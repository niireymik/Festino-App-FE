<script setup>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import { onMounted, ref } from 'vue';

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
</script>

<template>
  <RouterView />
  <div class="h-96 w-full bg-red-400"></div>
  <Transition name="slide">
    <Footer v-if="showFooter"></Footer>
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
</style>
