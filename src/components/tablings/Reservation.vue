<script setup>
import { ref } from 'vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
const { openReserveModal } = useTablingModalStore();

const selectedIndex = ref(-1);
const hanldeClickMajorBox = (index) => {
  if (selectedIndex.value == index) {
    selectedIndex.value = -1;
    return;
  }
  selectedIndex.value = index;
};

const handleClickReserveButton = () => {
  if (selectedIndex.value == -1) return;
  openReserveModal();
};
</script>
<template>
  <div class="w-screen max-w-[500px] min-w-[375px]">
    <div class="w-full flex justify-center">
      <div class="dynamic-grid-container overflow-x-auto pt-10" @touchstart.stop="" id="reserve-container">
        <div class="grid w-auto grid-rows-2 gap-2 grid-flow-col">
          <div
            v-for="(item, index) in 20"
            class="bg-primary-300 aspect-w-1 aspect-h-1 dynamic-item rounded-3xl"
            @click="hanldeClickMajorBox(index)"
            :class="{
              'outline -outline-offset-4 outline-4 outline-primary-900': selectedIndex == index,
              'bg-secondary-100 opacity-50 rounded-3xl': selectedIndex != index && selectedIndex != -1,
            }"
          >
            <div class="flex flex-col justify-end text-white p-3">
              <h2 class="font-bold mb-1 break-keep">에너지 전자 공학과</h2>
              <h2 class="text-2xs">대기중인 팀 : 9</h2>
            </div>
          </div>
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

.dynamic-grid-container {
  width: calc(390 / 430 * 100%) !important;
}

.dynamic-margin {
  margin-left: calc(20 / 430 * 100%) !important;
  margin-right: calc(20 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}

#reserve-container::-webkit-scrollbar {
  display: none;
}
#reserve-container {
  scrollbar-width: none;
}
</style>
