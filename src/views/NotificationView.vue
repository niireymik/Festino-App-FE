<template>
  <div class="flex flex-col min-h-screen h-full items-center bg-notification-bg select-none">
    <Header />
    <div class="flex flex-row w-full h-[48px] text-secondary-700 bg-white justify-center items-center font-medium text-xl relative">
      <div class="w-[28px] h-[28px] bg-back-arrow bg-cover bg-no-repeat absolute left-[24px] cursor-pointer" @click="handleClickBackArrow()"></div>
      <div>공지사항</div>
    </div>
    <div v-for="notice in pinNotices" :key="notice" class="pt-5 px-4 flex justify-center w-full">
      <PinNotice class="shadow-4xl" :notice="notice" />
    </div>
    <div v-for="notice in notices" :key="notice" class="pt-5 px-4 flex justify-center w-full">
      <Notice class="shadow-4xl" :notice="notice" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/mainStore.js';
import axios from 'axios';
import PinNotice from '@/components/notice/PinNotice.vue';
import Notice from '@/components/notice/Notice.vue';
import Header from '@/components/header/Header.vue';

const { host } = useMainStore();

const router = useRouter();
const notices = ref([]);
const pinNotices = ref([]);

const handleClickBackArrow = () => {
  router.go(-1);
};

const getAllNotice = async () => {
  const noticeResponse = await axios.get(`${host}/main/notice/all`);
  const allNotices = noticeResponse.data.noticesInfo;
  pinNotices.value = allNotices.filter(notice => notice.isPin);
  notices.value = allNotices.filter(notice => !notice.isPin);
};

onMounted(() => {
  window.scrollTo(0, 0);
  getAllNotice();
});
</script>

<style scoped>
</style>
