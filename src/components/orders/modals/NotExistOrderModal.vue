<script setup>
import { useOrderModalStore } from '@/stores/orders/orderModalState';

const { closeNotExistOrderModal } = useOrderModalStore();
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div
      class="dynamic-modal-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
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
        @click="closeNotExistOrderModal"
      >
        확인
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-modal-width {
  width: calc(390 / 430 * 100%) !important;
  max-width: 375px !important;
}
</style>
