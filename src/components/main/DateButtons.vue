<script setup>
import { onMounted } from 'vue';
import { useTimetableStore } from '@/stores/timetableStore';
import { storeToRefs } from 'pinia';

const { changeDate } = useTimetableStore();
const { day } = storeToRefs(useTimetableStore());

const handleClickDateButton = async (index) => {
  if (day.value === index) {
    return;
  }
  changeDate(index);
};

onMounted(() => {
  changeDate(1);
});
</script>

<template>
  <div class="flex px-4 xs:px-5 justify-between z-50 select-none">
    <div v-for="date in 3" :key="date">
      <div 
        class="flex justify-center gap-2 w-[105px] xs:gap-4 xs:w-[122px] sm:gap-5 sm:w-[140px] py-[10px] rounded-full shadow-4xl text-xs items-center cursor-pointer"
        :class="day == date ? 'bg-primary-700 text-white font-bold' : 'text-primary-700-light font-normal border-primary border-1'"
        @click="handleClickDateButton(date)"
      >
        <div>DAY {{ date }}</div>
        <div>24.06.{{ date + 12 }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
