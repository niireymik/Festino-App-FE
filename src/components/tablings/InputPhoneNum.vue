<template>
  <div class="text-xs">전화번호</div>
  <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5">
    <img src="/icons/person.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none"
      type="tel"
      placeholder="010-1234-5678"
      @input="formattedPhoneNum($event), updateInputValue($event.target.value)"
      maxlength="13"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});
const emit = defineEmits(['update:modelValue']);

const inputValue = ref(props.modelValue);

const updateInputValue = (value) => {
  inputValue.value = value;
  emit('update:modelValue', value);
};
const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  if (inputValue.length > 3 && inputValue.length < 8) {
    event.target.value = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    event.target.value = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }
};
</script>

<style lang="css" scoped></style>
