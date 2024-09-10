<script setup>
import { onMounted, ref } from 'vue';
import { useOrderStore } from '@/stores/orders/orderStore';
import { useRoute } from 'vue-router';

const { getBoothDetail } = useOrderStore();

const route = useRoute();
const orderMajor = ref('');

onMounted(async () => {
  const boothInfo = await getBoothDetail(route.params.boothId);
  orderMajor.value = boothInfo.adminName;
});
</script>

<template>
  <div class="w-full relative">
    <img src="/images/orders/tino-order-banner.svg" class="bg-top w-full" />
    <div class="absolute max-xs:top-10 top-14 max-xs:left-4 left-5 w-auto h-auto">
      <p class="text-white font-jalnan2">내 자리에서 주문부터 결제까지!</p>
      <p
        class="text-3xl bg-gradient-to-t from-white-opacity from-20% to-white text-transparent to-100% bg-clip-text font-jalnan2"
      >
        간편 주문 시스템
      </p>
    </div>
    <div class="absolute max-xs:top-28 top-32 max-xs:left-4 left-5 w-auto h-auto">
      <div class="text-primary-700 bg-white font-semibold px-3 py-0.5 rounded-full">{{ orderMajor }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
