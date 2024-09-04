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
  if (data.talentImage) return { backgroundImage: `url('${data.talentImage}')` };
  if (data.clubImage) return { backgroundImage: `url('${data.clubImage}')` };
  return { backgroundImage: `url('/images/booth/booth-default-image.png')` };
};

watch(
  () => day.value,
  async () => {
    if (props.category === 'talent') {
      await getTalentTimetable();
      showData.value = talentData.value.showInfo;
    } else {
      await getClubTimetable();
      showData.value = clubData.value.showInfo;
    }
  },
);

onMounted(async () => {
  if (props.category === 'talent') {
    await getTalentTimetable();
    showData.value = talentData.value.showInfo;
  } else {
    await getClubTimetable();
    showData.value = clubData.value.showInfo;
  }
});
</script>

<template>
  <div
    v-if="showData"
    class="w-full h-[178px] bg-white rounded-3xl border-primary border-1 flex justify-center select-none"
    v-bind="$attrs"
  >
    <div class="flex pt-[17px] w-full px-3 justify-evenly gap-1 overflow-x-auto reserve-container">
      <div
        class="flex flex-col items-center cursor-pointer"
        v-for="show in showData"
        :key="show"
        @click="handleClickOpenModal(props.category, show)"
      >
        <div
          :style="getImage(show)"
          class="border-2 border-primary bg-cover bg-center w-[100px] h-[100px] rounded-full"
        ></div>
        <div class="text-xs font-normal pt-2">{{ show.showStartTime }}</div>
        <div class="text-primary-700 font-medium">{{ show.performer }}</div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="w-full h-[178px] bg-white rounded-3xl border-primary border-1 flex justify-center select-none"
    v-bind="$attrs"
  >
    <div class="flex flex-col items-center pt-[18px] w-full px-3 gap-[17px] justify-evenly">
      <div class="gap-1 flex flex-col items-center">
        <div class="text-secondary-700 font-bold">현재 공연정보가 없습니다.</div>
        <div class="text-secondary-500 text-xs">추후 업데이트 예정입니다.</div>
      </div>
      <div class="ml-6 bg-tino-error-half bg-cover bg-center w-[220px] h-[194px]"></div>
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
