<script setup>
import { useBaseModal } from '@/stores/baseModal';

const { closeModal } = useBaseModal();

// Get today, and if today is 2024 9/11 ~ 9/13, return true or return false
// and Change to KST
const getIsOpenDay = () => {
  const today = new Date();
  today.setHours(today.getHours() + 9);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  if (year === 2024 && month === 9 && date >= 11 && date <= 13) {
    return true;
  }
  return false;
};
</script>

<template>
  <div
    class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
    @click.stop=""
  >
    <div class="w-12 h-12 bg-error rounded-full grid place-items-center">
      <img src="/icons/orders/error.svg" />
    </div>
    <div class="w-full flex flex-col gap-3 items-center">
      <p class="text-secondary-700 text-xl font-bold">예약실패</p>
      <p v-if="getIsOpenDay()" class="text-secondary-500">이미 예약이 존재합니다.</p>
      <p v-if="!getIsOpenDay()" class="text-secondary-500">9월 11일 부터 예약이 가능합니다.</p>
    </div>
    <button class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl" @click="closeModal()">
      확인
    </button>
  </div>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(390 / 430 * 100%) !important;
}
</style>
