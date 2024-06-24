<script setup>
import ShowPreview from '@/components/timetable/ShowPreview.vue';
import Tabling from '@/components/tablings/Tabling.vue';
</script>
<template>
  <Tabling />

  <!-- <div class="h-96 w-full dynamic-padding">
    <ShowPreview />
  </div> -->
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
