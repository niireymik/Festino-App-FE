<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const phoneNum = ref(props.modelValue);
const isFocused = ref(false);
const emit = defineEmits(['update:modelValue']);

const formattedPhoneNum = (inputValue) => {
  inputValue = inputValue.replace(/\D/g, '');
  let formattedValue = '';

  if (inputValue.length > 3 && inputValue.length < 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else if (inputValue.length >= 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  } else {
    formattedValue = inputValue;
  }
  return formattedValue;
};

watch(phoneNum, (newNum) => {
  const formattedValue = formattedPhoneNum(newNum);
  if (newNum !== formattedValue) {
    phoneNum.value = formattedValue;
  }
  emit('update:modelValue', newNum);
});
</script>

<template>
  <div class="text-xs">전화번호</div>
  <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
    <img src="/icons/phone.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none bg-inherit"
      type="tel"
      v-model="phoneNum"
      placeholder="010-1234-5678"
      maxlength="13"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
  <hr
    class="border-0 h-[1px]"
    :class="{
      'bg-primary-900': isFocused,
      'bg-secondary-500-light-20': !isFocused,
    }"
  />
</template>

<style lang="css" scoped></style>
