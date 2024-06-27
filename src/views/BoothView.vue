<template>
  <div>
    <BoothBanner />
    <BoothMap />
    <BoothMenu />
    <BoothIntro />
  </div>
</template>

<script setup>
import BoothBanner from '@/components/booth/BoothBanner.vue';
import BoothMap from '@/components/booth/BoothMap.vue';
import BoothMenu from '@/components/booth/BoothMenu.vue';
import BoothIntro from '@/components/booth/BoothIntroduction.vue';

import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="css" scoped></style>
