<script setup>
import MainBanner from '@/components/main/MainBanner.vue';
import Header from '@/components/header/Header.vue';
import MainTab from '@/components/main/MainTab.vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';

import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const { selectBoothMenu } = storeToRefs(useGetBoothDataStore());

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  selectBoothMenu.value = 0;
});
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <MainBanner />
    <MainTab />
  </div>
</template>

<style lang="css" scoped></style>
