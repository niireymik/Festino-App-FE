<template>
  <div class="flex flex-col min-h-screen h-full items-center bg-notification-bg">
    <Header />
    <div class="flex flex-row w-full h-[48px] text-secondary-700 bg-white justify-center items-center font-medium text-xl relative">
      <div class="w-[28px] h-[28px] bg-back-arrow bg-cover bg-no-repeat absolute left-[24px]"></div>
      공지사항
    </div>
    <div v-for="item in 3" :key="item" class="pt-5 px-4 flex justify-center w-full">
      <Notice class="shadow-4xl"/>
    </div>
  </div>
</template>
  
<script setup>
import Notice from '@/components/notice/Notice.vue';
import Header from '@/components/header/Header.vue';
</script>

<style lang="css" scoped>
</style>
