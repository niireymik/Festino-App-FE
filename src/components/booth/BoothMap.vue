<script setup>
import { ref } from 'vue';

const zoomLevel = ref(1);

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.2, 2);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.2, 1);
};
</script>

<template>
  <div class="dynamic-padding">
    <div class="relative">
      <div class="w-full min-h-[340px] sm:h-[440px] border border-primary-900-light rounded-3xl overflow-auto touch-manipulation">
        <img
          class="max-w-none h-auto"
          :style="{ width: `${zoomLevel * 160}%`, transform: `scale(${zoomLevel})`, transformOrigin: 'left top' }"
          src="/images/booth/map.svg"
        />
      </div>
      <div class="absolute bottom-5 left-5">
        <button
          @click="zoomIn"
          class="shadow-3xl bg-white rounded-t-full border-1 border-primary-900-light p-4 flex justify-center items-center active:bg-primary-900 active:text-white"
        >
          <i class="pi pi-plus text-primary-900 text-lg active:text-white"></i>
        </button>
        <button
          @click="zoomOut"
          class="shadow-3xl bg-white rounded-b-full border-1 border-primary-900-light p-4 flex justify-center items-center active:bg-primary-900 active:text-white"
        >
          <i class="pi pi-minus text-primary-900 text-lg active:text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dynamic-padding {
  padding-top: calc(10 / 430 * 100%) !important;
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: calc(25 / 430 * 100%) !important;
}

button:active i {
  color: white;
}
</style>