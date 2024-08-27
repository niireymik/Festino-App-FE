<script setup>
import TimeTableTab from '@/components/timetable/TimeTableTab.vue';
import TimeTableBanner from '@/components/timetable/TimeTableBanner.vue';
import { onMounted } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { selectBoothMenu } = storeToRefs(useGetBoothDataStore());

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  selectBoothMenu.value = 0;
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
