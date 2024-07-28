<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

const name = ref(props.modelValue);
const isFocused = ref(false);
const emit = defineEmits(['update:modelValue']);

const limitInputLength = (event) => {
  let filteredInput = event.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g, '');

  if (filteredInput.length > 5) {
    filteredInput = filteredInput.slice(0, 5);
  }

  event.target.value = filteredInput;
  emit('update:modelValue', filteredInput);
};
</script>

<template>
  <div class="text-xs">이름</div>
  <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
    <img src="/icons/person.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none bg-inherit"
      v-model=name
      type="text"
      @input="limitInputLength($event)"
      placeholder="티노"
      maxlength="5"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </div>
  <hr
    class="mb-[30px] border-0 h-[1px]"
    :class="{
      'bg-primary-900': isFocused,
      'bg-secondary-500-light-20': !isFocused,
    }"
  />
</template>

<style lang="css" scoped></style>
