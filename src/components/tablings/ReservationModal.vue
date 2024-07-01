<script setup>
import { onMounted, ref } from 'vue';
import InputName from './InputName.vue';
import InputPhoneNum from './InputPhoneNum.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';

const name = ref('');
const phoneNum = ref('');
const personNum = ref('');

const reserveModal = ref(null);

const handlePersonNumInput = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  event.target.value = inputValue;
};

const { closeReserveModal } = useTablingModalStore();

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
      <div class="text-secondary-700 text-xl font-semibold">디자인과 부스 예약</div>
      <div class="w-full flex flex-col justify-start px-4">
        <InputName v-model="name" />
        <div class="mb-[30px]">
          <InputPhoneNum v-model="phoneNum" />
        </div>
        <div class="text-xs">인원 수</div>
        <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5">
          <img src="/icons/person-plus.svg" class="w-6 h-6" />
          <input
            class="flex-1 focus:outline-none bg-inherit"
            type="text"
            placeholder="00명"
            v-model="personNum"
            inputmode="numeric"
            pattern="\d*"
            maxlength="2"
            @input="handlePersonNumInput($event)"
          />
        </div>
      </div>
      <div class="flex flex-col w-full h-[78px] bg-primary-900-light rounded-lg-xl gap-3 p-4 text-sm justify-center">
        <div class="flex flex-row justify-between">
          <div>대기번호</div>
          <div>103번</div>
        </div>
        <div class="flex flex-row justify-between">
          <div>현재 대기 팀</div>
          <div>5팀</div>
        </div>
      </div>
      <div class="w-full flex flex-row justify-between gap-[10px]">
        <button
          class="w-full h-[43px] bg-secondary-100 text-white font-bold rounded-lg-xl"
          @click="closeReserveModal()"
        >
          닫기
        </button>
        <button class="w-full h-[43px] bg-primary-900 text-white font-bold rounded-lg-xl">예약하기</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-modal-width {
  width: calc(386 / 430 * 100%) !important;
}
</style>
