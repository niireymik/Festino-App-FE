<template>
  <div class="w-full h-auto flex flex-row bg-white rounded-3xl border-primary border-1 justify-between items-center" @click="handleClickNotice()">
    <div class="flex flex-col pl-4 items-start py-3">
      <div class="py-1 text-base font-normal text-secondary-500 leading-tight">'Festino' 사용 공지사항</div>
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
