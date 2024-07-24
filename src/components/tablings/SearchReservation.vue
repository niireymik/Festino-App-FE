<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { is } from 'date-fns/locale';

const { getReservation, setUserName } = useReservationStore();

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);
const regex = /^010/;
const isInputPhoneNumFocused = ref(false);
const isInputNameFocused = ref(false);

const handleClickSearchButton = async () => {
  if (!isInputFill.value) return;
  const inputInfo = { userName: name.value, phoneNum: phoneNum.value };
  await getReservation(inputInfo);
  setUserName(name.value);
};

const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  let formattedValue = '';

  if (inputValue.length > 3 && inputValue.length < 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    formattedValue = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }

  event.target.value = formattedValue;
  phoneNum.value = inputValue;
};

const limitInputLength = (event) => {
  let filteredInput = event.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g, '');

  if (filteredInput.length > 5) {
    filteredInput = filteredInput.slice(0, 5);
  }
  event.target.value = filteredInput;
  name.value = filteredInput;
};

const handleScrollToFocusInput = () => {
  if (isInputNameFocused.value) {
    document.getElementById('nameInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (isInputPhoneNumFocused.value) {
    document.getElementById('phoneNumInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

watchEffect(() => {
  handleScrollToFocusInput();
});

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 11 && regex.test(phoneNum.value);
});
</script>

<template>
  <div class="w-screen max-w-[500px] min-w-[375px]">
    <div class="w-full h-full flex flex-col dynamic-padding pt-12 justify-between flex-grow">
      <div class="px-4">
        <div class="text-xs">이름</div>
        <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
          <img src="/icons/person.svg" class="w-6 h-6" />
          <input
            class="flex-1 focus:outline-none bg-inherit"
            type="text"
            @input="limitInputLength($event)"
            placeholder="티노"
            maxlength="5"
            @focus="isInputNameFocused = true"
            @blur="isInputNameFocused = false"
            id="nameInput"
          />
        </div>
        <hr
          class="mb-[30px] border-0 h-[1px]"
          :class="{
            'bg-primary-900': isInputNameFocused,
            'bg-secondary-500-light-20': !isInputNameFocused,
          }"
        />
        <div class="text-xs">전화번호</div>
        <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
          <img src="/icons/phone.svg" class="w-6 h-6" />
          <input
            class="flex-1 focus:outline-none bg-inherit"
            type="tel"
            placeholder="010-1234-5678"
            @input="formattedPhoneNum($event)"
            maxlength="13"
            @focus="isInputPhoneNumFocused = true"
            @blur="isInputPhoneNumFocused = false"
            id="phoneNumInput"
          />
        </div>
        <hr
          class="border-0 h-[1px]"
          :class="{
            'bg-primary-900': isInputPhoneNumFocused,
            'bg-secondary-500-light-20': !isInputPhoneNumFocused,
          }"
        />
      </div>
      <div class="px-5">
        <button
          class="w-full h-[60px] text-white font-bold rounded-10xl mb-20 mt-5"
          :class="isInputFill ? 'bg-primary-900' : 'bg-secondary-100'"
          @click="handleClickSearchButton"
        >
          조회하기
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
