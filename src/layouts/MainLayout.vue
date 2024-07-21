<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';

const viewport = ref(window.innerHeight);
const viewportChanged = ref(false);

const onResize = () => {
  const previousHeight = viewport.value;
  viewport.value = window.innerHeight;
  if (previousHeight - viewport.value > 30) {
    viewportChanged.value = true;
  }
  if (viewport.value - previousHeight > 30) {
    viewportChanged.value = false;
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});
</script>

<template>
  <RouterView />
  <Transition name="slide">
    <Footer class="limit-width" v-if="!viewportChanged"></Footer>
  </Transition>
</template>

<style lang="css" scoped>
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
