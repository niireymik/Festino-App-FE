<script setup>
import { formatPrice } from '@/utils/utils';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useOrderStore } from '@/stores/orders/orderStore';
import { useBaseModal } from '@/stores/baseModal';
import MenuVue from '@/components/orders/Menus.vue';

import { useRoute, useRouter } from 'vue-router';

const { getMenuAll, setBoothInfo, isUUID } = useOrderStore();
const { menuInfo, totalPrice } = storeToRefs(useOrderStore());
const { openModal } = useBaseModal();

const router = useRouter();
const route = useRoute();

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (!isUUID(route.params.boothId) || isNaN(route.params.tableNum)) {
    return router.push({ name: 'error', params: { page: 'NotFound' } });
  }
  setBoothInfo(route.params.boothId, route.params.tableNum);
  getMenuAll(route.params.boothId);
});

const handleClickReserveButton = () => {
  if (totalPrice.value === 0) return;
  openModal('orderModal');
};

const getReserveButtomColor = () => {
  if (totalPrice.value === 0) return "bg-secondary-100"
  else return "bg-primary-700"
};
</script>

<template>
  <div class="flex flex-col h-full pt-[60px]">
    <div class="p-5 mb-5 overflow-scroll pb-[120px]">
      <div v-for="(info, index) in menuInfo" :key="index">
        <MenuVue :menu="info" v-if="!info.isSoldOut" />
      </div>
    </div>
    <div
      class="w-full max-w-[500px] shadow-xs rounded-t-3xl fixed bottom-0 bg-white flex justify-center px-[20px] py-[30px]"
    >
      <div
        class="flex items-center justify-center w-full h-[60px] rounded-full bg-primary-700 text-white font-extrabold cursor-pointer"
        :class="getReserveButtomColor()"
        @click="handleClickReserveButton()"
      >
        {{ formatPrice(totalPrice) }}원 • 주문하기
      </div>
    </div>
  </div>
</template>

<style></style>
