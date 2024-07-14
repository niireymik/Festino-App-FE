<script setup>
import 'primeicons/primeicons.css';
import { useRouter } from 'vue-router';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { booth } = storeToRefs(useGetBoothDataStore());
const router = useRouter();

const handleClickBoothDetailBackArrow = () => {
  router.go(-1);
}
</script>

<template>
  <div class="relative">
    <div class="w-full h-[220px] xs:h-[255px] sm:h-[295px] bg-booth-detail-banner bg-cover">
      <div 
        @click="handleClickBoothDetailBackArrow()" 
        class="z-4 bg-back-arrow-white w-[18px] h-[18px] bg-no-repeat text-xl absolute top-[24px] left-[24px] bg-cover pointer-events-auto"
      ></div>
      <div class="absolute w-auto h-auto dynamic-top dynamic-padding">
        <div class="px-3 py-1 mb-2 w-fit flex justify-center text-center rounded-3.5xl border border-white text-white text-3xs font-pretendard">부스 상세보기</div>
        <div
          class="font-jalnan2 text-3xl bg-gradient-to-t from-white-opacity from-20% to-white text-transparent to-100% bg-clip-text"
        >
          {{ booth.adminName }}
        </div>
      </div>
    </div>
    <div class="w-full h-5 bg-white rounded-t-3xl absolute z-2 bottom-[-2px]"></div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-top {
  top: calc(130 / 230 * 100%) !important;
}
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>