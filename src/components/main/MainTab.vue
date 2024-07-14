<template>
  <DateButtons />
  <MoreButton :componentName="timeTable" />
  <div>
    <ShowPreview class="shadow-4xl"/>
  </div>
  <MoreButton :componentName="notification" />
  <div class="px-5">
    <div
      class="py-3 px-4 rounded-2xl border-primary border-1 shadow-4xl flex justify-between items-center"
      @click="handleClickNotice()"
    >
      <div class="flex">
        <div class="w-[57px] text-secondary-700 text-xs font-medium">Festino</div>
        <div class="text-secondary-500 text-xs font-normal">{{ mainNotice.title }}</div>
      </div>
      <div class="text-secondary-700 text-2xs font-normal">{{ timeAgo }}</div>
    </div>
  </div>
  <div class="px-5 pt-5 pb-20">
    <SlideBanner />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/mainStore.js';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import axios from 'axios';
import DateButtons from './DateButtons.vue';
import ShowPreview from '../timetable/ShowPreview.vue';
import SlideBanner from './SlideBanner.vue';
import MoreButton from './MoreButton.vue';

const { getNotice, host } = useMainStore();

const timeTable = ref("타임테이블");
const notification = ref("공지사항");
const router = useRouter();
const mainNotice = ref([]);

const handleClickNotice = async () => {
  await getNotice(mainNotice.value.noticeId);
  router.push({ name: 'notice' });
};

const getMainNotice = async () => {
    const noticeResponse = await axios.get(`${host}/main/notice`);
    const noticeData = noticeResponse.data.noticeInfo;
    mainNotice.value = noticeData;
};
const timeAgo = computed(() => {
  if (!mainNotice.value.updateAt) {
    return "No update time available";
  }
    return formatDistanceToNow(new Date(mainNotice.value.updateAt), { addSuffix: true, locale: ko });
});

onMounted(() => {
  getMainNotice();
});
</script>

<style lang="css" scoped>
</style>
