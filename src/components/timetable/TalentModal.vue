<script setup>
import { useModalStore } from '@/stores/modalStore.js';
import { storeToRefs } from 'pinia';

const { modalData } = storeToRefs(useModalStore());
const { handleCloseModal } = useModalStore();

const handleClickMusic = (index) => {
  window.open(`${modalData.value.musicList[index].youtubeLink}`, "_blank");
};

const getImage = () => {
  return { backgroundImage: `url('${modalData.value.talentImage}')` }
};
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center p-5" @click="handleCloseModal()">
    <div class="w-[388px] min-w-[320px] h-auto bg-white rounded-2xl flex flex-col items-center select-none" @click.stop>
      <div class="w-full flex justify-between px-5 pt-5">
        <div class="w-[20px] h-[20px]"></div>
        <div class="text-xs text-primary-700 rounded-full w-[56px] h-[22px] flex justify-center items-center border-2 border-primary font-medium">연예인</div>
        <div class="w-[20px] h-[20px] bg-x-button bg-center bg-no-repeat bg-[length:20px_20px] cursor-pointer" @click="handleCloseModal()"></div>
      </div>
      <div class="pb-[12px] pt-[24px] flex justify-center">
        <div :style="getImage()" class="border-2 border-primary bg-cover bg-center w-[160px] h-[160px] rounded-full"></div>
      </div>
      <div class="text-secondary-700 font-medium pb-[12px]">{{ modalData.performer }}</div>
      <div class="w-[95px] h-[22px] text-primary-700 text-xs flex items-center rounded-full bg-instagram-bg justify-center">페스티노 추천곡!</div>
      <div class="px-[32px] pb-[28px] pt-[8px] w-full flex flex-col gap-1">
        <div @click="handleClickMusic(index)" v-for="(music, index) in modalData.musicList" :key="index" class="shadow-3xl text-xs text-primary-700 w-full h-[32px] rounded-full flex items-center justify-between border-2 border-primary">
          <div class="flex gap-[12px] items-center">
            <div class="w-[30px] h-[30px] bg-tino-cd bg-center bg-no-repeat bg-[length:30px_30px]"></div>
            <div>{{ modalData.performer }} - {{ music.title }}</div>
          </div>
          <div class="pr-[12px]">
            <div class="w-[12px] h-[12px] bg-link-icon bg-center bg-no-repeat bg-[length:11px_13px]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
