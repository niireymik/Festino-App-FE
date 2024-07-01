<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { onMounted, ref } from 'vue';

const serachReserveModal = ref(null);
const { closeSearchReserveModal } = useTablingModalStore();

onMounted(() => {
  const height = serachReserveModal.value.offsetHeight;
  const currentScroll = window.scrollY;

  serachReserveModal.value.style.top = `${currentScroll + (window.innerHeight - height) / 2}px`;
});
</script>

<template>
  <div
    class="w-full h-full absolute top-0 left-0 bg-opacity-60 bg-black z-50 flex overflow-hidden"
    @click="closeSearchReserveModal"
  >
    <div
      ref="serachReserveModal"
      class="dynamic-modal-width h-[449px] bg-white rounded-3xl flex flex-col items-center justify-center gap-7 py-7 px-[21px] absolute left-1/2 transform -translate-x-1/2"
      @click.stop=""
    >
      <div class="w-full h-[19px] text-secondary-700 font-semibold text-center">디자인과 부스 예약</div>
      <div class="w-full h-[122px] flex flex-col gap-1 items-center justify-start leading-none mb-3">
        <div class="text-primary-900 font-bold relative h-[94px]">
          <span class="text-10xl mr-2">17</span>
          <span class="text-xl absolute -right-3 bottom-1">번째</span>
        </div>
        <div class="text-secondary-500 font-bold">
          <span>규리님 앞에</span>
          <span class="text-secondary-700 text-xl"> 22</span>
          <span>팀이 대기중입니다.</span>
        </div>
      </div>
      <div class="flex flex-col w-full h-[78px] bg-primary-900-light rounded-lg-xl gap-3 p-4 text-sm justify-center">
        <div class="flex flex-row justify-between">
          <div>대기번호</div>
          <div>103번</div>
        </div>
        <div class="flex flex-row justify-between">
          <div>인원</div>
          <div>5명</div>
        </div>
      </div>
      <div class="w-full text-center text-xs text-secondary-500 h-[19px]">
        <span class="text-base">※ </span>
        대기팀이 1팀일 때 알림이 전송됩니다.
      </div>
      <div class="w-full flex flex-row justify-between gap-[10px]">
        <button class="w-full h-[43px] bg-secondary-100 text-white font-bold rounded-lg-xl">예약 취소</button>
        <button
          class="w-full h-[43px] bg-primary-900 text-white font-bold rounded-lg-xl"
          @click="closeSearchReserveModal()"
        >
          확인
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
