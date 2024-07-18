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

watch(() => day.value, async () => {
  if (props.category === "talent") {
    await getTalentTimetable();
    showData.value = talentData.value.showInfo
  } else {
    await getClubTimetable();
    showData.value = clubData.value.showInfo
  }
});

onMounted(async () => {
  if (props.category === "talent") {
    await getTalentTimetable();
    showData.value = talentData.value.showInfo
  } else {
    await getClubTimetable();
    showData.value = clubData.value.showInfo
  }
});
</script>

<template>
  <div class="px-5">
    <div class="w-full h-[178px] bg-white rounded-3xl border-primary border-1 flex justify-center select-none" v-bind="$attrs">
      <div class="flex pt-[17px] w-full px-3 justify-evenly gap-1 overflow-x-auto reserve-container">
        <div v-if="!showData" class="pt-14">공연정보가 없습니다.</div>
        <div class="flex flex-col items-center cursor-pointer" v-for="show in showData" :key="show.id" @click="handleClickOpenModal(props.category, show)">
          <div class="w-[100px] h-[100px] bg-primary-700 rounded-full bg-tino-cheer-up bg-center bg-no-repeat bg-[length:61px_62px]"></div>
          <div class="text-xs font-normal pt-2">{{ show.showStartTime }}</div>
          <div class="text-primary-700 font-medium">{{ show.performer }}</div>
        </div>
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
