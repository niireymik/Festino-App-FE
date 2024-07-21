<script setup>
import { ref, onMounted, watch } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';
import MapSpeechBubble from '@/components/booth/MapSpeechBubble.vue';

const { selectBoothMenu } = storeToRefs(useGetBoothDataStore());

const zoomLevel = ref(1);
const containerRef = ref(null);
const imageLoaded = ref(false);
const markers = ref([
  { left: 140, bottom: 152 },
  { left: 185, bottom: 152 },
  { left: 230, bottom: 152 },
  { left: 275, bottom: 152 },
  { left: 320, bottom: 152 },
  { left: 100, bottom: 185 },
  { left: 100, bottom: 235 },
  { left: 100, bottom: 285 },
  { left: 140, bottom: 330 },
  { left: 185, bottom: 330 },
  { left: 230, bottom: 330 },
  { left: 275, bottom: 330 },
]);

const selectedMarker = ref(null);

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.1, 1.2);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.1, 1);
};

const scrollToBottomLeft = () => {
  const container = containerRef.value;
  if (container) {
    container.scrollTop = 560;
    container.scrollLeft = 85;
  }
};

const moveScroll = () => {
  const container = containerRef.value;
  if (container) {
    if (selectBoothMenu.value === 0 || selectBoothMenu.value === 1) {
      scrollToBottomLeft();
    } else if (selectBoothMenu.value === 2 || selectBoothMenu.value === 3) {
      container.scrollTop = 300;
      container.scrollLeft = 1128;
    }
  }
};

const handleMarkerClick = (index) => {
  selectedMarker.value = index;
};

onMounted(() => {
  if (containerRef.value) {
    scrollToBottomLeft();
  }
});

watch([zoomLevel, imageLoaded, selectBoothMenu], () => {
  if (imageLoaded.value && containerRef.value) {
    scrollToBottomLeft();
    moveScroll();
  }
});
</script>

<template>
  <div class="dynamic-booth-map-padding">
    <div class="relative">
      <div ref="containerRef" class="aspect-square w-full min-h-[340px] h-[340px] xs:h-[390px] sm:h-[453.5px] max-h-[453.5px] border border-primary-900-light rounded-3xl overflow-auto touch-manipulation">
        <div
          class="relative"
          :style="{ width: `${zoomLevel * 300}%`, transition: 'width 0.3s ease, height 0.3s ease' }"
        >
          <img
            src="/images/booth/map.svg"
            alt="Booth Map"
            class="w-full h-full"
            @load="imageLoaded = true"
          />
          <div 
            v-for="(marker, index) in markers" 
            :key="index"
            class="absolute marker"
            :style="{
              left: `calc(${marker.left * zoomLevel}px)`,
              bottom: `calc(${marker.bottom * zoomLevel}px)`,
              transform: `scale(${selectedMarker === index ? 1.2 : 1}) translateY(${selectedMarker === index ? -75 : 0}px)`,
              opacity: selectedMarker === index ? '1' : '0.75',
              width: `${selectedMarker === index ? 51 : 45 * zoomLevel}px`,
              height: `${selectedMarker === index ? 50 : 44 * zoomLevel}px`,
              zIndex: selectedMarker === index ? 2 : 1
            }"
            @click="handleMarkerClick(index)"
          >
            <div class="relative">
              <MapSpeechBubble v-if="selectedMarker === index" class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2" />
              <div class="absolute">
                <img 
                  src="/icons/booth/marker.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-10 absolute bottom-5 left-5">
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

.marker {
  transition: transform 0s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  transform-origin: center bottom;
}

.marker img {
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  transform-origin: center bottom;
}
</style>