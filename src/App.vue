<script setup>
import { RouterView } from 'vue-router';
import { onMounted } from 'vue';

import ModalView from './views/ModalView.vue';
import { baseApi } from './utils/api';

onMounted(async () => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

try {
  const response = await baseApi.post('/main/auth/init');
  if (!response.data.success) alert('Check your network connection');
} catch (error) {
  console.error(error);
  alert('Check your network connection or try again later');
}
// useHead({
//   title: 'Festino!',
//   meta: [
//     { name: 'description', content: 'Festino! 모두함께 즐기는 한국공학교 대동제!', vmid: 'description' },
//     { name: 'keywords', content: 'Festino, 한국공학대학교, 한국공대, 축제', vmid: 'keywords' },
//     { property: 'og:title', content: 'Festino!', vmid: 'og:title' },
//     { property: 'og:description', content: 'Festino! 모두함께 즐기는 한국공학교 대동제!', vmid: 'og:description' },
//     { property: 'og:image', content: 'https://festino.dev-tino.com/images/seo/title-images.png', vmid: 'og:image' },
//     { property: 'og:url', content: 'https://festino.dev-tino.com', vmid: 'og:url' },
//     { property: 'og:type', content: 'website', vmid: 'og:type' },
//   ],
// });
</script>

<template>
  <RouterView />
  <ModalView />
</template>

<style scoped></style>
