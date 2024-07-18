<script setup>
import DateButtons from "../main/DateButtons.vue";
import ShowPreview from "./ShowPreview.vue";
import TimeTable from "./TimeTable.vue";
</script>

<template>
  <DateButtons />
  <TimeTable class="shadow-4xl" />
  <div class="flex justify-between items-center px-5 pt-4 pb-3 select-none">
    <div class="text-xl font-semibold">동아리 공연</div>
  </div>
  <ShowPreview class="shadow-4xl" category="club" />
  <div class="flex justify-between items-center px-5 pt-4 pb-3 select-none">
    <div class="text-xl font-semibold">연예인 공연</div>
  </div>
  <div class="pb-20">
    <ShowPreview class="shadow-4xl" category="talent" />
  </div>
</template>

<style lang="css" scoped>
</style>
