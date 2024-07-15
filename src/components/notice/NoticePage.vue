<template>
  <div class="w-full h-auto flex flex-col bg-white rounded-3xl border-primary border-1 justify-center items-center p-5 gap-[20px] select-none">
    <div class="w-full aspect-w-1 aspect-h-1">
      <img :src=noticeData.imageUrl class="rounded-3xl">
    </div>
    <div class="w-full text-xs" v-html="noticeData.content"></div>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/mainStore.js';

const { noticeData } = useMainStore();
</script>

<style scoped>
</style>
