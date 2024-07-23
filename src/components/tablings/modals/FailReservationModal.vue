<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import ModalBackground from '@/components/modals/ModalBackground.vue';

const { closeFailReserveModal } = useTablingModalStore();
</script>

<template>
  <ModalBackground :closeModal="closeFailReserveModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
      @click.stop=""
    >
      <div class="w-12 h-12 bg-error rounded-full grid place-items-center">
        <img src="/icons/orders/error.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center">
        <p class="text-secondary-700 text-xl font-bold">예약실패</p>
        <p class="text-secondary-500">이미 예약이 존재합니다.</p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="closeFailReserveModal()"
      >
        확인
      </button>
    </div>
  </ModalBackground>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(390 / 430 * 100%) !important;
}
</style>
