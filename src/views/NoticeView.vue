<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import NoticePage from '@/components/notice/NoticePage.vue';
import Header from '@/components/header/Header.vue';
import { useNoticeStore } from '@/stores/noticeStore.js';

const { noticeData } = storeToRefs(useNoticeStore());

const router = useRouter();

const handleClickBackArrow = () => {
  router.push({ name: "notification"});
}

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="flex flex-col min-h-screen h-full items-center bg-notification-bg select-none pb-16">
    <Header />
    <div class="flex flex-row w-full h-[48px] text-secondary-700 bg-white justify-center items-center font-medium text-xl relative">
      <div class="w-[28px] h-[28px] bg-back-arrow bg-cover bg-no-repeat absolute left-[24px] cursor-pointer" @click="handleClickBackArrow()"></div>
      <div>공지사항</div>
    </div>
    <div class="flex flex-col py-5 gap-5 px-4 justify-center w-full">
      <div class="font-medium text-xl px-2 break-words">{{ noticeData.title }}</div>
      <NoticePage />
    </div>
    <div class="py-30"></div>
  </div>
</template>

<style lang="css" scoped></style>
