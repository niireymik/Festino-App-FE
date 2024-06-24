<script setup>
import { ref, watchEffect } from 'vue';

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);

const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  if (inputValue.length > 3 && inputValue.length < 8) {
    event.target.value = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    event.target.value = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }
};

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 13;
});
</script>

<template>
  <div class="flex flex-col dynamic-padding pt-16 h-full justify-between w-full flex-grow">
    <div class="px-4">
      <div class="flex flex-col gap-1.5">
        <div class="text-xs">이름</div>
        <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5">
          <img src="/public//icons/person.svg" class="w-6 h-6" />
          <input class="flex-1 focus:outline-none" type="text" placeholder="티노" v-model="name" />
        </div>
      </div>
      <div class="flex flex-col gap-1.5 pt-[30px]">
        <div class="text-xs">전화번호</div>
        <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5">
          <img src="/public//icons/person.svg" class="w-6 h-6" />
          <input
            class="flex-1 focus:outline-none"
            type="tel"
            placeholder="010-1234-5678"
            @input="formattedPhoneNum($event)"
            maxlength="13"
            required
            v-model="phoneNum"
          />
        </div>
      </div>
    </div>

    <button
      class="w-full h-[54px] text-white font-bold rounded-xl mb-[30px] mt-5"
      :class="isInputFill ? 'bg-primary-900' : 'bg-secondary-100'"
    >
      조회하기
    </button>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
