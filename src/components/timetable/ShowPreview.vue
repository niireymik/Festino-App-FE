<template>
  <div v-if="clubModalState">
    <ClubModal 
    :handleCloseModal="handleCloseModal"
    :modalData = "modalData" />
  </div>
  <div v-if="talentModalState">
    <TalentModal 
    :handleCloseModal="handleCloseModal"
    :modalData = "modalData" />
  </div>
  <div class="px-5">
    <div class="w-full h-[178px] bg-white rounded-3xl border-primary border-1 flex justify-center select-none" v-bind="$attrs">
      <div class="flex pt-[17px] w-full dynamic-padding justify-evenly">
        <div class="flex flex-col items-center cursor-pointer" v-for="show in showData" :key="show"  @click="handleClickOpenModal(show)">
          <div
            class="w-[100px] h-[100px] bg-primary-700 rounded-full bg-tino-cheer-up bg-center bg-no-repeat bg-[length:61px_62px]"
          ></div>
          <div class="text-xs font-normal pt-2">{{ show.showStartTime }}</div>
          <div class="text-primary-700 font-medium">{{ show.performer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubModal from './ClubModal.vue';
import TalentModal from './TalentModal.vue';
import axios from 'axios';
import { ref, watchEffect, onMounted, watch } from 'vue';

const clubModalState = ref(false);
const talentModalState = ref(false);
const showData = ref([]);
const modalData = ref([]);
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
});

const handleClickOpenModal = (show) => {
  modalData.value = show;
  if (props.category == "talent") talentModalState.value = true;
  else clubModalState.value = true;
};
const handleCloseModal = () => {
  if (props.category == "talent") talentModalState.value = false;
  else clubModalState.value = false;
};
const handleStopScroll = () => {
  if (clubModalState.value || talentModalState.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};
const getTimetable = async () => {
  const date = String(props.day + 11)
  const timetableResponse = await axios.get(`https://api.festino.dev-tino.com/main/${props.category}/all/date/${date}`);
  const timetableData = timetableResponse.data;
  showData.value = timetableData.showInfo;
};

watchEffect(() => {
  handleStopScroll();
});

  getTimetable();
watch(() => day.value, async () => {
});

onMounted(() => {
  getTimetable();
});
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(16 / 390 * 100%) !important;
  padding-right: calc(16 / 390 * 100%) !important;
}
</style>
