import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useBaseModal } from './baseModal';

export const useModalStore = defineStore('modalStore', () => {
  const { openModal } = useBaseModal();

  const clubModalState = ref(false);
  const modalData = ref([]);

  const handleClickOpenModal = (show) => {
    modalData.value = show;
    openModal('clubModal');
  };

  const handleCloseModal = () => {
    clubModalState.value = false;
  };

  return {
    clubModalState,
    modalData,
    handleClickOpenModal,
    handleCloseModal,
  };
});
