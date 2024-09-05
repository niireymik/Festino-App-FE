<script setup>
import { useBaseModal } from '@/stores/baseModal';
import { useOrderStore } from '@/stores/orders/orderStore';
import { prettyDate } from '@/utils/utils';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const { closeModal } = useBaseModal();
const { selectedOrder } = storeToRefs(useOrderStore());

onMounted(() => {
  console.log(selectedOrder.value);
});
</script>
<template>
  <div
    class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
    @click.stop=""
  >
    <div class="flex flex-col gap-7 w-full">
      <div class="font-semibold text-xl text-secondary-700 text-center">메모 확인</div>

      <div class="flex flex-col gap-1">
        <div class="flex gap-2">
          <img src="/icons/orders/clock.svg" class="w-5" />
          <div>{{ prettyDate(selectedOrder.createAt) }}</div>
        </div>

        <div class="text-sm text-secondary-700 w-full border p-4 min-h-24 rounded-2xl border-primary-900 h-fit">
          {{ selectedOrder.note }}
        </div>
      </div>
    </div>
    <button class="w-full h-12 rounded-3xl bg-primary-900 text-white font-semibold text-xl" @click="closeModal()">
      확인
    </button>
  </div>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(390 / 430 * 100%) !important;
  max-width: 375px !important;
}
</style>
