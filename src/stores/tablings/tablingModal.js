import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useBaseModal } from '../baseModal';

export const useTablingModalStore = defineStore('tablingModal', () => {
  const baseModalStore = useBaseModal();

  const reserveModalState = ref(false);

  const openReserveModal = () => {
    baseModalStore.openModal();
    baseModalStore.setModalType('reserveModal');
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
    reserveModalState.value = false;
    searchReserveModalState.value = false;
    completeReserveModalState.value = false;
    noReserveModalState.value = false;
    failReserveModalState.value = false;
    enterBoothModalState.value = false;
    messageFailModalState.value = false;
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
