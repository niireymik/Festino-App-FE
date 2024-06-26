<template>
  <div class="relative">
    <div class="w-full min-h-[260px] bg-booth-banner z-1">
      <i class="pi pi-arrow-left text-white text-xl absolute top-[20px] left-[20px] prev-btn-shadow"></i>
      <div class="absolute w-auto h-auto dynamic-top dynamic-padding">
        <div class="px-3 py-1 mb-2 w-fit flex justify-center text-center rounded-3.5xl border border-white text-white text-3xs font-pretendard">Festino</div>
        <div class="banner-title-shadow bg-gradient-to-b from-white from-50% to-primary-300 bg-clip-text text-transparent font-jalnan2 text-md">티노와 함께</div>
        <div class="banner-title-shadow bg-gradient-to-b from-white from-50% to-primary-300 bg-clip-text text-transparent font-jalnan2 text-3xl">축제 부스 알아보기</div>
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
  top: calc(52 / 230 * 100%) !important;
}
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
.banner-title-shadow {
  text-shadow: 0px 4px 5px rgba(68, 68, 68, 0.15);
}
.prev-btn-shadow {
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.5);
}
</style>