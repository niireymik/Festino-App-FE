<script setup>
import TimeTableTab from '@/components/timetable/TimeTableTab.vue';
import TimeTableBanner from '@/components/timetable/TimeTableBanner.vue';
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
</script>

<template>
  <div class="flex flex-col">
    <TimeTableBanner />
    <TimeTableTab />
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
