<script setup>
import MenuVue from '@/components/orders/Menus.vue';
import CouponVue from '@/components/orders/Coupon.vue';
import OrderModal from '@/components/orders/modals/OrderModal.vue';
import OrderCheckModal from '@/components/orders/modals/OrderCheckModal.vue';
import OrderCompleteModal from '@/components/orders/modals/OrderCompleteModal.vue';
import { onMounted, ref } from 'vue';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { useOrderModalStore } from '@/stores/orders/orderModalState';

const { getMenuAll, boothId } = useOrderStore();
const { menuList, totalPrice } = storeToRefs(useOrderStore());
onMounted(() => {
  getMenuAll(boothId);
});

const { orderModalState, orderCheckModalState, orderCompleteModalState } = storeToRefs(useOrderModalStore());
const { openOrderModal } = useOrderModalStore();

const handleClickReserveButton = () => {
  if (totalPrice.value === 0) return;
  openOrderModal();
};
</script>

<template>
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
          @click="handleClickReserveButton()"
        >
          {{ totalPrice }}원 • 주문하기
        </div>
      </div>
    </div>
  </div>
  <OrderModal v-if="orderModalState" />
  <OrderCheckModal v-if="orderCheckModalState" />
  <OrderCompleteModal v-if="orderCompleteModalState" />
</template>

<style></style>
