<script setup>
import Home from './footers/HomeIcon.vue';
import TimeTableIcon from './footers/TimeTableIcon.vue';
import BoothIcon from './footers/BoothIcon.vue';
import TablingIcon from './footers/TablingIcon.vue';
import { ref } from 'vue';

const ICON_URL_MAP = [
  { name: '홈', component: Home, width: '28px' },
  { name: '타임테이블', component: TimeTableIcon, url: '/icons/acute.svg', width: '44px' },
  { name: '부스', component: BoothIcon, url: '/icons/distance.svg', width: '28px' },
  { name: '테이블링', component: TablingIcon, url: '/icons/hourglass_bottom.svg', width: '35px' },
];

const selectedFooterIndex = ref(-1);
const handleClickFooter = (index) => {
  selectedFooterIndex.value = index;
  console.log(selectedFooterIndex.value);
};
</script>
<template>
  <div class="w-full h-[60px] bg-white flex items-center justify-around fixed bottom-0">
    <div
      class="flex flex-col items-center justify-center"
      v-for="(item, index) in ICON_URL_MAP"
      :class="`w-[${item.width}]`"
      @click="handleClickFooter(index)"
    >
      <component :is="item.component" :isActive="index === selectedFooterIndex" />
      <div class="text-2xs" :class="index === selectedFooterIndex ? 'text-primary-900' : 'text-secondary-100'">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
