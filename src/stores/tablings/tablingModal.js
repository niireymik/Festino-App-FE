import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTablingModalStore = defineStore('tablingModal', () => {
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

  const failReserveModalState = ref(false);
  const openFailReserveModal = () => {
    failReserveModalState.value = true;
  };
  const closeFailReserveModal = () => {
    failReserveModalState.value = false;
  };

  const enterBoothModalState = ref(false);
  const openEnterBoothModal = () => {
    enterBoothModalState.value = true;
  };
  const closeEnterBoothModal = () => {
    enterBoothModalState.value = false;
  };

  const messageFailModalState = ref(false);
  const openMessageFailModal = () => {
    messageFailModalState.value = true;
  };
  const closeMessageFailModal = () => {
    messageFailModalState.value = false;
  };

  const duplicateModalState = ref(false);
  const openDuplicateModal = () => {
    duplicateModalState.value = true;
  };
  const closeDuplicateModal = () => {
    duplicateModalState.value = false;
  };

  const resetModalState = () => {
    completeReserveModalState.value = false;
    noReserveModalState.value = false;
    failReserveModalState.value = false;
    enterBoothModalState.value = false;
    messageFailModalState.value = false;
  };
  return {
    openCompleteReserveModal,
    closeCompleteReserveModal,
    noReserveModalState,
    openNoReserveModal,
    closeNoReserveModal,
    failReserveModalState,
    openFailReserveModal,
    closeFailReserveModal,
    enterBoothModalState,
    openEnterBoothModal,
    closeEnterBoothModal,
    resetModalState,
    messageFailModalState,
    openMessageFailModal,
    closeMessageFailModal,
    duplicateModalState,
    openDuplicateModal,
    closeDuplicateModal,
  };
});
