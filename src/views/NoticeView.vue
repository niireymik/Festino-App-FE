<template>
  <div class="flex flex-col min-h-screen h-full items-center bg-notification-bg">
    <Header />
    <div class="flex flex-row w-full h-[48px] text-secondary-700 bg-white justify-center items-center font-medium text-xl relative">
      <div class="w-[28px] h-[28px] bg-back-arrow bg-cover bg-no-repeat absolute left-[24px]" @click="handleClickBackArrow()"></div>
      <div>공지사항</div>
    </div>
    <div class="flex flex-col py-5 gap-5 px-4 justify-center w-full">
      <div class="font-medium text-xl">‘Festino’ 사용 공지사항</div>
      <NoticePage />
    </div>
    <div class="py-30"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import NoticePage from '@/components/notice/NoticePage.vue';
import Header from '@/components/header/Header.vue';

const router = useRouter();

const handleClickBackArrow = () => {
  router.go(-1);
}

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="css" scoped></style>
