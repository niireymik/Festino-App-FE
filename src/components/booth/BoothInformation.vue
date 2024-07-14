<script setup>
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { booth } = storeToRefs(useGetBoothDataStore());
</script>

<template>
  <div class="w-full h-3 mb-7 bg-secondary-200"></div>
  <div class="dynamic-padding">
    <div class="relative w-full min-h-[390px] sm:h-[440px] bg-primary-300 border border-primary-900-light rounded-3xl">
      <div class="absolute right-[20px] top-[20px] flex justify-center items-center w-[72px] h-8 bg-white opacity-80 rounded-full text-base text-secondary-500">1 / 6</div>
    </div>
    <div class="pt-5 text-secondary-500 font-light leading-7 font-pretendard">{{ booth.boothIntro }}</div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-top: calc(10 / 430 * 100%) !important;
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: 1.5rem;
}
</style>