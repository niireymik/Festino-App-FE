import { defineStore } from "pinia";
import { ref } from "vue";

export const usePersonalInfoStore = defineStore('personalInfoStore', () => {
  const isAgreed = ref(false);

  const handleClickAgreeCheckBox = () => {
    isAgreed.value = !isAgreed.value;
  }

  return {
    isAgreed,
    handleClickAgreeCheckBox,
  }
});