<template>
  <div class="relative">
    <div class="w-full h-[250px] bg-booth-detail-banner bg-cover">
      <i class="pi pi-arrow-left text-white text-xl absolute top-[20px] left-[20px]"></i>
      <div class="absolute w-auto h-auto dynamic-top dynamic-padding">
        <div class="px-3 py-1 mb-2 w-fit flex justify-center text-center rounded-3.5xl border border-white text-white text-3xs font-pretendard">부스 상세보기</div>
        <div
          class="font-jalnan2 text-3xl bg-gradient-to-t from-white-opacity from-20% to-white text-transparent to-100% bg-clip-text"
        >
          디자인공학부
        </div>
      </div>
    </div>
    <div class="w-full h-5 bg-white rounded-t-3xl absolute z-2 bottom-[-2px]"></div>
  </div>
</template>

<script setup>
import 'primeicons/primeicons.css';
</script>

<style lang="css" scoped>
.dynamic-top {
  top: calc(130 / 230 * 100%) !important;
}
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>