<template>
  <div class="flex flex-col min-h-screen h-auto justify-between">
    <Tabling />
  </div>
</template>

<script setup>
import Tabling from '@/components/tablings/Tabling.vue';

import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="css" scoped></style>
