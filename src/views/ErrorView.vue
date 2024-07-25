<script setup>
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const pageName = route.params.page;

const { boothId, tableNum } = storeToRefs(useOrderStore());

const handleClickGoMainButton = () => {
  if (pageName === 'main' || pageName === 'pathMismatch') router.push({ name: 'main' });
  if (pageName === 'order')
    router.push({ name: 'order', params: { boothId: boothId.value, tableNum: tableNum.value } });
};
watch(
  () => route.params.page,
  (newPage) => {
    console.log(newPage);
  },
);
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-[30px] h-screen">
    <div class="bg-error rounded-full w-12 h-12 flex justify-center">
      <img src="/icons/orders/error.svg" />
    </div>
    <div class="text-xl text-center">에러가 발생했습니다.<br />다시 시도해주세요.</div>
    <img src="/icons/tino-error.svg" />
    <button
      @click="handleClickGoMainButton()"
      class="h-12 text-xl text-white bg-primary-900 rounded-3xl font-semibold w-4/5"
      v-if="pageName && pageName != 'NotFound'"
    >
      메인으로 가기
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
