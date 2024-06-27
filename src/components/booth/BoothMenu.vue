<template>
  <div class="overflow-x-auto flex dynamic-padding pb-6">
    <div v-for="(item, index) in 6" :key="index">
      <div 
        @click="handleClickBoothBox(index)"
        class="w-[88px] h-[44px] mr-1 rounded-full flex justify-center items-center"
        :class="{
          'border border-primary-900 bg-primary-900 text-white': selectedIndex == index,
          'border border-primary-900-light text-primary-900-light': selectedIndex != index
          }">전체
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedIndex = ref(0);
const handleClickBoothBox = (index) => {
  if(selectedIndex.value == index) {
    selectedIndex.value = 0;
    return ;
  }
  selectedIndex.value = index;
};
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
}
</style>