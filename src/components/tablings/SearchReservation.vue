<script setup>
import { ref, watchEffect } from 'vue';
import SearchReservationModal from './SearchReservationModal.vue';
import InputName from './InputName.vue';
import InputPhoneNum from './InputPhoneNum.vue';

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 13;
});

const searchReserveModalState = ref(false);
const handleClickSearchButton = () => {
  if (!isInputFill.value) return;
  searchReserveModalState.value = true;
};
const handleCloseSearchReserveModal = () => {
  searchReserveModalState.value = false;
};

const handleStopScroll = () => {
  if (searchReserveModalState.value) document.body.style = 'overflow:hidden';
  else document.body.style = 'overflow:auto';
};

watchEffect(() => {
  handleStopScroll();
});
</script>

<template>
  <div v-if="searchReserveModalState">
    <SearchReservationModal :handleCloseSearchReserveModal="handleCloseSearchReserveModal" />
  </div>
  <div class="flex flex-col dynamic-padding pt-16 h-full justify-between w-full flex-grow">
    <div class="px-4">
      <InputName v-model="name" />
      <InputPhoneNum v-model="phoneNum" />
    </div>
    <button
      class="w-full h-[54px] text-white font-bold rounded-xl mb-16 mt-5"
      :class="isInputFill ? 'bg-primary-900' : 'bg-secondary-100'"
      @click="handleClickSearchButton()"
    >
      조회하기
    </button>
  </div>
</template>

<style lang="css">
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
