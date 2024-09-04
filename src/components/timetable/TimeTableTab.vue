<script setup>
import DateButtons from '../main/DateButtons.vue';
import ShowPreview from './ShowPreview.vue';
import TimeTable from './TimeTable.vue';
</script>

<template>
  <DateButtons />
  <div class="px-5 pt-5 pb-1.5 rounded-3xl">
    <TimeTable />
  </div>
  <div class="flex flex-col px-5 pt-4 gap-3 select-none">
    <div class="text-xl font-semibold">동아리 공연</div>
    <ShowPreview class="shadow-4xl" category="club" />
  </div>
  <div class="flex flex-col px-5 pt-4 gap-3 select-none">
    <div class="text-xl font-semibold">연예인 공연</div>
    <div class="pb-20">
      <ShowPreview class="shadow-4xl" category="talent" />
    </div>
  </div>
</template>

<style lang="css" scoped></style>
