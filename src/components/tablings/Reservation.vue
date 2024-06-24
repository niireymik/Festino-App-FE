<template>
  <div class="w-full flex justify-center">
    <div class="dynamic-grid-container overflow-x-auto pt-16">
      <div class="grid w-auto grid-rows-2 gap-2 grid-flow-col">
        <div v-for="item in 20" class="bg-red-300 aspect-w-1 aspect-h-1 dynamic-item rounded-3xl"></div>
      </div>
    </div>
  </div>

  <div class="flex flex-row dynamic-padding justify-between gap-[10px] text-white font-bold mt-5 mb-[30px]">
    <button class="bg-secondary-100 h-[54px] rounded-xl w-full">자세히보기</button>
    <button class="bg-secondary-100 h-[54px] rounded-xl w-full">예약하기</button>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.dynamic-item {
  /* min-width: calc(100vw - (20 / 430 * 100vw)) !important; */
  width: calc(100vw * (190 / 430)) !important;
  max-width: calc(500px * (190 / 430)) !important;
}

.dynamic-grid-container {
  width: calc(390 / 430 * 100%) !important;
}

.dynamic-margin {
  margin-left: calc(20 / 430 * 100%) !important;
  margin-right: calc(20 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
