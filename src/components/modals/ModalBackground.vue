<script setup>
import { useBaseModal } from '@/stores/baseModal';
import { onMounted, onUnmounted } from 'vue';

const baseModalStore = useBaseModal();

const { closeModal } = baseModalStore;

const preventScroll = () => {
  document.getElementsByTagName('html')[0].style.overflow = 'hidden';
};

const allowScroll = () => {
  document.getElementsByTagName('html')[0].style.overflow = 'auto';
};

onMounted(() => {
  preventScroll();
});

onUnmounted(() => {
  allowScroll();
});
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
