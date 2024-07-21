<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { onMounted, ref } from 'vue';

const { closeMessageFailModal } = useTablingModalStore();

onMounted(() => {
  const height = messageFailModal.value.offsetHeight;
  const currentScroll = window.scrollY;

  messageFailModal.value.style.top = `${currentScroll + (window.innerHeight - height) / 2}px`;
});
const messageFailModal = ref(null);
</script>

<template>
  <div
    class="w-full h-full absolute top-0 left-0 bg-opacity-60 bg-black z-50 overflow-hidden"
    @click="closeMessageFailModal()"
  >
    <div
      class="dynamic-modal-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 absolute left-1/2 transform -translate-x-1/2"
      ref="messageFailModal"
      @click.stop=""
    >
      <div class="w-12 h-12 bg-error rounded-full grid place-items-center">
        <img src="/icons/orders/error.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center text-center">
        <p class="text-secondary-700 text-xl font-bold">메세지 전송 실패</p>
        <p class="text-secondary-500">예약 조회를 통해<br />예약 여부를 확인해주세요.</p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="closeMessageFailModal()"
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
