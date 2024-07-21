<script setup>
import { ref, onMounted, watch } from 'vue';
import { useModalStore } from '@/stores/modalStore';
import { useTimetableStore } from '@/stores/timetableStore';
import { storeToRefs } from 'pinia';

const { handleClickOpenModal } = useModalStore();
const { getClubTimetable, getTalentTimetable } = useTimetableStore();
const { clubData, talentData, day } = storeToRefs(useTimetableStore());
const showData = ref([]);

const props = defineProps({   
  category: {
    type: String,
    required: true,
  },
});

const getImage = (data) => {
  if(data.talentImage) return { backgroundImage: `url('${data.talentImage}')` }
  if(data.clubImage) return { backgroundImage: `url('${data.clubImage}')` }
};

watch(() => day.value, async () => {
  if (props.category === "talent") {
    await getTalentTimetable();
    showData.value = talentData.value.showInfo;
  } else {
    await getClubTimetable();
    showData.value = clubData.value.showInfo;
  }
});

onMounted(async () => {
  if (props.category === "talent") {
    await getTalentTimetable();
    showData.value = talentData.value.showInfo;
  } else {
    await getClubTimetable();
    showData.value = clubData.value.showInfo;
  }
});
</script>

<template>
  <div class="w-full h-[178px] bg-white rounded-3xl border-primary border-1 flex justify-center select-none" v-bind="$attrs">
    <div class="flex pt-[17px] w-full px-3 justify-evenly gap-1 overflow-x-auto reserve-container">
      <div v-if="!showData" class="gap-2 text-xs pt-2 flex flex-col items-center">
        <div class="bg-error-tino bg-cover bg-center w-[110px] h-[100px]"></div>
        <div>공연정보가 없습니다</div>
      </div>
      <div class="flex flex-col items-center cursor-pointer" v-for="show in showData" :key="show" @click="handleClickOpenModal(props.category, show)">
        <div :style="getImage(show)" class="border-2 border-primary bg-cover bg-center w-[100px] h-[100px] rounded-full"></div>
        <div class="text-xs font-normal pt-2">{{ show.showStartTime }}</div>
        <div class="text-primary-700 font-medium">{{ show.performer }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.reserve-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.reserve-container::-webkit-scrollbar {
  display: none;
}
</style>
