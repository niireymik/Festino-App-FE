<script setup>
import { useBaseModal } from '@/stores/baseModal';

const { closeModal } = useBaseModal();
</script>

<template>
  <div
    class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
    @click.stop=""
  >
    <div class="w-12 h-12 bg-error rounded-full grid place-items-center">
      <img src="/icons/orders/error.svg" />
    </div>
    <div class="w-full flex flex-col gap-3 items-center break-keep text-center">
      <p class="text-secondary-700 text-xl font-bold">예약자 확인 불가</p>
      <p class="text-secondary-500">
        입력하신 정보의 주문자를 확인할 수 없습니다.<br />이름과 전화번호를 다시 입력해주세요.
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
