import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useBaseModal } from './baseModal';

export const useModalStore = defineStore('modalStore', () => {
  const { openModal } = useBaseModal();

  const clubModalState = ref(false);
  const talentModalState = ref(false);
  const modalData = ref([]);

  const handleClickOpenModal = (category, show) => {
    modalData.value = show;
    if (category == 'talent') openModal('talentModal');
    else openModal('clubModal');
  };

  const handleCloseModal = () => {
    talentModalState.value = false;
    clubModalState.value = false;
  };

  return {
    clubModalState,
    talentModalState,
    modalData,
    handleClickOpenModal,
    handleCloseModal,
  };
});
