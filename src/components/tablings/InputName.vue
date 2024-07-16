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

const limitInputLength = (event) => {
  let filteredInput = event.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g, '');

  // 10자 제한
  if (filteredInput.length > 10) {
    filteredInput = filteredInput.slice(0, 10);
  }

  event.target.value = filteredInput;
  emit('update:modelValue', filteredInput);
};
</script>

<template>
  <div class="text-xs">이름</div>
  <div
    class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5 mb-[30px]"
    :class="{
      'shadow-s-primary-900': isFocused,
      'shadow-s-secondary-500-20': !isFocused,
    }"
  >
    <img src="/icons/person.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none bg-inherit"
      type="text"
      @input="limitInputLength($event)"
      placeholder="티노"
      maxlength="10"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
</template>

<style lang="css" scoped></style>
