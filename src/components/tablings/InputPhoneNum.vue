<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const isFocused = ref(false);
const emit = defineEmits(['update:modelValue']);

const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  if (inputValue.length > 3 && inputValue.length < 8) {
    event.target.value = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    event.target.value = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }
  emit('update:modelValue', inputValue);
};
</script>

<template>
  <div class="text-xs">전화번호</div>
  <div
    class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5"
    :class="{ 'border-b-2 border-primary-900': isFocused, 'border-b-1 border-secondary-500-light-20': !isFocused }"
  >
    <img src="/icons/phone.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none bg-inherit"
      type="tel"
      placeholder="010-1234-5678"
      @input="formattedPhoneNum($event)"
      maxlength="13"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<style lang="css" scoped></style>
