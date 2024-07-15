<template>
  <div v-if="clubModalState">
    <ClubModal 
      :handleCloseModal="handleCloseModal"
      :modalData="modalData" />
  </div>
  <div v-if="talentModalState">
    <TalentModal
      :handleCloseModal="handleCloseModal"
      :modalData="modalData" />
  </div>
  <div class="w-full px-5 pt-5 pb-1.5 select-none">
    <div class="flex flex-col items-center border-2 border-primary rounded-3xl py-5">
      <div class="px-5 pb-5">
        <div class="w-[300px] xs:w-[350px] sm:w-[390px] py-2 text-white bg-primary-700 rounded-full flex justify-center">
          DAY {{ day + 1 }} 공연 타임테이블
        </div>
      </div>
      <div class="flex overflow-y-auto h-full w-full justify-center">
        <div class="flex flex-col items-center text-secondary-700 gap-[65px] pt-1">
          <div v-for="data in clubData" :key="data" :class="data.isShowing ? 'text-secondary-700' : 'text-secondary-100'">{{ data.showStartTime }} ~ {{ data.showEndTime }}</div>
          <div v-for="data in talentData" :key="data" :class="data.isShowing ? 'text-secondary-700' : 'text-secondary-100'">{{ data.showStartTime }} ~ {{ data.showEndTime }}</div>
        </div>
        <div class="pt-3 pl-3 xs:pl-4 sm:pl-7 pr-1 xs:pr-3 sm:pr-7">
          <div class="border-2 border-primary-700 h-[auto] w-0 border-dashed flex flex-col items-center gap-[77.6px]">
            <div class="w-[16px] h-[16px] mt-[-5px] rounded-full flex items-center justify-center" :class="data.isShowing ? 'bg-primary-700-light' : 'bg-secondary-50'" v-for="data in clubData" :key="data">
              <div class="w-[8px] h-[8px] rounded-full" :class="data.isShowing ? 'bg-primary-700' : 'bg-secondary-100'"></div>
            </div>
            <div class="w-[16px] h-[16px] mt-[-5px] rounded-full flex items-center justify-center" :class="data.isShowing ? 'bg-primary-700-light' : 'bg-secondary-50'" v-for="data in talentData" :key="data">
              <div class="w-[8px] h-[8px] rounded-full" :class="data.isShowing ? 'bg-primary-700' : 'bg-secondary-100'"></div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6">
          <div class="cursor-pointer flex justify-center py-5 rounded-3xl w-[170px] xs:w-[210px] sm:w-[230px] border-2"
            v-for="data in clubData" :key="data"
            :class="data.isShowing ? 'border-primary text-primary-700' : 'bg-secondary-50 border-secondary-100 text-secondary-100'"
            @click="handleClickOpenClubModal(data)">교내 동아리 ' {{ data.performer }} '</div>
          <div class="cursor-pointer flex justify-center py-5 rounded-3xl w-[170px] xs:w-[210px] sm:w-[230px] border-2"
            v-for="data in talentData" :key="data"
            :class="data.isShowing ? 'border-primary text-primary-700' : 'bg-secondary-50 border-secondary-100 text-secondary-100'"
            @click="handleClickOpenTalentModal(data)">연예인 ' {{ data.performer }} '</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubModal from './ClubModal.vue';
import TalentModal from './TalentModal.vue';
import { ref, watchEffect, onMounted, watch } from 'vue';
import axios from 'axios';

const props = defineProps({
  day: {
    type: Number,
    required: true,
  },
});

const clubData = ref([]);
const talentData = ref([]);
const clubModalState = ref(false);
const talentModalState = ref(false);
const modalData = ref([]);

const handleClickOpenClubModal = (data) => {
  modalData.value = data;
  clubModalState.value = true;
};

const handleClickOpenTalentModal = (data) => {
  modalData.value = data;
  talentModalState.value = true;
};

const handleCloseModal = () => {
  talentModalState.value = false;
  clubModalState.value = false;
};

const handleStopScroll = () => {
  if (clubModalState.value || talentModalState.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

const getTimetable = async () => {
  const date = String(props.day + 11)
  const clubDataResponse = await axios.get(`https://api.festino.dev-tino.com/main/club/all/date/${date}`);
  const ClubTimetableData = clubDataResponse.data;
  clubData.value = ClubTimetableData.showInfo;

  const talentDataResponse = await axios.get(`https://api.festino.dev-tino.com/main/talent/all/date/${date}`);
  const talentTimetableData = talentDataResponse.data;
  talentData.value = talentTimetableData.showInfo;
};

watchEffect(() => {
  handleStopScroll();
});

watch(() => props.day, () => {
  getTimetable();
});

onMounted(() => {
  getTimetable();
});
</script>

<style lang="css" scoped>
</style>
