<template>
  <div class="w-full h-auto flex flex-row bg-white rounded-3xl border-primary border-1 justify-between items-center" @click="handleClickNotice()">
    <div class="flex pl-4 items-center py-3 gap-[12px]">
      <div class="w-[20px] h-[20px] bg-center bg-pin-icon bg-no-repeat bg-[length:20px_20px]"></div>
      <div class="py-1 text-base font-normal text-primary-700 leading-tight">'Festino' 사용 공지사항</div>
    </div>
    <div class="flex justify-end pr-4 text-xs font-normal text-secondary-500 w-[140px]">1시간 전</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickNotice = () => {
  router.push({ name: "notice" });
};
</script>

<style lang="css" scoped></style>
