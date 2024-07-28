<template>
  <div class="w-full h-[58px] flex flex-row bg-white justify-between px-5 items-center">
    <div class="w-[68px] h-[36px] bg-header-tino-logo bg-center bg-no-repeat bg-[length:68px_36px] cursor-pointer" @click="handleClickMainSymbol()"></div>
    <div class="w-[32px] h-[32px] bg-header-team-introduction bg-center bg-no-repeat bg-[length:32px_32px] cursor-pointer" @click="moveToDeveloperPage()"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickMainSymbol = () => {
  router.push({ name: "main"});
};

const moveToDeveloperPage = () => {
  window.open(`https://github.com/DEV-TINO`, "_blank");
};
</script>

<style lang="css" scoped>
</style>
  