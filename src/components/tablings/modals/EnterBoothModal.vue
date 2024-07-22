<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';
import ModalBackground from '@/components/modals/ModalBackground.vue';

const { closeEnterBoothModal } = useTablingModalStore();

const { reservationInfo } = storeToRefs(useReservationStore());
</script>

<template>
  <ModalBackground :closeModal="closeEnterBoothModal">
    <div
      class="relative col-start-2 row-start-2 h-full w-full bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5"
    >
      <div class="w-12 h-12 bg-primary-900-light-16 rounded-full grid place-items-center">
        <img src="/icons/info.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center text-center">
        <p class="text-secondary-700 text-xl font-bold">입장안내</p>
        <p class="text-secondary-500">
          앞에 대기 팀이 없어요!<br />
          <span class="font-bold text-primary-900">
            {{ reservationInfo.adminName }}
          </span>
          부스로 입장해주세요.
        </p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="closeEnterBoothModal()"
      >
        확인
      </button>
    </div>
  </ModalBackground>
</template>

<style lang="css" scoped></style>
