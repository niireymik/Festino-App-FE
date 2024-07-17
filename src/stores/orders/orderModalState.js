import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOrderModalStore = defineStore('orderModal', () => {
  const orderModalState = ref(false);
  const openOrderModal = () => {
    orderModalState.value = true;
  };
  const closeOrderModal = () => {
    orderModalState.value = false;
  };

  const orderCheckModalState = ref(false);
  const openOrderCheckModal = () => {
    orderCheckModalState.value = true;
  };
  const closeOrderCheckModal = () => {
    orderCheckModalState.value = false;
  };

  const orderCompleteModalState = ref(false);
  const openOrderCompleteModal = () => {
    orderCompleteModalState.value = true;
  };
  const closeOrderCompleteModal = () => {
    orderCompleteModalState.value = false;
  };

  const notExistOrderModalState = ref(false);
  const openNotExistOrderModal = () => {
    notExistOrderModalState.value = true;
  };
  const closeNotExistOrderModal = () => {
    notExistOrderModalState.value = false;
  };
  return {
    orderModalState,
    openOrderModal,
    closeOrderModal,
    orderCheckModalState,
    openOrderCheckModal,
    closeOrderCheckModal,
    orderCompleteModalState,
    openOrderCompleteModal,
    closeOrderCompleteModal,
    notExistOrderModalState,
    openNotExistOrderModal,
    closeNotExistOrderModal,
  };
});
