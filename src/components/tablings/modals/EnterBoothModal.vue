<script setup>
import { storeToRefs } from 'pinia';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { useBaseModal } from '@/stores/baseModal';

const { closeModal } = useBaseModal();

const { reservationInfo } = storeToRefs(useReservationStore());
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
      <p class="text-secondary-700 text-xl font-bold">입장안내</p>
      <p class="text-secondary-500 break-keep">
        앞에 대기 팀이 없어요!<br />
        <span class="font-bold text-primary-900">
          {{ reservationInfo.adminName }}
        </span>
        부스 앞에서 대기해주세요.<br />
        곧 입장 가능합니다.
      </p>
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
