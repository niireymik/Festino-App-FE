<template>
  <div class="flex px-4 xs:px-5 pt-5 justify-between">
    <div class="flex gap-2 px-[10px] xs:gap-4 xs:px-[12px] sm:gap-5 sm:px-[20px] py-[10px] rounded-full shadow-3xl text-xs items-center bg-primary-700 text-white font-bold">
      <div>DAY 1</div>
      <div>24.06.13</div>
    </div>
    <div class="flex gap-2 px-[10px] xs:gap-4 xs:px-[12px] sm:gap-5 sm:px-[20px] py-[10px] rounded-3xl shadow-3xl text-xs items-center text-primary-700-light font-normal border-primary border-1">
      <div>DAY 2</div>
      <div>24.06.14</div>
    </div>
    <div class="flex gap-2 px-[10px] xs:gap-4 xs:px-[12px] sm:gap-5 sm:px-[20px] py-[10px] rounded-3xl shadow-3xl text-xs items-center text-primary-700-light font-normal border-primary border-1">
      <div>DAY 3</div>
      <div>24.06.15</div>
    </div>
  </div>
  <div class="flex justify-between items-center px-5 pt-4 pb-3">
    <div class="text-xl font-semibold">타임테이블</div>
    <div class="flex items-center gap-0.5">
      <div class="text-secondary-300 text-xs">더보기</div>
      <div class="w-[12px] h-[12px] bg-more-arrow bg-center bg-no-repeat bg-[length:12px_12px]"></div>
    </div>
  </div>
  <div class="px-4">
    <ShowPreview class="shadow-3xl"/>
  </div>
  <div class="flex justify-between items-center px-5 pt-4 pb-3">
    <div class="text-xl font-semibold">공지사항</div>
    <div class="flex items-center gap-0.5">
      <div class="text-secondary-300 text-xs">더보기</div>
      <div class="w-[12px] h-[12px] bg-more-arrow bg-center bg-no-repeat bg-[length:12px_12px]"></div>
    </div>
  </div>
  <div class="px-5">
    <div class="py-3 px-4 rounded-2xl border-primary border-1 shadow-3xl flex justify-between items-center">
      <div class="flex">
        <div class="w-[57px] text-secondary-700 text-xs font-medium">Festino</div>
        <div class="text-secondary-500 text-xs font-normal">'Festino' 사용 공지사항</div>
      </div>
      <div class="text-secondary-700 text-2xs font-normal">1시간 전</div>
    </div>
  </div>
</template>

<script setup>
import ShowPreview from '../timetable/ShowPreview.vue';
</script>

<style lang="css" scoped>
</style>
