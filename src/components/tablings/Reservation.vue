<template>
  <div class="flex flex-col dynamic-padding pt-16 gap-2.5">
    <div class="flex flex-row gap-2.5">
      <div v-for="item in 2" class="bg-red-50 dynamic-item rounded-3xl"></div>
    </div>
    <div class="flex flex-row gap-2.5">
      <div v-for="item in 2" class="bg-red-50 dynamic-item rounded-3xl"></div>
    </div>
  </div>
  <div class="flex flex-row dynamic-padding justify-between gap-5 text-white font-bold mt-5">
    <button class="bg-secondary-100 h-[54px] rounded-xl w-full">자세히보기</button>
    <button class="bg-secondary-100 h-[54px] rounded-xl w-full">예약하기</button>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.dynamic-item {
  min-width: 100px;
  min-height: 100px;
  width: calc(190 / 390 * 100%) !important;
  height: calc(190 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
