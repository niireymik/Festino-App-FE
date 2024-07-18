<script setup>
import { onMounted, ref, watch } from 'vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

const { openReserveModal } = useTablingModalStore();
const { getAllNightBooth, setSelectedNightBoothInfo } = useReservationStore();
const { nightBoothInfo, selectedNightBoothInfo } = storeToRefs(useReservationStore());

onMounted(() => {
  getAllNightBooth();
  selectedBoothId.value = route.params.boothId;
});

const selectedBoothId = ref('');
const handleClickMajorBox = (boothInfo) => {
  if (selectedBoothId.value === boothInfo.boothId) {
    selectedBoothId.value = '';
    setSelectedNightBoothInfo(null);
    return;
  }
  selectedBoothId.value = boothInfo.boothId;
  setSelectedNightBoothInfo({ ...boothInfo });
};

const handleClickReserveButton = () => {
  if (selectedBoothId.value == '') return;
  openReserveModal();
};

const router = useRouter();
const route = useRoute();
const handleClickDetailButton = () => {
  if (selectedBoothId.value == '') return;
  router.push(`/booth/detail/${selectedBoothId.value}`);
};

const nightBoothInfoLength = ref(0);
watch(nightBoothInfo, () => {
  nightBoothInfoLength.value = nightBoothInfo.value.length;
});
</script>

<template>
  <div class="w-screen max-w-[500px] min-w-[375px]">
    <div class="w-full flex justify-start">
      <div
        class="pt-10"
        @touchstart.stop=""
        id="reserve-container"
        :class="{ 'overflow-auto': nightBoothInfoLength > 4 }"
      >
        <div class="grid w-auto grid-rows-2 gap-2 grid-flow-col">
          <div class="row-span-2 dynamic-width"></div>
          <div
            v-for="nightBooth in nightBoothInfo"
            :key="nightBooth.boothId"
            @click="handleClickMajorBox(nightBooth)"
            class="aspect-w-1 aspect-h-1 dynamic-item rounded-3xl bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${nightBooth.boothImage})` }"
          >
            <div
              class="flex flex-col justify-end text-white p-5 bg-gradient-to-t from-black to-white rounded-3xl opacity-40"
            >
              <h2 class="font-bold mb-0.5 break-keep">{{ nightBooth.adminName }}</h2>
              <h2 class="text-2xs">대기중인 팀 : {{ nightBooth.totalReservationNum }}</h2>
            </div>
            <div
              v-if="selectedBoothId == nightBooth.boothId"
              class="absolute rounded-3xl border-4 border-primary-900"
            ></div>
          </div>

          <div class="row-span-2 dynamic-width"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-row dynamic-padding justify-between gap-[10px] text-white font-bold mt-5 mb-20">
      <button
        class="h-[60px] rounded-10xl w-1/2"
        :class="
          selectedBoothId != ''
            ? 'bg-white border-1 border-primary-900-light-68 text-primary-900 font-medium'
            : 'bg-secondary-100'
        "
        @click="handleClickDetailButton()"
      >
        자세히보기
      </button>
      <button
        class="h-[60px] rounded-10xl w-1/2"
        :class="selectedBoothId != '' ? 'bg-primary-900' : 'bg-secondary-100'"
        @click="handleClickReserveButton()"
      >
        예약하기
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-item {
  width: calc(100vw * 190 / 430) !important;
  max-width: calc(500px * 190 / 430) !important;
  min-width: calc(375px * 190 / 430) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}

.dynamic-width {
  width: calc(100vw * 10 / 430) !important;
}
</style>