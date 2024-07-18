<script setup>
import ClubModal from '@/components/timetable/ClubModal.vue';
import TalentModal from '@/components/timetable/TalentModal.vue';
import { RouterView } from 'vue-router';
import { useHead } from '@vueuse/head';
import { useModalStore } from '@/stores/modalStore.js';
import { storeToRefs } from 'pinia';
import { onMounted, watchEffect } from 'vue';

const { clubModalState, talentModalState } = storeToRefs(useModalStore());

const handleStopScroll = () => {
  if (clubModalState.value || talentModalState.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

watchEffect(() => {
  handleStopScroll();
});

onMounted(() => {
  window.scrollTo(0, 0);
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
  <ClubModal v-if="clubModalState" />
  <TalentModal  v-if="talentModalState"/>
</template>

<style scoped></style>
