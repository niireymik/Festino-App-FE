<script setup>
import ModalBackground from '@/components/modals/ModalBackground.vue';
import { useOrderModalStore } from '@/stores/orders/orderModalState';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const { closeOrderCompleteModal } = useOrderModalStore();
const { boothId, tableNum } = storeToRefs(useOrderStore());

const router = useRouter();
const handleClickConfirmButton = () => {
  closeOrderCompleteModal();
  router.push({ name: 'order', params: { boothId: boothId.value, tableNum: tableNum.value } });
};
</script>

<template>
  <ModalBackground :closeModal="closeOrderCompleteModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
      @click.stop=""
    >
      <div class="w-12 h-12 rounded-full bg-primary-900-light-16 grid place-items-center">
        <img src="/icons/info.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center text-center">
        <p class="text-secondary-700 text-xl font-bold">입금완료</p>
        <p class="text-secondary-500">입금이 완료되었습니다.<br />학과에서 주문을 확인중입니다.</p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="handleClickConfirmButton()"
      >
        확인
      </button>
    </div>
  </ModalBackground>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(346 / 430 * 100%) !important;
}
</style>
