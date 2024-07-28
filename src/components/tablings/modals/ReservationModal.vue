<script setup>
import { onMounted, ref } from 'vue';
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';
import InputPersonNum from '@/components/tablings/InputPersonNum.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';
import ModalBackground from '@/components/modals/ModalBackground.vue';

const { closeReserveModal } = useTablingModalStore();
const { setUserName, checkDuplicateReserve, saveRecentInfo } = useReservationStore();
const { selectedNightBoothInfo, isLoading, openNightBoothInfo, reserveInfo, recentName, recentPhoneNum } = storeToRefs(useReservationStore());

const personNum = ref(null);
const regex = /^010/;
const isSumbit = ref(false);

const handleClickReserveButton = async () => {
  console.log(
    'click reserve button',
    recentName.value,
    recentPhoneNum.value.replace(/-/g, ''),
    personNum.value,
    selectedNightBoothInfo.value.boothId,
  );
  if (
    recentName.value < 2 ||
    recentPhoneNum.value.length !== 13 ||
    personNum.value == 0 ||
    !regex.test(recentPhoneNum.value) ||
    isSumbit.value
  )
    return;

  reserveInfo.value = {
    userName: recentName.value,
    phoneNum: recentPhoneNum.value.replace(/-/g, ''),
    personCount: personNum.value,
    boothId: selectedNightBoothInfo.value.boothId,
  };
  checkDuplicateReserve(recentPhoneNum.value);
  isSumbit.value = true;
  setUserName(recentName.value);
  isSumbit.value = false;
  closeReserveModal();
};

const newNightBooth = ref({});
onMounted(() => {
  newNightBooth.value = openNightBoothInfo.value.find((info) => info.boothId === selectedNightBoothInfo.value.boothId);
});
</script>

<template>
  <ModalBackground :closeModal="closeReserveModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-[21px] py-7 gap-7"
      @click.stop=""
    >
      <div class="text-secondary-700 text-xl font-semibold">{{ newNightBooth.adminName }} 부스 예약</div>
      <div class="w-full flex flex-col justify-start px-4">
        <InputName v-model="recentName" />
        <div class="mb-[30px]">
          <InputPhoneNum v-model="recentPhoneNum" />
        </div>
        <InputPersonNum v-model="personNum" />
      </div>
      <div class="flex flex-row justify-between p-4 bg-primary-900-light-6 rounded-lg-xl w-full">
        <div>현재 대기 팀</div>
        <div>{{ newNightBooth.totalReservationNum }} 팀</div>
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
  </ModalBackground>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(386 / 430 * 100%) !important;
}
</style>
