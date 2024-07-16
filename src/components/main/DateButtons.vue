<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(["day"]);
const selectedIndex = ref(0);

const handleClickDateButton = async (index) => {
  if (selectedIndex.value == index) {
    return;
  }
  selectedIndex.value = index;
  emit("day", index);
};
</script>

<template>
  <div class="flex px-4 xs:px-5 justify-between z-50 select-none">
    <div v-for="date in 3" :key="date">
      <div 
        class="flex justify-center gap-2 w-[105px] xs:gap-4 xs:w-[122px] sm:gap-5 sm:w-[140px] py-[10px] rounded-full shadow-4xl text-xs items-center cursor-pointer"
        :class="selectedIndex == date ? 'bg-primary-700 text-white font-bold' : 'text-primary-700-light font-normal border-primary border-1'"
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
