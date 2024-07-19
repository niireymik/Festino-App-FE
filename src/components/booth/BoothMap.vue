<script setup>
import { ref, onMounted, watch } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { selectBoothMenu } = storeToRefs(useGetBoothDataStore());

const zoomLevel = ref(1);
const containerRef = ref(null);
const imageLoaded = ref(false);

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.1, 2);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.1, 1);
};

const scrollToBottomLeft = () => {
  const container = containerRef.value;
  if (container) {
    container.scrollTop = 530;
    container.scrollLeft = 40;
  }
};

const moveScroll = () => {
  const container = containerRef.value;

  if (selectBoothMenu.value === 0 || selectBoothMenu.value === 1) {
    scrollToBottomLeft();
  } else if (selectBoothMenu.value === 2 || selectBoothMenu.value === 3) {
    if (container) {
      container.scrollTop = 310;
      container.scrollLeft = 1000;
    }
  }
}

onMounted(() => {
  scrollToBottomLeft();
});

watch([zoomLevel, imageLoaded, selectBoothMenu], () => {
  if (imageLoaded.value) {
    scrollToBottomLeft();
  }
  if(selectBoothMenu.value) {
    moveScroll();
  }
});
</script>

<template>
  <div class="dynamic-booth-map-padding">
    <div class="relative">
      <div ref="containerRef" class="w-full min-h-[340px] sm:h-[440px] border border-primary-900-light rounded-3xl overflow-auto touch-manipulation">
        <img
          class="max-w-none h-auto"
          :style="{ width: `${zoomLevel * 250}%`, transform: `scale(${zoomLevel})`, transformOrigin: 'left bottom' }"
          src="/images/booth/map.svg"
          @load="imageLoaded = true"
        />
      </div>
      <div class="absolute bottom-5 left-5">
        <button
          @click="zoomIn"
          class="shadow-3xl bg-white rounded-t-full border-1 border-primary-900-light-40 p-4 flex justify-center items-center active:bg-primary-900 active:text-white"
        >
          <i class="pi pi-plus text-primary-900 text-lg active:text-white"></i>
        </button>
        <button
          @click="zoomOut"
          class="shadow-3xl bg-white rounded-b-full border-1 border-primary-900-light-40 p-4 flex justify-center items-center active:bg-primary-900 active:text-white"
        >
          <i class="pi pi-minus text-primary-900 text-lg active:text-white"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.dynamic-booth-map-padding {
  padding-top: calc(10 / 430 * 100%) !important;
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: calc(25 / 430 * 100%) !important;
}

button:active i {
  color: white;
}
</style>