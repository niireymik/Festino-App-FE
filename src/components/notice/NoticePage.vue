<script setup>


onMounted(async () => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="w-full h-auto flex flex-col bg-white rounded-3xl border-primary border-1 justify-center items-center p-5 gap-[20px] select-none">
    <div class="w-full aspect-w-1 aspect-h-1">
      <img :src=noticeData.imageUrl class="rounded-3xl">
    </div>
    <div class="w-full text-xs break-words px-1 whitespace-pre-wrap">{{ noticeData.content }}</div>
  </div>
</template>

<style scoped>
</style>
