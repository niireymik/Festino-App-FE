<template>
  <div class="flex flex-col h-screen justify-between pt-[60px]">
    <div class="p-5">
      <MenuVue v-for="index in 2" :key="index" />
    </div>
    <div>
      <div class="flex flex-col px-5 gap-[12px]">
        <div>쿠폰</div>
        <CouponVue />
      </div>
      <OrderButtonVue />
    </div>
  </div>
</template>

<script setup>
import MenuVue from '@/components/orders/Menus.vue';
import CouponVue from '@/components/orders/Coupon.vue';
import OrderButtonVue from '@/components/orders/OrderButton.vue';
</script>

<style></style>