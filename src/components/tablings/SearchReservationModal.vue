<script setup>
import { useTablingModalStore } from '@/stores/tablings/tablingModal';

const { closeSearchReserveModal } = useTablingModalStore();
</script>

<template>
  <div class="w-full h-full fixed top-0 left-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div class="dynamic-modal-width h-[458px] bg-white rounded-3xl flex flex-col items-center gap-7 py-7 px-[21px]">
      <!-- todo when design complete -->
      <div class="w-full h-[27px]">디자인과 기계공학 예약추가</div>
      <div class="w-full h-[141px] flex flex-col gap-1 items-center justify-center leading-none mb-3">
        <div class="text-primary-900 font-bold relative">
          <span class="text-10xl">17</span>
          <span class="text-xl absolute w-[35px] bottom-2 -right-4">번째</span>
        </div>
        <div class="text-secondary-500 font-bold">
          <span>규리님 앞에</span>
          <span class="text-secondary-700 text-xl"> 22</span>
          <span>팀이 대기중입니다.</span>
        </div>
      </div>
      <div class="flex flex-col w-full h-[107px] bg-primary-900-light rounded-lg-xl gap-3 p-4 text-sm justify-center">
        <div class="flex flex-row justify-between">
          <div>대기번호</div>
          <div>103번</div>
        </div>
        <div class="flex flex-row justify-between">
          <div>예상 대기시간</div>
          <div>40분</div>
        </div>
        <div class="flex flex-row justify-between">
          <div>인원</div>
          <div>5명</div>
        </div>
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
