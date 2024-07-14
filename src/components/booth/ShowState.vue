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
  <div v-if="isState" class="is-state-show-true">
    <slot></slot>
  </div>
  <div v-else class="is-state-show-false">
    <slot></slot>
  </div>
</template>

<style lang="css" scoped></style>