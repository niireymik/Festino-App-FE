<script setup>
import router from '@/router';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const route = useRoute();
const handleClickBackButton = () => {
  router.push({ name: 'order', params: { boothId: route.params.boothId, tableNum: route.params.tableNum } });
};
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <div class="fixed top-0 max-w-[500px] w-full h-[60px] bg-white flex justify-between items-center px-6 shadow-xs z-50">
    <img src="/icons/header-arrow-back.svg" class="w-7" @click="handleClickBackButton()" />
    <p class="font-medium text-xl">{{ title }}</p>
    <div class="w-7"></div>
  </div>
</template>

<style lang="scss" scoped></style>
