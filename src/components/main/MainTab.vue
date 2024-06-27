<template>
  <DateButtons />
  <MoreButton />
  <div class="px-4">
    <ShowPreview class="shadow-4xl"/>
  </div>
  <MoreButton />
  <div class="px-5">
    <div class="py-3 px-4 rounded-2xl border-primary border-1 shadow-4xl flex justify-between items-center">
      <div class="flex">
        <div class="w-[57px] text-secondary-700 text-xs font-medium">Festino</div>
        <div class="text-secondary-500 text-xs font-normal">'Festino' 사용 공지사항</div>
      </div>
      <div class="text-secondary-700 text-2xs font-normal">1시간 전</div>
    </div>
  </div>
  <div class="px-5 pt-5 pb-20">
    <SlideBanner />
  </div>
</template>
  
<script setup>
import DateButtons from './DateButtons.vue'
import ShowPreview from '../timetable/ShowPreview.vue';
import SlideBanner from './SlideBanner.vue';
import MoreButton from './MoreButton.vue';
</script>
  
<style lang="css" scoped>
</style>