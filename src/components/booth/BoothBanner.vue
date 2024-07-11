<template>
  <div class="relative">
    <div @click="handleClickBoothBackArrow()" 
          class="z-4 bg-back-arrow-white w-[18px] h-[18px] bg-no-repeat text-xl absolute top-[24px] left-[24px] bg-cover pointer-events-auto"></div>
    <div class="w-full h-[235px] xs:h-[255px] sm:h-[295px] bg-booth-banner bg-no-repeat bg-cover z-1">
      <div class="absolute w-auto h-auto top-14 xs:dynamic-top dynamic-padding sm:top-[72px]">
        <div
          class="px-3 py-1 mb-2 w-fit flex justify-center text-center rounded-3.5xl border border-white text-white text-3xs font-pretendard"
        >
          Festino
        </div>
        <div
          class="bg-gradient-to-b from-white from-50% to-primary-300 bg-clip-text text-transparent font-jalnan2 text-md xs:text-md sm:text-[19px]"
        >
          티노와 함께
        </div>
        <div
          class="bg-gradient-to-b from-white from-50% to-primary-300 bg-clip-text text-transparent font-jalnan2 text-2xl xs:text-2xl sm:text-3xl"
        >
          축제 부스 알아보기
        </div>
      </div>
    </div>
    <div class="w-full h-5 bg-white rounded-t-3xl absolute z-2 bottom-[-2px]"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickBoothBackArrow = () => {
  router.push({ path: '/' });
}
</script>

<style lang="css" scoped>
.dynamic-top {
  top: calc(52 / 230 * 100%) !important;
}
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>