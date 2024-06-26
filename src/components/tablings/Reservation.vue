<script setup>
import { ref } from 'vue';
import ReservationModalView from './ReservationModalView.vue';

const selectedIndex = ref(-1);
const hanldeClickMajorBox = (index) => {
  if (selectedIndex.value == index) {
    selectedIndex.value = -1;
    return;
  }
  selectedIndex.value = index;
};

const reserveModalState = ref(false);
const handleClickReserveButton = () => {
  if (selectedIndex.value == -1) return;
  reserveModalState.value = true;
};
const handleCloseReserveModal = () => {
  reserveModalState.value = false;
};
</script>
<template>
  <div v-if="reserveModalState">
    <ReservationModalView :handleCloseReserveModal="handleCloseReserveModal" />
  </div>
  <div class="w-full flex justify-center">
    <div class="dynamic-grid-container overflow-x-auto pt-16">
      <div class="grid w-auto grid-rows-2 gap-2 grid-flow-col">
        <div
          v-for="(item, index) in 20"
          class="bg-primary-300 aspect-w-1 aspect-h-1 dynamic-item rounded-3xl"
          @click="hanldeClickMajorBox(index)"
          :class="{
            'outline -outline-offset-4 outline-4 outline-primary-900': selectedIndex == index,
            'bg-secondary-100 opacity-50 rounded-3xl': selectedIndex != index && selectedIndex != -1,
          }"
        >
          <div class="flex flex-col justify-end text-white p-3">
            <h2 class="font-bold mb-1">컴퓨터공학</h2>
            <h2 class="text-2xs">대기중인 팀 : 9</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row dynamic-padding justify-between gap-[10px] text-white font-bold mt-5 mb-[30px]">
    <button class="bg-secondary-100 h-[54px] rounded-xl w-full">자세히보기</button>
    <button
      class="h-[54px] rounded-xl w-full"
      :class="selectedIndex != -1 ? 'bg-primary-900' : 'bg-secondary-100'"
      @click="handleClickReserveButton()"
    >
      예약하기
    </button>
  </div>
</template>

<style lang="css" scoped>
.dynamic-item {
  width: calc(100vw * (190 / 430)) !important;
  max-width: calc(500px * (190 / 430)) !important;
}

.dynamic-grid-container {
  width: calc(390 / 430 * 100%) !important;
}

.dynamic-margin {
  margin-left: calc(20 / 430 * 100%) !important;
  margin-right: calc(20 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
