<script setup>
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import { useBaseModal } from '@/stores/baseModal';

const { modalData } = storeToRefs(useModalStore());
const { closeModal } = useBaseModal();

const handleClickInstagram = () => {
  window.open(`https://www.instagram.com/${modalData.value.instagram}/`, '_blank');
};

const getImage = () => {
  return { backgroundImage: `url('${modalData.value.clubImage}')` };
};
</script>

<template>
  <div
    class="relative col-start-2 row-start-2 dynamic-width h-auto bg-white rounded-2xl flex flex-col items-center select-none"
    @click.stop
  >
    <div class="w-full flex justify-between px-5 pt-5">
      <div class="w-[20px] h-[20px]"></div>
      <div
        class="text-xs text-primary-700 rounded-full w-[80px] h-[22px] flex justify-center items-center border-2 border-primary font-medium"
      >
        교내 동아리
      </div>
      <div
        class="w-[20px] h-[20px] bg-x-button bg-center bg-no-repeat bg-[length:20px_20px] cursor-pointer"
        @click="closeModal()"
      ></div>
    </div>
    <div class="pb-[12px] pt-[24px] flex justify-center">
      <div
        :style="getImage()"
        class="border-2 border-primary bg-cover bg-center w-[160px] h-[160px] rounded-full"
      ></div>
    </div>
    <div class="text-secondary-700 font-medium pb-[8px]">{{ modalData.performer }}</div>
    <div
      class="text-secondary-500 text-xs flex flex-col items-center font-medium pb-[24px] leading-tight whitespace-pre-wrap"
    >
      <div>{{ modalData.clubDescription }}</div>
    </div>
    <div
      @click="handleClickInstagram()"
      class="text-xs text-secondary-500 rounded-full w-[122px] h-[26px] flex items-center justify-center bg-instagram-bg gap-[4px] mb-[24px]"
    >
      <div class="w-[16px] h-[16px] bg-instagram bg-center bg-no-repeat bg-[length:16px_16px]"></div>
      <div>@{{ modalData.instagram }}</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(388 / 430 * 100%) !important;
}
</style>
