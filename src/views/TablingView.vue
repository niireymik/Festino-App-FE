<script setup>
import TablingBanner from '@/components/tablings/TablingBanner.vue';
import TablingTabs from '@/components/tablings/TablingTabs.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
</script>
<template>
  <div class="min-h-screen flex flex-col relative">
    <TablingBanner />
    <TablingTabs />
  </div>
</template>

<style lang="css" scoped></style>
