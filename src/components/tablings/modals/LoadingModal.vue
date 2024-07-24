<script setup>
import ModalBackground from '@/components/modals/ModalBackground.vue';
</script>
<template>
  <div class="max-w-[500px] min-w-[375px] w-full fixed inset-0 mx-auto bg-opacity-60 bg-black z-50 overflow-hidden">
    <div
      class="h-full w-full overflow-y-auto grid grid-cols-[auto_1fr_auto] grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] place-items-center"
    >
      <div class="relative col-start-2 row-start-2 h-full dynamic-width flex flex-col items-center gap-7">
        <img src="/icons/orders/loading-tino.svg" class="w-[206px]" />
        <div class="text-white font-medium text-center">귀여운 티노가<br />메세지를 보내고 있어요</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
