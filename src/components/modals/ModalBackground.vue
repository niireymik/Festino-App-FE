<script setup>
import { useBaseModal } from '@/stores/baseModal';

const baseModalStore = useBaseModal();

const { closeModal } = baseModalStore;
</script>
<template>
  <div
    class="max-w-[500px] min-w-[375px] w-full fixed inset-0 mx-auto bg-black/60 z-50 overflow-hidden"
    @click="closeModal()"
  >
    <div
      class="h-full w-full overflow-y-auto grid grid-cols-[auto_1fr_auto] grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] place-items-center"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
