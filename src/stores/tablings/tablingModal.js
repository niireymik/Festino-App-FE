import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTablingModalStore = defineStore('tablingModal', () => {
  const reserveModalState = ref(false);

  const openReserveModal = () => {
    reserveModalState.value = true;
  };
  const closeReserveModal = () => {
    reserveModalState.value = false;
  };

  const searchReserveModalState = ref(false);
  const openSearchReserveModal = () => {
    searchReserveModalState.value = true;
  };
  const closeSearchReserveModal = () => {
    searchReserveModalState.value = false;
  };

  const completeReserveModalState = ref(false);
  const openCompleteReserveModal = () => {
    completeReserveModalState.value = true;
  };
  const closeCompleteReserveModal = () => {
    completeReserveModalState.value = false;
  };

  const noReserveModalState = ref(false);
  const openNoReserveModal = () => {
    noReserveModalState.value = true;
  };
  const closeNoReserveModal = () => {
    noReserveModalState.value = false;
  };
  return {
    reserveModalState,
    openReserveModal,
    closeReserveModal,
    searchReserveModalState,
    openSearchReserveModal,
    closeSearchReserveModal,
    completeReserveModalState,
    openCompleteReserveModal,
    closeCompleteReserveModal,
    noReserveModalState,
    openNoReserveModal,
    closeNoReserveModal,
  };
});
