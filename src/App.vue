<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';

import ModalView from './views/ModalView.vue';

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
</script>

<template>
  <RouterView />
  <ModalView />
</template>

<style scoped></style>
