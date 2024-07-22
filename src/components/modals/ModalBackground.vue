<script setup>
const props = defineProps({
  closeModal: Function,
});
</script>
<template>
  <div
    class="max-w-[500px] min-w-[375px] w-full fixed inset-0 mx-auto bg-opacity-60 bg-black z-50 overflow-hidden"
    @click="props.closeModal()"
  >
    <div
      class="h-full w-full overflow-y-auto grid grid-cols-[10px_1fr_10px] grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
