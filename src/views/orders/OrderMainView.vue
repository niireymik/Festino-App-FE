<template>
  <div class="flex flex-col">
    <OrderMainBanner />
    <div class="w-full rounded-t-3xl bg-white pt-[25px] grid autofill:grid-rows-3 place-items-center -translate-y-8">
      <div
        class="w-[138px] h-11 rounded-10xl bg-primary-900-lighter font-semibold text-primary-900 shrink-0 grid place-items-center"
      >
        테이블 번호 12
      </div>
      <div class="py-11 grid grid-cols-2 gap-x-[10px] mx-auto">
        <div @click="handleClickPayment()"
          class="h-[280px] w-[190px] rounded-3xl flex flex-col justify-center items-center border-4 border-primary-900-lighter gap-6"
        >
          <div class="font-jalnan2 text-2xl text-primary-900 pt-5">주문하기</div>
          <img src="/icons/orders/orderIcon.svg" class="bg-cover" />
        </div>
        <div
          class="h-[280px] w-[190px] rounded-3xl flex flex-col justify-center items-center border-4 border-primary-900-lighter gap-6"
        >
          <div class="font-jalnan2 text-2xl text-primary-900 pt-5">주문조회</div>
          <img src="/icons/orders/orderSearch.svg" />
        </div>
      </div>
      <div class="bg-tino-order-shortcut bg-cover min-w-full h-[178px]"></div>
    </div>
  </div>
</template>

<script setup>
import OrderMainBanner from '@/components/orders/OrderMainBanner.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickPayment = () => {
  router.push({ name: "order-payment" })
}
</script>

<style lang="scss" scoped></style>
