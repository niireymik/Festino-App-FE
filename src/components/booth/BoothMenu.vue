<script setup>
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore.js';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { convertBoothMenuTab } = useGetBoothDataStore();
const { dayBoothList, nightBoothList, foodBoothList, selectBoothMenu } = storeToRefs(useGetBoothDataStore());

const MENU_ITEMS = [
  { name: "전체" },
  { name: "운동장" },
  { name: "벙커" },
  { name: "푸드트럭" },
  { name: "편의시설" },
];

onMounted(() => {
  selectBoothMenu.value = 0;
});
</script>

<template>
  <div class="overflow-x-auto flex dynamic-booth-category-padding booth-menu">
    <div v-for="(item, index) in MENU_ITEMS" :key="index">
      <div
        @click="convertBoothMenuTab(index)"
        class="w-[88px] h-[44px] mr-2 rounded-full flex justify-center items-center cursor-pointer"
        :class="{
          'border border-primary-900 bg-primary-900 text-white': selectBoothMenu === index,
          'border border-primary-900-light text-primary-900-light': selectBoothMenu !== index,
        }"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-booth-category-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-bottom: 1.5rem;
  flex-shrink: 0;
}
.booth-menu::-webkit-scrollbar {
  display: none;
}
.booth-menu {
  scrollbar-width: none;
}
</style>
