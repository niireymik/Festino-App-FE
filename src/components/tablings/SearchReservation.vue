<script setup>
import { ref, watch, watchEffect } from 'vue';
import { useReservationStore } from '@/stores/tablings/tablingStore';
import { storeToRefs } from 'pinia';
import { formatPhoneNum } from '@/utils/utils';

const { getReservation, setUserName } = useReservationStore();
const { recentName, recentPhoneNum } = storeToRefs(useReservationStore());

const isInputFill = ref(false);
const regex = /^010/;
const isInputPhoneNumFocused = ref(false);
const isInputNameFocused = ref(false);

const handleClickSearchButton = async () => {
  if (!isInputFill.value) return;
  const inputInfo = { userName: recentName.value, phoneNum: formatPhoneNum(recentPhoneNum.value) };
  await getReservation(inputInfo);
  setUserName(recentName.value);
};

const formattedPhoneNum = (phone) => {
  const inputValue = phone.replace(/\D/g, '');
  let formattedValue = '';

  if (inputValue.length > 3 && inputValue.length < 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else if (inputValue.length >= 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  } else {
    formattedValue = inputValue;
  }
  return formattedValue;
};

const limitInputLength = (event) => {
  let filteredInput = event.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g, '');

  if (filteredInput.length > 5) {
    filteredInput = filteredInput.slice(0, 5);
  }
  event.target.value = filteredInput;
  recentName.value = filteredInput;
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
  isInputFill.value =
    recentName.value.length >= 2 && recentPhoneNum.value.length == 13 && regex.test(recentPhoneNum.value);
});

watch(recentPhoneNum, (newNum) => {
  const formattedValue = formattedPhoneNum(newNum);
  if (newNum !== formattedValue) {
    recentPhoneNum.value = formattedValue;
  }
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
            v-model="recentName"
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
            v-model="recentPhoneNum"
            placeholder="010-1234-5678"
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
