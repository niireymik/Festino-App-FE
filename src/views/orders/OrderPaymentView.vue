<script setup>
import MenuVue from '@/components/orders/Menus.vue';
import CouponVue from '@/components/orders/Coupon.vue';
import OrderModal from '@/components/orders/modals/OrderModal.vue';
import OrderCheckModal from '@/components/orders/modals/OrderCheckModal.vue';
import OrderCompleteModal from '@/components/orders/modals/OrderCompleteModal.vue';
import { onMounted, ref } from 'vue';
import { useOrderStore } from '@/stores/orderStore';
import { storeToRefs } from 'pinia';

const { getMenuAll, boothId } = useOrderStore();
const { menuList, totalPrice } = storeToRefs(useOrderStore());
onMounted(() => {
  getMenuAll(boothId);
});

const orderModalState = ref(false);
const checkModalState = ref(false);
const orderCompleteModalState = ref(false);

const handleOpenOrderModal = () => {
  if (totalPrice.value === 0) return;
  orderModalState.value = true;
};

const handleCloseOrderModal = () => {
  orderModalState.value = false;
};

const handleOpenCheckModal = () => {
  checkModalState.value = true;
};

const handleCloseCheckModal = () => {
  checkModalState.value = false;
};

const handleOpenCompleteModal = () => {
  orderCompleteModalState.value = true;
};
const handleCloseCompleteModal = () => {
  orderCompleteModalState.value = false;
};
</script>

<template>
  <OrderModal
    v-if="orderModalState"
    :handleCloseOrderModal="handleCloseOrderModal"
    :handleOpenCheckModal="handleOpenCheckModal"
  />

  <OrderCheckModal
    v-if="checkModalState"
    :handleCloseCheckModal="handleCloseCheckModal"
    :handleOpenCompleteModal="handleOpenCompleteModal"
  />
  <OrderCompleteModal v-if="orderCompleteModalState" :handleCloseCompleteModal="handleCloseCompleteModal" />
  <
  <div class="flex flex-col h-full pt-[60px] gap-16">
    <div class="p-5 mb-5">
      <div v-for="(menuInfo, index) in menuList" :key="index">
        <MenuVue :menuInfo="menuInfo" />
      </div>
    </div>
    <div>
      <div class="flex flex-col px-5 gap-[12px]">
        <div>쿠폰</div>
        <CouponVue />
      </div>
      <div class="flex justify-center px-[20px] py-[30px]">
        <div
          class="flex items-center justify-center w-full h-[60px] rounded-full bg-primary-700 text-white font-extrabold"
          @click="handleOpenOrderModal()"
        >
          {{ totalPrice }}원 • 주문하기
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
