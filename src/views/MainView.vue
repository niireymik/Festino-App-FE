<script setup>
import MainBanner from '@/components/main/MainBanner.vue';
import Header from '@/components/header/Header.vue';
import MainTab from '@/components/main/MainTab.vue';

import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
</script>

<template>
  <div class="flex flex-col">
    <Header />
    <MainBanner />
    <MainTab />
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
