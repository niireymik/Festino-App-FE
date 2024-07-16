<script setup>
import { onMounted, ref } from 'vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/reservationStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const { openReserveModal } = useTablingModalStore();
const { getAllNightBooth, setSelectedNightBoothInfo } = useReservationStore();
const { nightBoothInfo } = storeToRefs(useReservationStore());

const selectedIndex = ref(-1);
const handleClickMajorBox = (index, boothInfo) => {
  if (selectedIndex.value == index) {
    selectedIndex.value = -1;
    setSelectedNightBoothInfo(null);
    return;
  }
  selectedIndex.value = index;
  setSelectedNightBoothInfo({ ...boothInfo });
};

const handleClickReserveButton = () => {
  if (selectedIndex.value == -1) return;
  openReserveModal();
};

const router = useRouter();
const handleClickDetailButton = () => {
  if (selectedIndex.value == -1) return;
  //TODO: CHANGE BOOTHID
  const boothId = '3f1f0d0a-001b-4ff0-aea4-9728742f968f';
  router.push(`booth/deatil/${boothId}`);
};

onMounted(() => {
  getAllNightBooth();
});
</script>
<template>
  <div class="w-screen max-w-[500px] min-w-[375px]">
    <div class="w-full flex justify-start">
      <div class="overflow-x-auto pt-10" @touchstart.stop="" id="reserve-container">
        <div class="grid w-auto grid-rows-2 gap-2 grid-flow-col">
          <div class="row-span-2 dynamic-width"></div>
          <div
            v-for="(nightBooth, index) in nightBoothInfo"
            :key="nightBooth.boothId"
            @click="handleClickMajorBox(index, nightBooth)"
            class="aspect-w-1 aspect-h-1 dynamic-item rounded-3xl bg-no-repeat bg-cover"
            :class="{
              'outline -outline-offset-4 outline-4 outline-primary-900': selectedIndex == index,
              'bg-secondary-100 opacity-50 rounded-3xl': selectedIndex != index && selectedIndex != -1,
            }"
            :style="{ backgroundImage: `url(${nightBooth.boothImage})` }"
          >
            <div class="flex flex-col justify-end text-white p-5">
              <h2 class="font-bold mb-0.5 break-keep">{{ nightBooth.adminName }}</h2>
              <h2 class="text-2xs">대기중인 팀 : {{ nightBooth.totalReservationNum }}</h2>
            </div>
          </div>
          <div class="row-span-2 dynamic-width"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-row dynamic-padding justify-between gap-[10px] text-white font-bold mt-5 mb-20">
      <!-- TODO: 선택 학과로 이동 -->
      <button
        class="h-[60px] rounded-10xl w-1/2"
        :class="
          selectedIndex != -1
            ? 'bg-white border-1 border-primary-900-light-68 text-primary-900 font-medium'
            : 'bg-secondary-100'
        "
        @click="handleClickDetailButton()"
      >
        자세히보기
      </button>
      <button
        class="h-[60px] rounded-10xl w-1/2"
        :class="selectedIndex != -1 ? 'bg-primary-900' : 'bg-secondary-100'"
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
  max-width: calc(500px * 10 / 430) !important;
  min-width: calc(375px * 19 / 430) !important;
}

#reserve-container::-webkit-scrollbar {
  display: none;
}
#reserve-container {
  scrollbar-width: none;
}
</style>
