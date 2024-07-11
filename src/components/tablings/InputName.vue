<template>
  <div class="text-xs">이름</div>
  <div class="h-11 w-full flex flex-row border-b-1 border-secondary-500 items-center py-2.5 gap-2.5 mb-[30px]">
    <img src="/icons/person.svg" class="w-6 h-6" />
    <input
      class="flex-1 focus:outline-none bg-inherit"
      type="text"
      :value="inputValue"
      @input="limitInputLength($event), updateInputValue($event.target.value)"
      placeholder="티노"
      maxlength="10"
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
const limitInputLength = (event) => {
  if (event.target.value.length > 10) {
    event.target.value = event.target.value.slice(0, 10);
  }
};
</script>

<style lang="css" scoped></style>
