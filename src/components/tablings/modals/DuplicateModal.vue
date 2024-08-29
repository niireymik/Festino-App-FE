<script setup>
import { storeToRefs } from 'pinia';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { useBaseModal } from '@/stores/baseModal';

const { saveReservation } = useReservationStore();
const { closeModal } = useBaseModal();

const { prevReserveBoothName, reserveInfo } = storeToRefs(useReservationStore());

const handleClickReserveButton = () => {
  saveReservation(reserveInfo.value);
};
</script>

<template>
  <div
    class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
    @click.stop=""
  >
    <div class="w-12 h-12 bg-primary-900-light-16 rounded-full grid place-items-center">
      <img src="/icons/info.svg" />
    </div>
    <div class="w-full flex flex-col gap-3 items-center text-center">
      <p class="text-secondary-700 text-xl font-bold">예약 안내</p>
      <p class="text-secondary-500 break-keep">
        <span class="font-bold text-primary-900"> {{ prevReserveBoothName }} </span>에 이미 예약이 존재합니다.<br />
        지금 예약하면 이전 예약이 취소됩니다.<br />예약하시겠습니까?
      </p>
    </div>
    <div class="flex w-full gap-[10px] font-bold">
      <button
        class="w-full h-11 grow rounded-full border-2 border-primary-900-light-68 text-primary-900"
        @click="closeModal()"
      >
        취소
      </button>
      <button class="w-full h-11 grow rounded-full text-white bg-primary-900" @click="handleClickReserveButton()">
        확인
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(390 / 430 * 100%) !important;
}
</style>
