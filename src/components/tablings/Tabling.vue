<script setup>
import TablingBanner from '@/components/tablings/TablingBanner.vue';
import TablingTabs from '@/components/tablings/TablingTabs.vue';
</script>

<template>
  <TablingBanner />
  <TablingTabs />

  <div class="grid grid-cols-2 gap-4 pt-16 w-full dynamic-padding">
    <!-- TODO: Make to Component -->
    <div v-for="item in 4" class="dynamic-item bg-red-200"></div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-item {
  min-width: 100px;
  min-height: 100px;
  width: calc(190 / 430 * 100%) !important;
  height: calc(190 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
