<template>
  <DateButtons @day="updateDay" />
  <div class="p-5">
    <div class="h-[485px]">
      <TimeTable :day="day" />
    </div>
  </div>
  <MoreButton :componentName="club" />
  <div class="px-5">
    <ShowPreview />
  </div>
  <MoreButton :componentName="talent" />
  <div class="px-5 pb-20">
    <ShowPreview />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DateButtons from "../main/DateButtons.vue";
import MoreButton from "../main/MoreButton.vue";
import ShowPreview from "./ShowPreview.vue";
import TimeTable from "./TimeTable.vue";

const club = ref("동아리 공연");
const talent = ref("연예인 공연");
const day = ref(0);

const updateDay = (selectedDay) => {
  day.value = selectedDay;
};
</script>

<style lang="css" scoped>
</style>
