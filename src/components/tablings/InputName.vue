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
  if (event.target.value.length > 10) {
    event.target.value = event.target.value.slice(0, 10);
  }
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="text-xs">이름</div>
  <div
    class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5 mb-[30px]"
    :class="{ 'border-b-2 border-primary-900': isFocused, 'border-b-1 border-secondary-500': !isFocused }"
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
