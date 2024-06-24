<script setup>
import TablingBanner from '@/components/tablings/TablingBanner.vue';
import TablingTabs from '@/components/tablings/TablingTabs.vue';
</script>

<template>
  <div>
    <TablingBanner />
    <TablingTabs />
  </div>
</template>

<style lang="css" scoped>
.dynamic-item {
  min-width: 100px;
  min-height: 100px;
  width: calc(190 / 390 * 100%) !important;
  height: calc(190 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
