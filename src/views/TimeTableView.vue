<script setup>
import TimeTableTab from '@/components/timetable/TimeTableTab.vue';
import TimeTableBanner from '@/components/timetable/TimeTableBanner.vue';
import Header from '@/components/header/Header.vue';
</script>

<template>
  <div class="flex flex-col">
    <Header />
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
