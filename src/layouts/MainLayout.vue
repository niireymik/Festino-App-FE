<script setup>
import { RouterView } from 'vue-router';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
</script>

<template>
  <RouterView />
  <Footer class="limit-width"></Footer>
</template>

<style lang="css" scoped>
.limit-width {
  min-width: 375px;
  max-width: 500px;
  margin-top: auto;
}
</style>
