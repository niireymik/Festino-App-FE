import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modalStore', () => {
  const clubModalState = ref(false);
  const talentModalState = ref(false);
  const modalData = ref([]);

  const handleClickOpenModal = (category, show) => {
    modalData.value = show;
    if (category == "talent") talentModalState.value = true;
    else clubModalState.value = true;
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
