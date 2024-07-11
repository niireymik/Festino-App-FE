<script setup>
import { RouterView, useRouter } from 'vue-router';
import Header from '@/components/orders/Header.vue';
import { ref, watchEffect } from 'vue';

const router = useRouter();
const isMain = ref(false);

watchEffect(() => {
  const currentRoute = router.currentRoute.value;
  const currentRouteName = currentRoute.name;
  isMain.value = currentRouteName === 'order';
});
</script>
<template>
  <Header v-if="!isMain" />
  <RouterView />
</template>

<style lang="scss" scoped></style>
