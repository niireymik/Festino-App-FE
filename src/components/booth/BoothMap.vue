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
  { left: 200, bottom: 210 },
  { left: 250, bottom: 210 },
  { left: 300, bottom: 210 },
  { left: 350, bottom: 210 },
  { left: 400, bottom: 210 },
  { left: 150, bottom: 250 },
  { left: 150, bottom: 330 },
  { left: 150, bottom: 400 },
  { left: 200, bottom: 450 },
  { left: 250, bottom: 450 },
  { left: 300, bottom: 450 },
  { left: 350, bottom: 450 },
]);

const selectedMarker = ref(null);

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.1, 1.3);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.1, 1);
};

const scrollToBottomLeft = () => {
  const container = containerRef.value;
  if (container) {
    container.scrollTop = (container.scrollHeight - container.clientHeight)- 170;
    container.scrollLeft = 110;
  }
};

const moveScroll = () => {
  const container = containerRef.value;
  if (container) {
    if (selectBoothMenu.value === 0 || selectBoothMenu.value === 1) {
      scrollToBottomLeft();
    } else if (selectBoothMenu.value === 2 || selectBoothMenu.value === 3) {
      container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
      container.scrollLeft = container.scrollWidth - container.clientWidth;
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
          :style="{ width: `calc(${zoomLevel * 1538}px)`, height: `calc(${zoomLevel * 1353}px)` }"
        >
          <img
            src="/images/booth/map.svg"
            alt="Booth Map"
            class="w-full h-full min-w-[1538px] min-h-[1353px]"
            @load="imageLoaded = true"
          />
          <div 
            v-for="(marker, index) in markers" 
            :key="index"
            class="absolute marker"
            :style="{
              left: `calc(${marker.left * zoomLevel}px)`,
              bottom: `calc(${marker.bottom * zoomLevel}px)`,
              transform: `scale(${selectedMarker === index ? 1.2 : 1}) translateY(${selectedMarker === index ? -73 - zoomLevel : 0}px)`,
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