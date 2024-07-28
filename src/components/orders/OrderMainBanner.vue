<script setup>
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { useRoute } from 'vue-router';

const { getAllNightBooth } = useReservationStore();
const { openNightBoothInfo } = storeToRefs(useReservationStore());
const route = useRoute();
const orderMajor = ref("");

onMounted(async () => {
  await getAllNightBooth();
  openNightBoothInfo.value.forEach(booth => {
    if (booth.boothId === route.params.boothId) {
      orderMajor.value = booth.adminName;
    }
  });
});
</script>

<template>
  <div class="w-full relative">
    <img src="/images/orders/tino-order-banner.svg" class="bg-top w-full" />
    <div class="absolute max-xs:top-10 top-14 max-xs:left-4 left-5 w-auto h-auto font-jalnan2">
      <p class="text-white">내 자리에서 주문부터 결제까지!</p>
      <p class="text-3xl bg-gradient-to-t from-white-opacity from-20% to-white text-transparent to-100% bg-clip-text">
        간편 주문 시스템
      </p>
      <p class="text-xl text-white pt-2">{{ orderMajor }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
