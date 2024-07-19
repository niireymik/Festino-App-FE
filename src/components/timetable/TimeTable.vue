<script setup>
import { onMounted, watch } from 'vue';
import { useModalStore } from '@/stores/modalStore.js';
import { useTimetableStore } from '@/stores/timetableStore.js';
import { storeToRefs } from 'pinia';
import TimeTableDetail from './TimeTableDetail.vue';

const { handleClickOpenModal } = useModalStore();
const { getAllTimetable } = useTimetableStore();
const { timetableData, day } = storeToRefs(useTimetableStore());

const handleClickOpenClubModal = (show) => {
  const category = "club";
  handleClickOpenModal(category, show);
};

const handleClickOpenTalentModal = (show) => {
  const category = "talent";
  handleClickOpenModal(category, show);
};

const isShowingTime = (isShowing) => {
  if(isShowing) return 'text-secondary-700';
  else return 'text-secondary-100';
};

const isShowingPin = (isShowing) => {
  if(isShowing) return 'bg-primary-700';
  else return 'bg-secondary-100';
};

const isShowingBgPin = (isShowing) => {
  if(isShowing) return 'bg-primary-700-light';
  else return 'bg-secondary-50';
};

watch(() => day.value, () => {
  getAllTimetable();
});

onMounted(async () => {
  await getAllTimetable();
});
</script>

<template>
  <div class="w-full px-5 pt-5 pb-1.5 select-none">
    <div class="flex flex-col items-center border-2 border-primary rounded-3xl py-5">
      <div class="px-5 pb-5">
        <div class="w-[300px] xs:w-[350px] sm:w-[390px] py-2 text-white bg-primary-700 rounded-full flex justify-center">
          DAY {{ day }} 공연 타임테이블
        </div>
      </div>
      <div v-if="timetableData.length == 0" class="py-5">공연정보가 없습니다.</div>
      <div class="flex h-full w-full justify-center">
        <div class="flex flex-col items-center text-secondary-700 gap-[65px] pt-1">
          <div v-for="data in timetableData" :key="data" :class="isShowingTime(data.isShowing)">{{ data.showStartTime }} ~ {{ data.showEndTime }}</div>
        </div>
        <div v-if="timetableData.length != 0" class="pt-3 pl-3 xs:pl-4 sm:pl-7 pr-1 xs:pr-3 sm:pr-7">
          <div class="border-2 border-primary-700 h-[auto] w-0 border-dashed flex flex-col items-center gap-[77.6px]">
            <div class="w-[16px] h-[16px] mt-[-5px] rounded-full flex items-center justify-center" :class="isShowingBgPin(data.isShowing)" v-for="data in timetableData" :key="data">
              <div class="w-[8px] h-[8px] rounded-full" :class="isShowingPin(data.isShowing)"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6">
          <div v-for="data in timetableData" :key="data">
            <TimeTableDetail @click="handleClickOpenClubModal(data)" v-if="data.clubId"
              :data="data"
              category="교내 동아리"/>
            <TimeTableDetail @click="handleClickOpenTalentModal(data)" v-if="data.talentId"
              :data="data"
              category="연예인"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
