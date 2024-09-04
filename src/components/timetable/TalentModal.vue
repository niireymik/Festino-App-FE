<script setup>
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import { useBaseModal } from '@/stores/baseModal';

const { modalData } = storeToRefs(useModalStore());
const { closeModal } = useBaseModal();

const handleClickMusic = (index) => {
  window.open(`${modalData.value.musicList[index].youtubeLink}`, '_blank');
};

const getImage = () => {
  if (modalData.value?.clubImage === null || modalData.value?.clubImage === undefined || !modalData.value?.clubImage) {
    return { backgroundImage: 'url("/images/booth/booth-default-image.png")' };
  }
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
        class="text-xs text-primary-700 rounded-full w-[56px] h-[22px] flex justify-center items-center border-2 border-primary font-medium"
      >
        연예인
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
    <div class="text-secondary-700 font-medium pb-[12px]">{{ modalData.performer }}</div>
    <div
      class="w-[95px] h-[22px] text-primary-700 text-xs flex items-center rounded-full bg-instagram-bg justify-center"
    >
      페스티노 추천곡!
    </div>
    <div class="px-[32px] pb-[28px] pt-4 w-full flex flex-col gap-4">
      <div
        @click="handleClickMusic(index)"
        v-for="(music, index) in modalData.musicList"
        :key="index"
        class="shadow-3xl text-xs text-primary-700 w-full h-[32px] rounded-full flex items-center justify-between border-2 border-primary"
      >
        <div class="flex gap-[12px] items-center">
          <div class="w-[30px] h-[30px] bg-tino-cd bg-center bg-no-repeat bg-[length:30px_30px]"></div>
          <div>{{ modalData.performer }} - {{ music.title }}</div>
        </div>
        <div class="pr-[12px]">
          <div class="w-[12px] h-[12px] bg-link-icon bg-center bg-no-repeat bg-[length:11px_13px]"></div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(388 / 430 * 100%) !important;
}
</style>
