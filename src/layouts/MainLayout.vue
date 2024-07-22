<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
</script>

<template>
  <div class="h-lvh">
    <RouterView />
    <Footer class="limit-width"></Footer>
  </div>
</template>

<style lang="css" scoped>
.limit-width {
  min-width: 375px;
  max-width: 500px;
  margin-top: auto;
}
</style>
