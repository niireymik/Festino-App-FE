<script setup>
import { onMounted, ref } from 'vue';
import InputName from './InputName.vue';
import InputPhoneNum from './InputPhoneNum.vue';
import InputPersonNum from './InputPersonNum.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';

const { closeReserveModal } = useTablingModalStore();
const { saveReservation, setUserName } = useReservationStore();
const { selectedNightBoothInfo } = storeToRefs(useReservationStore());

const name = ref('');
const phoneNum = ref('');
const personNum = ref('');
const reserveModal = ref(null);

const handleClickReserveButton = () => {
  if (name.value < 2 || phoneNum.value.length !== 11 || personNum == 0) return;
  saveReservation({
    boothId: selectedNightBoothInfo.value.boothId,
    userName: name.value,
    phoneNum: phoneNum.value,
    personCount: personNum.value,
  });
  setUserName(name.value);
};

onMounted(() => {
  const height = reserveModal.value.offsetHeight;
  const currentScroll = window.scrollY;

  reserveModal.value.style.top = `${currentScroll + (window.innerHeight - height) / 2}px`;
});
</script>

<template>
  <div
    class="w-full h-full absolute top-0 left-0 bg-opacity-60 bg-black z-50 overflow-hidden"
    @click="closeReserveModal()"
  >
    <div
      class="dynamic-modal-width h-[537px] bg-white rounded-3xl flex flex-col items-center gap-7 py-7 px-[21px] absolute left-1/2 transform -translate-x-1/2"
      ref="reserveModal"
      @click.stop=""
    >
      <div class="text-secondary-700 text-xl font-semibold">{{ selectedNightBoothInfo.adminName }} 부스 예약</div>
      <div class="w-full flex flex-col justify-start px-4">
        <InputName v-model="name" />
        <div class="mb-[30px]">
          <InputPhoneNum v-model="phoneNum" />
        </div>
        <InputPersonNum v-model="personNum" />
      </div>
      <div class="flex flex-row justify-between p-4 bg-primary-900-light-6 rounded-lg-xl w-full">
        <div>현재 대기 팀</div>
        <div>{{ selectedNightBoothInfo.totalReservationNum }} 팀</div>
      </div>
      <div class="w-full flex flex-row justify-between gap-[10px]">
        <button
          class="w-full h-[43px] bg-white text-primary-900 font-bold rounded-10xl border-1 border-primary-900-light-68"
          @click="closeReserveModal()"
        >
          닫기
        </button>
        <button
          class="w-full h-[43px] bg-primary-900 text-white font-bold rounded-10xl"
          @click="handleClickReserveButton()"
        >
          예약하기
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-modal-width {
  width: calc(386 / 430 * 100%) !important;
}
</style>
