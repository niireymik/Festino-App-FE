<script setup>
import { useModalStore } from '@/stores/modalStore.js';
import { storeToRefs } from 'pinia';

const { modalData } = storeToRefs(useModalStore());
const { handleCloseModal } = useModalStore();
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center" @click="handleCloseModal()">
    <div class="w-[388px] min-w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center select-none" @click.stop>
      <div class="w-full flex justify-between px-5 pt-5">
        <div class="w-[20px] h-[20px]"></div>
        <div class="text-xs text-primary-700 rounded-full w-[80px] h-[22px] flex justify-center items-center border-2 border-primary font-medium">교내 동아리</div>
        <div class="w-[20px] h-[20px] bg-x-button bg-center bg-no-repeat bg-[length:20px_20px] cursor-pointer" @click="handleCloseModal()"></div>
      </div>
      <div class="pb-[12px] pt-[24px] flex justify-center">
        <div class="w-[160px] h-[160px] bg-white rounded-full bg-tino-cheer-up bg-center bg-no-repeat bg-[length:98px_99px] border-primary-700-default border-2"></div>
      </div>
      <div class="text-secondary-700 font-medium pb-[8px]">{{ modalData.performer }}</div>
      <div class="text-secondary-500 text-xs flex flex-col items-center font-medium pb-[24px] leading-tight">
        <div>{{ modalData.clubDescription }}</div>
      </div>
      <div class="text-xs text-secondary-500 rounded-full w-[122px] h-[26px] flex items-center justify-center bg-instagram-bg gap-[4px] mb-[24px]">
        <div class="w-[16px] h-[16px] bg-instagram bg-center bg-no-repeat bg-[length:16px_16px]"></div>
        <div>{{ modalData.instagram }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
