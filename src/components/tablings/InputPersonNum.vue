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
const inputValue = ref(props.modelValue);

const updateInputValue = (value) => {
  inputValue.value = value;
  emit('update:modelValue', value);
};

const handlePersonNumInput = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  event.target.value = inputValue;
};
</script>

<template>
  <div class="text-xs">인원 수</div>
  <div
    class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5"
    :class="{ 'border-b-2 border-primary-900': isFocused, 'border-b-1 border-secondary-500': !isFocused }"
  >
    <img src="/icons/person-plus.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none bg-inherit"
      type="text"
      placeholder="00명"
      inputmode="numeric"
      pattern="\d*"
      maxlength="2"
      @input="handlePersonNumInput($event), updateInputValue($event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<style lang="css" scoped></style>
