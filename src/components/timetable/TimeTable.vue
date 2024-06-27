<template>
  <div class="flex flex-col items-center border-2 border-primary rounded-3xl py-5 h-[485px]">
    <div class="px-5 pb-5">
      <div class="w-[300px] xs:w-[350px] sm:w-[390px] py-2 text-white bg-primary-700 rounded-full flex justify-center">
        DAY {{ day + 1 }} 공연 타임테이블
      </div>
    </div>
    <div class="flex overflow-y-auto h-full w-full px-5">
      <div class="flex flex-col items-center text-secondary-700 gap-[65px] pt-1">
        <div v-for="item in 6" :key="item">17:00 ~ 17:30</div>
      </div>
      <div class="pt-3 pl-3 xs:pl-4 sm:pl-7 pr-4 xs:pr-4 sm:pr-9">
        <div class="border-2 border-primary-700 h-[450px] w-0 border-dashed flex flex-col items-center gap-[77.6px]">
          <div class="w-[16px] h-[16px] mt-[-5px] rounded-full bg-primary-700-light flex items-center justify-center" v-for="item in 5" :key="item">
            <div class="w-[8px] h-[8px] rounded-full bg-primary-700"></div>
          </div>
        </div>
        <div class="w-[16px] h-[16px] mt-[-10px] ml-[-7px] rounded-full bg-primary-700-light flex items-center justify-center">
          <div class="w-[8px] h-[8px] rounded-full bg-primary-700"></div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-6">
        <div class="flex justify-center py-5 rounded-3xl border-primary border-2 w-[170px] xs:w-[210px] sm:w-[230px] text-primary-700" v-for="item in 6" :key="item">교내 동아리 '~~'</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(["day"]);
</script>

<style lang="css" scoped>
</style>
