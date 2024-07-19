<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const pageName = route.params.page;

const handleClickGoMainButton = () => {
  if (pageName === 'main') router.push({ name: 'main' });
  if (pageName === 'order') router.push({ name: 'order' });
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-10 h-screen">
    <div class="bg-tino-error w-[264px] h-[243px] bg-cover bg-no-repeat"></div>
    <div class="text-2xl font-semibold">에러가 발생했습니다.<br />다시 시도해주세요.</div>
    <button
      @click="handleClickGoMainButton()"
      class="h-12 text-xl text-white bg-primary-900 rounded-3xl font-semibold w-4/5"
    >
      메인으로 가기
    </button>
  </div>
</template>

<style lang="scss" scoped></style>
