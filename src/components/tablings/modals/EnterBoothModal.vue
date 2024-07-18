<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';

const { closeEnterBoothModal } = useTablingModalStore();

onMounted(() => {
  const height = enterBoothModal.value.offsetHeight;
  const currentScroll = window.scrollY;

  enterBoothModal.value.style.top = `${currentScroll + (window.innerHeight - height) / 2}px`;
});
const enterBoothModal = ref(null);
const { reservationInfo } = storeToRefs(useReservationStore());
</script>

<template>
  <div
    class="w-full h-full absolute top-0 left-0 bg-opacity-60 bg-black z-50 overflow-hidden"
    @click="closeEnterBoothModal()"
  >
    <div
      class="dynamic-modal-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 absolute left-1/2 transform -translate-x-1/2"
      ref="enterBoothModal"
      @click.stop=""
    >
      <div class="w-12 h-12 bg-primary-900-light-16 rounded-full grid place-items-center">
        <img src="/icons/info.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center text-center">
        <p class="text-secondary-700 text-xl font-bold">입장안내</p>
        <p class="text-secondary-500">
          앞에 대기 팀이 없어요!<br />
          <span class="font-bold text-primary-900">{{ reservationInfo.adminName }}</span>
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
  </div>
</template>

<style lang="css" scoped>
.dynamic-modal-width {
  width: calc(390 / 430 * 100%) !important;
}
</style>
