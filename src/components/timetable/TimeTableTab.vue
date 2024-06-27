<template>
  <DateButtons />
  <div class="p-5">
    <TimeTable />
  </div>
  <MoreButton />
  <div class="px-5">
    <ShowPreview />
  </div>
  <MoreButton />
  <div class="px-5 pb-20">
    <ShowPreview />
  </div>
</template>
  
<script setup>
import DateButtons from "../main/DateButtons.vue";
import MoreButton from "../main/MoreButton.vue";
import ShowPreview from "./ShowPreview.vue";
import TimeTable from "./TimeTable.vue"
</script>
  
<style lang="css" scoped>
</style>
  