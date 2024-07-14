<script setup>
import { ref } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore.js';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const store = useGetBoothDataStore();
const { dayBooths, nightBooths, foodBooths, selectBoothMenu } = storeToRefs(store);

const MENU_ITEMS = [
  { name: "전체" },
  { name: "운동장" },
  { name: "벙커" },
  { name: "푸드트럭" },
  { name: "편의시설" },
];
</script>

<template>
  <div class="overflow-x-auto flex dynamic-padding pb-6 booth-menu">
    <div v-for="(item, index) in MENU_ITEMS" :key="index">
      <div
        @click="store.handleClickBoothMenu(index)"
        class="w-[88px] h-[44px] mr-2 rounded-full flex justify-center items-center"
        :class="{
          'border border-primary-900 bg-primary-900 text-white': selectBoothMenu == index,
          'border border-primary-900-light text-primary-900-light': selectBoothMenu != index,
        }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
}
.booth-menu::-webkit-scrollbar {
  display: none;
}
.booth-menu {
  scrollbar-width: none;
}
</style>
