<script setup>
import { RouterView } from 'vue-router';
import { useHead } from '@vueuse/head';
import { useModalStore } from '@/stores/modalStore.js';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

import ModalView from './views/ModalView.vue';

const { clubModalState, talentModalState } = storeToRefs(useModalStore());

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

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
