<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useBaseModal } from '@/stores/baseModal';
import { useOrderStore } from '@/stores/orders/orderStore';

const { closeModal } = useBaseModal();

const { boothId, tableNum } = storeToRefs(useOrderStore());

const router = useRouter();
const handleClickConfirmButton = () => {
  closeModal();
  router.push({ name: 'order', params: { boothId: boothId.value, tableNum: tableNum.value } });
};
</script>

<template>
  <div
    class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
    @click.stop=""
  >
    <div class="text-xl text-secondary-700 font-semibold">주문 확인 안내</div>
    <div class="text-xs text-secondary-500 text-center break-keep">
      주문이 완료되었습니다.<br />
      주문 확인서는 주문 조회에서 다시 확인 가능합니다.<br />
      입금 미확인시 주문이 취소될 수 있습니다.
    </div>

    <button
      class="w-full h-11 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
      @click="handleClickConfirmButton()"
    >
      닫기
    </button>
  </div>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(346 / 430 * 100%) !important;
}
</style>
