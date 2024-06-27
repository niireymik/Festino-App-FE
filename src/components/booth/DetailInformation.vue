<template>
  <div class="dynamic-padding">
    <div class="w-full h-auto bg-primary-100 rounded-2xl">
      <div class="flex items-center px-4 pt-4 pb-1">
        <div class="w-fit h-fit px-4 py-1 rounded-full bg-secondary-50 text-secondary-500 font-pretendard font-semibold text-xs">위치</div>
        <div class="pl-4 text-secondary-500 font-pretendard font-light text-xs">운동장 구령대 앞</div>
      </div>
      <div class="flex items-center px-4 pb-4 pt-1">
        <div class="w-fit h-fit px-4 py-1 rounded-full bg-secondary-50 text-secondary-500 font-pretendard font-semibold text-xs">운영시간</div>
        <div class="pl-4 text-secondary-500 font-pretendard font-light text-xs">15:00 ~ 24:00</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: 2rem;
}
</style>