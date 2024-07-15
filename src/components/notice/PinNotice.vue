<template>
  <div class="w-full h-auto flex flex-row bg-white rounded-3xl border-primary border-1 justify-between items-center cursor-pointer select-none" @click="handleClickNotice(notice.noticeId)">
    <div class="flex pl-4 items-center py-3 gap-[12px]">
      <div class="w-[20px] h-[20px] bg-center bg-pin-icon bg-no-repeat bg-[length:20px_20px]"></div>
      <div class="py-1 text-base font-normal text-primary-700 leading-tight">{{ notice.title }}</div>
    </div>
    <div class="flex justify-end pr-4 text-xs font-normal text-secondary-500 w-[140px]">{{ timeAgo }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useMainStore } from '@/stores/mainStore.js';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const { getNotice } = useMainStore();

const router = useRouter();
const props = defineProps({
  notice: {
    type: Object,
    required: true
  }
});

const handleClickNotice = async (noticeId) => {
  await getNotice(noticeId)
  router.push({ name: 'notice' });
};

const timeAgo = computed(() => {
  return formatDistanceToNow(new Date(props.notice.updateAt), { addSuffix: true, locale: ko });
});
</script>

<style lang="css" scoped></style>
