import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBaseModal = defineStore('baseModal', () => {
  const isModalOpen = ref(false);

  const modalType = ref('');
  const setModalType = (type) => {
    modalType.value = type;
  };

  const openModal = (type) => {
    isModalOpen.value = true;
    setModalType(type);
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    modalType,
    setModalType,
    openModal,
    closeModal,
  };
});
