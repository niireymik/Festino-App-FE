<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isState: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="isState ? 'is-state-show-true' : 'is-state-show-false'">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped></style>