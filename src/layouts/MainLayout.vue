<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <RouterView />
  <Transition name="slide">
    <Footer class="limit-width"></Footer>
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
