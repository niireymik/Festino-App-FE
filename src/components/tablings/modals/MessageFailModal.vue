<script setup>
import ModalBackground from '@/components/modals/ModalBackground.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { onMounted, ref } from 'vue';

const { closeMessageFailModal } = useTablingModalStore();
</script>

<template>
  <ModalBackground :closeModal="closeMessageFailModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
      @click.stop=""
    >
      <div class="w-12 h-12 bg-error rounded-full grid place-items-center">
        <img src="/icons/orders/error.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center text-center">
        <p class="text-secondary-700 text-xl font-bold">메세지 전송 실패</p>
        <p class="text-secondary-500">예약 조회를 통해<br />예약 여부를 확인해주세요.</p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="closeMessageFailModal()"
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
