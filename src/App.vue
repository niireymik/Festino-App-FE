<script setup>
import { RouterView } from 'vue-router';
import { onBeforeMount, onMounted } from 'vue';

import ModalView from './views/ModalView.vue';
import { baseApi } from './utils/api';

const initAuth = async () => {
  try {
    const response = await baseApi.post('/main/auth/init');
    if (!response.data.success) alert('Check your network connection');
  } catch (error) {
    console.error(error);
    alert('Check your network connection or try again later');
  }
};

onBeforeMount(async () => {
  await initAuth();
});

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
