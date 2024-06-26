<template>
  <div class="flex flex-col min-h-screen h-full items-center bg-[#FBFCFF]">
    <Header />
    <div class="flex flex-row w-full h-[48px] text-secondary-700 bg-white justify-center items-center font-medium text-xl relative">
      <img src="../../images/header/arrow.png" class="absolute left-[24px] w-[28px] h-[28px]"/>
      공지사항
    </div>
    <div v-for="item in 3" :key="item" class="pt-5 px-4 flex justify-center w-full">
      <Notice class="notice-shadow"/>
    </div>
  </div>
</template>
  
<script setup>
  import Notice from '@/components/notice/Notice.vue';
  import Header from '@/components/header/Header.vue';
</script>

<style lang="css" scoped>
.notice-shadow {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
}
</style>
