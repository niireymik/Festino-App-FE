<template>
  <div class="flex px-4 xs:px-5 justify-between z-50 select-none">
    <div v-for="(dateItem, index) in date" :key="index">
      <div 
        class="flex justify-center gap-2 w-[105px] xs:gap-4 xs:w-[122px] sm:gap-5 sm:w-[140px] py-[10px] rounded-full shadow-4xl text-xs items-center cursor-pointer"
        :class="selectedIndex == index ? 'bg-primary-700 text-white font-bold' : 'text-primary-700-light font-normal border-primary border-1'"
        @click="handleClickDateButton(index)"
      >
        <div>DAY {{ index + 1 }}</div>
        <div>{{ dateItem }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(["day"]);
const date = ref(["24.06.13", "24.06.14", "24.06.15"]);
const selectedIndex = ref(0);

const handleClickDateButton = async (index) => {
  if (selectedIndex.value == index) {
    return;
  }
  selectedIndex.value = index;
  emit("day", index);
};
</script>

<style lang="css" scoped>
</style>
