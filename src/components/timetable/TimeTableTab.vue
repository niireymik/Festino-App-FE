<template>
  <DateButtons @day="updateDay" />
  <div>
    <TimeTable class="shadow-4xl" :day="day"/>
  </div>
  <div class="flex justify-between items-center px-5 pt-4 pb-3 select-none">
    <div class="text-xl font-semibold">동아리 공연</div>
  </div>
  <div>
    <ShowPreview class="shadow-4xl"
      category="club"
      :day="day"  />
  </div>
  <div class="flex justify-between items-center px-5 pt-4 pb-3 select-none">
    <div class="text-xl font-semibold">연예인 공연</div>
  </div>
  <div class="pb-20">
    <ShowPreview class="shadow-4xl"
      category="talent"
      :day="day" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DateButtons from "../main/DateButtons.vue";
import ShowPreview from "./ShowPreview.vue";
import TimeTable from "./TimeTable.vue";

const day = ref(0);

const updateDay = (selectedDay) => {
  day.value = selectedDay;
};
</script>

<style lang="css" scoped>
</style>
