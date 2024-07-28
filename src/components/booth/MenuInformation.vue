<script setup>
import MenuOption from '@/components/booth/MenuOption.vue';
import MenuStatus from '@/components/booth/ShowState.vue';

import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { booth } = storeToRefs(useGetBoothDataStore());
const defaultOption = 0;
</script>

<template>
  <div v-for="(menu, index) in booth.menuList" :key="index" class="dynamic-padding">
    <div 
      class="w-full h-[120px] p-[13px] bg-white border border-primary-900-light rounded-3xl shadow-4xl flex mb-[10px]"
      :class="menu.isSoldOut ? 'bg-gray-200 border-gray-300' : ''"
    >
      <img 
        :src="`${menu.menuImage}`"
        draggable="false"
        class="min-w-[94px] max-w-[94px] h-full rounded-3xl border bg-booth-default-image bg-cover"
        :class="menu.isSoldOut ? 'brightness-[0.95]' : ''"
      />
      <div class="w-[359px] h-full py-1">
        <div class="pl-[12px] h-full flex flex-col justify-between">
          <div class="pb-2">
            <div class="flex justify-between pb-1">
              <div class="text-[14px] font-semibold text-secondary-700">{{ menu.menuName }}</div>
              <div class="flex">
                <MenuOption class="mr-1">{{ menu.menuType === defaultOption ? '대표 메뉴' : '서브 메뉴' }}</MenuOption>
                <MenuStatus class="mr-0" :isState="!menu.isSoldOut">{{ !menu.isSoldOut ? '판매중' : '준비중' }}</MenuStatus>
              </div>
            </div>
            <div class="w-full text-[10px] text-seconday-500">
              {{ menu.menuDescription }}
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="text-secondary-700 text-[14px] font-semibold">{{ menu.menuPrice }}</div>
              <div class="text-secondary-500 text-[14px]">원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>