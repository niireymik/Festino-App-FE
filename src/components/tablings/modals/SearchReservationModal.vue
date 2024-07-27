<script setup>
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { storeToRefs } from 'pinia';
import ModalBackground from '@/components/modals/ModalBackground.vue';

const { closeSearchReserveModal } = useTablingModalStore();
const { reservationInfo, userName } = storeToRefs(useReservationStore());
</script>

<template>
  <ModalBackground :closeModal="closeSearchReserveModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-[21px] py-7 gap-7"
      @click.stop=""
    >
      <div class="w-full h-[19px] text-secondary-700 font-semibold text-center">
        {{ reservationInfo.adminName }} 부스 예약
      </div>
      <div class="w-full h-[122px] flex flex-col gap-1 items-center justify-start leading-none mb-3">
        <div class="text-primary-900 font-bold relative h-[94px]">
          <div class="text-10xl relative">
            {{ reservationInfo.totalTeamCount }}
            <span class="text-xl absolute bottom-2 w-[35px]">번째</span>
          </div>
        </div>
        <div class="text-secondary-500 font-bold break-keep">
          <span>{{ userName }}님 앞에 </span>
          <span class="text-secondary-700 text-xl">{{ reservationInfo.totalTeamCount - 1 }}</span>
          <span>팀이 대기중입니다.</span>
        </div>
      </div>
      <div class="flex flex-col w-full h-[78px] bg-primary-900-light-6 rounded-lg-xl gap-3 p-4 text-sm justify-center">
        <div class="flex flex-row justify-between">
          <div>예약번호</div>
          <div>{{ reservationInfo.reservationNum }}번</div>
        </div>
        <div class="flex flex-row justify-between">
          <div>인원</div>
          <div>{{ reservationInfo.personCount }}명</div>
        </div>
      </div>
      <div class="w-full text-center text-xs text-secondary-500 h-[19px]">
        <span class="text-base">※ </span>
        대기팀이 1팀일 때 알림이 전송됩니다.
      </div>
      <button
        class="w-full h-[43px] text-white font-bold rounded-10xl border-1 border-primary-900-light-68 shrink-0 bg-primary-900"
        @click="closeSearchReserveModal()"
      >
        확인
      </button>
    </div>
  </ModalBackground>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(386 / 430 * 100%) !important;
}
</style>
