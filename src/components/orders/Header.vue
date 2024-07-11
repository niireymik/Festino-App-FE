<script setup>
import router from '@/router';

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
});
const handleClickBackButton = () => {
  router.push({ name: 'order' });
};
</script>
<template>
  <div class="w-full h-[60px] bg-white flex justify-between items-center px-6 shadow-xs mb-7">
    <img src="/icons/header-arrow-back.svg" class="w-7" @click="handleClickBackButton()" />
    <p class="font-medium text-xl">{{ title }}</p>
    <div class="w-7"></div>
  </div>
</template>

<style lang="scss" scoped></style>
