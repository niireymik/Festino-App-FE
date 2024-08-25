<script setup>
import { onMounted, ref } from 'vue';
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';
import InputPersonNum from '@/components/tablings/InputPersonNum.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';
import ModalBackground from '@/components/modals/ModalBackground.vue';
import { formatPhoneNum } from '@/utils/utils';
import PersonalInfo from '@/components/PersonalInfo.vue';
import { usePersonalInfoStore } from '@/stores/personalInfoStore';

const { closeReserveModal } = useTablingModalStore();
const { setUserName, checkDuplicateReserve } = useReservationStore();
const { selectedNightBoothInfo, openNightBoothInfo, reserveInfo, recentName, recentPhoneNum } = storeToRefs(
  useReservationStore(),
);
const { isAgreed } = storeToRefs(usePersonalInfoStore());

const personNum = ref(null);
const regex = /^010/;
const isSumbit = ref(false);
const dataError = ref(false);

const handleClickReserveButton = async () => {
  if (
    recentName.value.length < 2 ||
    recentPhoneNum.value.length !== 13 ||
    personNum.value == 0 || !personNum.value ||
    !isAgreed.value ||
    !regex.test(formatPhoneNum(recentPhoneNum.value)) ||
    isSumbit.value
  ) {
    dataError.value = true;
    return;
  };

  reserveInfo.value = {
    userName: recentName.value,
    phoneNum: formatPhoneNum(recentPhoneNum.value),
    personCount: personNum.value,
    boothId: selectedNightBoothInfo.value.boothId,
  };
  checkDuplicateReserve(formatPhoneNum(recentPhoneNum.value));
  isSumbit.value = true;
  setUserName(recentName.value);
  isSumbit.value = false;
  closeReserveModal();
};

const newNightBooth = ref({});
onMounted(() => {
  isAgreed.value = false;
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
      <div class="w-full flex flex-col justify-start px-4" @click="dataError = false">
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
      <div class="ml-2 w-full flex justify-start">
        <PersonalInfo />
      </div>
      <div class="w-full flex flex-row justify-between gap-[10px]">
        <button
          class="w-full h-[43px] bg-white text-primary-900 font-bold rounded-10xl border-1 border-primary-900-light-68"
          @click="closeReserveModal()"
        >
          닫기
        </button>
        <button
          class="w-full h-[43px] font-bold rounded-10xl bg-primary-900 text-white"
          :class="recentName.length >= 2 && recentPhoneNum.length === 13 && personNum && isAgreed ? 'bg-primary-900' : 'bg-gray-300'"
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
