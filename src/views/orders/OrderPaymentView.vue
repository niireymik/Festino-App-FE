<template>
  <div v-if="orderModalState">
    <OrderModal
      :handleCloseOrderModal="handleCloseOrderModal"
      :handleOpenCheckModal="handleOpenCheckModal" />
  </div>
  <div v-if="checkModalState">
    <OrderCheckModal :handleCloseCheckModal="handleCloseCheckModal" />
  </div>
  <div class="flex flex-col h-screen justify-between pt-[60px]">
    <div class="p-5">
      <MenuVue v-for="index in 2" :key="index" />
    </div>
    <div>
      <div class="flex flex-col px-5 gap-[12px]">
        <div>쿠폰</div>
        <CouponVue />
      </div>
      <div class="flex justify-center px-[20px] py-[30px]">
        <div class="flex items-center justify-center w-full h-[60px] rounded-full bg-primary-700 text-white font-extrabold" @click="handleOpenOrderModal()">35,000원 • 주문하기</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuVue from '@/components/orders/Menus.vue';
import CouponVue from '@/components/orders/Coupon.vue';
import OrderModal from '@/components/orders/OrderModal.vue';
import OrderCheckModal from '@/components/orders/OrderCheckModal.vue';
import { ref } from 'vue';

const orderModalState = ref(false);
const checkModalState = ref(false);

const handleOpenOrderModal = () => {
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
</script>

<style></style>