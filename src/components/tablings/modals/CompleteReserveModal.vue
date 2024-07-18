<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { onMounted, ref } from 'vue';

const { closeCompleteReserveModal } = useTablingModalStore();

onMounted(() => {
  const height = completeReserveModal.value.offsetHeight;
  const currentScroll = window.scrollY;

  completeReserveModal.value.style.top = `${currentScroll + (window.innerHeight - height) / 2}px`;
});
const completeReserveModal = ref(null);
</script>

<template>
  <div
    class="w-full h-full absolute top-0 left-0 bg-opacity-60 bg-black z-50 overflow-hidden"
    @click="closeCompleteReserveModal()"
  >
    <div
      class="dynamic-modal-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 absolute left-1/2 transform -translate-x-1/2"
      ref="completeReserveModal"
      @click.stop=""
    >
      <div class="w-12 h-12 rounded-full bg-primary-900-light-16 grid place-items-center">
        <img src="/icons/info.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center">
        <p class="text-secondary-700 text-xl font-bold">예약완료</p>
        <p class="text-secondary-500">예약이 완료되었습니다.</p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="closeCompleteReserveModal()"
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
