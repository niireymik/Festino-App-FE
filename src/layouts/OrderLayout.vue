<script setup>
import { RouterView, useRouter } from 'vue-router';
import Header from '@/components/orders/Header.vue';
import { ref, watchEffect } from 'vue';

const router = useRouter();
const isMain = ref(false);
const title = ref('');

watchEffect(() => {
  const currentRoute = router.currentRoute.value;
  const currentRouteName = currentRoute.name;
  isMain.value = currentRouteName === 'order';
  if (currentRouteName === 'order-search') {
    title.value = '주문 조회';
  }
  if (currentRouteName === 'order-payment') {
    title.value = '주문 하기';
  }
});
</script>

<template>
  <Header v-if="!isMain" :title="title" />
  <RouterView />
</template>

<style lang="scss" scoped></style>
