<script setup>
import { ref, watchEffect } from 'vue';

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);

watchEffect((name, phoneNum) => {
  isInputFill.value = name.value && phoneNum.value;
});
</script>

<template>
  <div class="flex flex-col dynamic-padding pt-16 h-full">
    <div class="flex flex-col gap-1.5 px-4">
      <div class="text-xs">이름</div>
      <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5">
        <div class="h-6 w-6 bg-red-50"></div>
        <input class="text-secondary-100 flex-1 focus:outline-none" type="text" placeholder="홍길동" v-model="name" />
      </div>
    </div>
    <div class="flex flex-col gap-1.5 px-4 pt-[30px]">
      <div class="text-xs">전화번호</div>
      <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5">
        <div class="h-6 w-6 bg-red-50"></div>
        <input
          class="text-secondary-100 flex-1 focus:outline-none"
          type="number"
          placeholder="010-1234-5678"
          v-model="phoneNum"
        />
      </div>
    </div>
    <div class="flex-1"></div>

    <button
      class="mx-5 h-[54px] bg-secondary-100 text-white font-bold rounded-xl"
      :class="{ 'bg-primary-900': isInputFill }"
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
