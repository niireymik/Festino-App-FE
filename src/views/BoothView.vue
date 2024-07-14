<script setup>
import BoothBanner from '@/components/booth/BoothBanner.vue';
import BoothMap from '@/components/booth/BoothMap.vue';
import BoothMenu from '@/components/booth/BoothMenu.vue';
import BoothIntro from '@/components/booth/BoothIntroduction.vue';

import { onMounted } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';

const store = useGetBoothDataStore();
const { getAllBoothData } = store;

onMounted(() => {
  getAllBoothData();
  window.scrollTo(0, 0);
});
</script>

<template>
  <div>
    <BoothBanner />
    <BoothMap />
    <BoothMenu />
    <BoothIntro />
  </div>
</template>

<style lang="css" scoped></style>
