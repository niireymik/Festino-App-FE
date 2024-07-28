<script setup>
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { booth, boothType } = storeToRefs(useGetBoothDataStore());
</script>

<template>
  <div class="flex items-center dynamic-booth-tab-padding">
    <div class="text-secondary-300 text-sm font-light">{{ boothType }}</div>
    <i class="pi pi-chevron-right text-secondary-300 text-2xs px-2"></i>
    <div class="text-secondary-300 text-sm font-light">{{ booth?.adminName ? `${booth.adminName} 부스` : booth.boothName }}</div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-booth-tab-padding {
  padding-top: 1rem;
  padding-left: calc(20 / 430 * 100%) !important;
}
</style>