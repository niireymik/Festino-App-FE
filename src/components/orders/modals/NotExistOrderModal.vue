<script setup>
import ModalBackground from '@/components/modals/ModalBackground.vue';
import { useOrderModalStore } from '@/stores/orders/orderModalState';

const { closeNotExistOrderModal } = useOrderModalStore();
</script>

<template>
  <ModalBackground :closeModal="closeNotExistOrderModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
      @click.stop=""
    >
      <div class="w-12 h-12 bg-error rounded-full grid place-items-center">
        <img src="/icons/orders/error.svg" />
      </div>
      <div class="text-center break-keep">
        <p class="font-bold text-secondary-700 text-xl pb-3">주문자 확인 불가</p>
        <p class="text-secondary-500">
          입력하신 정보의 주문자를 확인할 수 없습니다.<br />이름과 전화번호를 다시 입력해주세요.
        </p>
      </div>
      <button
        class="w-[310px] h-12 rounded-3xl bg-primary-900 text-white font-semibold text-xl"
        @click="closeNotExistOrderModal()"
      >
        확인
      </button>
    </div>
  </ModalBackground>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(390 / 430 * 100%) !important;
  max-width: 375px !important;
}
</style>
