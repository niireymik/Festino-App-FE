<script setup>
import { ref, watchEffect } from 'vue';
import InputName from './InputName.vue';
import InputPhoneNum from './InputPhoneNum.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 13;
});

const { openSearchReserveModal } = useTablingModalStore();
const handleClickSearchButton = () => {
  if (!isInputFill.value) return;
  openSearchReserveModal();
};
</script>

<template>
  <div class="w-screen max-w-[500px] min-w-[375px]">
    <div class="w-full h-full flex flex-col dynamic-padding pt-12 justify-between flex-grow">
      <div class="px-4">
        <InputName v-model="name" />
        <InputPhoneNum v-model="phoneNum" />
      </div>
      <button
        class="w-full h-[54px] text-white font-bold rounded-xl mb-20 mt-5"
        :class="isInputFill ? 'bg-primary-900' : 'bg-secondary-100'"
        @click="handleClickSearchButton()"
      >
        조회하기
      </button>
    </div>
  </div>
</template>

<style lang="css">
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
