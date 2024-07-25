<script setup>
import { ref, onMounted, watchEffect, nextTick } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';
import MapSpeechBubble from './MapSpeechBubble.vue';

const { convertBoothMenuTab } = useGetBoothDataStore();
const { selectBoothMenu } = storeToRefs(useGetBoothDataStore());

const zoomLevel = ref(1);
const containerRef = ref(null);
const imageLoaded = ref(false);
const markers = ref({
  more: [
    { left: 120, bottom: 120, count: 12, tab: 1 },
    { left: 443, bottom: 240, count: 22, tab: 2 },
    { left: 70, bottom: 300, count: 4, tab: 3 },
    { left: 260, bottom: 300, count: 1, tab: 4 },
  ],
  detail: {
    wind: [
      { left: 476, bottom: 310 }
    ],
    ticket: [
      { left: 302, bottom: 325 }
    ],
    food: [
      { left: 420, bottom: 340 },
      { left: 440, bottom: 340 },
      { left: 530, bottom: 230 },
      { left: 145, bottom: 175 },
      { left: 120, bottom: 175 },
      { left: 95, bottom: 175 },
      { left: 70, bottom: 175 },
      { left: 50, bottom: 155 },
      { left: 50, bottom: 130 },
      { left: 50, bottom: 105 },
      { left: 170, bottom: 85 },
      { left: 145, bottom: 85 },
      { left: 120, bottom: 85 },
      { left: 95, bottom: 85 },
      { left: 70, bottom: 85 },
    ],
    music: [
      { left: 420, bottom: 220 },
      { left: 530, bottom: 205 },
    ],
    join: [
      { left: 385, bottom: 310 },
      { left: 405, bottom: 310 },
      { left: 445, bottom: 300 },
      { left: 420, bottom: 285 },
      { left: 445, bottom: 270 },
      { left: 420, bottom: 255 },
      { left: 445, bottom: 240 },
      { left: 510, bottom: 300 },
      { left: 530, bottom: 285 },
      { left: 510, bottom: 270 },
      { left: 530, bottom: 255 },
    ],
    smoke: [
      { left: 150, bottom: 430 },
      { left: 250, bottom: 40 }
    ],
    store: [
      { left: 150, bottom: 370 },
      { left: 500, bottom: 367 }
    ],
    toilet: [
      { left: 70, bottom: 350 },
      { left: 140, bottom: 350 },
      { left: 440, bottom: 367 },
      { left: 520, bottom: 367 },
      { left: 350, bottom: 230 },
      { left: 395, bottom: 260 },
      { left: 548, bottom: 265 },
    ]
  }
});

const selectedMarker = ref(null);

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.2, 2.6);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.2, 1);
};

const moveScroll = () => {
  const container = containerRef.value;
  if (container) {
    if (selectBoothMenu.value === 0 || selectBoothMenu.value === 4) {
      zoomLevel.value = 1;
      nextTick(() => {
        container.scrollLeft = 99.5;
        container.scrollTop = 65;
      });
    } else if (selectBoothMenu.value === 1) {
      zoomLevel.value = 1.6;
      nextTick(() => {
        container.scrollLeft = 130;
        container.scrollTop = 800;
      });
    } else if (selectBoothMenu.value === 2 || selectBoothMenu.value === 3) {
      zoomLevel.value = 1.6;
      nextTick(() => {
        container.scrollTop = 390;
        container.scrollLeft = 1060;
      });
    }
  }
};

const handleMarkerClick = (index) => {
  selectedMarker.value = index;
};

const startDistance = ref(0);
const startX = ref(0);
const startY = ref(0);

const handleTouchStart = (e) => {
  if (e.touches.length === 2) {
    startDistance.value = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    startX.value = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    startY.value = (e.touches[0].clientY + e.touches[1].clientY) / 2;
  }
};

const handleTouchMove = (e) => {
  if (e.touches.length === 2) {
    const newDistance = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    const delta = newDistance - startDistance.value;
    const scaleChange = delta / 500; // 조정할 비율
    zoomLevel.value = Math.min(Math.max(zoomLevel.value + scaleChange, 1), 2.6);

    // 확대/축소 시 지도의 중심점을 조정
    const container = containerRef.value;
    if (container) {
      const newX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const newY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      container.scrollLeft += (startX.value - newX) * zoomLevel.value;
      container.scrollTop += (startY.value - newY) * zoomLevel.value;
      startDistance.value = newDistance;
      startX.value = newX;
      startY.value = newY;
    }
  }
};

onMounted(() => {
  imageLoaded.value = true;
  // containerRef.value.addEventListener('touchstart', handleTouchStart);
  // containerRef.value.addEventListener('touchmove', handleTouchMove);
});

watchEffect(() => {
  if (imageLoaded.value && containerRef.value) {
    moveScroll();
    selectedMarker.value = '';
  }
});
</script>

<template>
  <div class="dynamic-booth-map-padding">
    <div class="relative">
      <div 
        ref="containerRef"
        @touchstart.passive="handleTouchStart($event)"
        @touchmove.passive="handleTouchMove($event)"
        id="map-container"
        class="relative aspect-square w-full min-h-[340px] h-[340px] xs:h-[390px] sm:h-[453.5px] max-h-[453.5px] bg-map-color border border-primary-900-light rounded-3xl overflow-auto touch-pan-x touch-pan-y">
        <div 
          class="relative scroll-smooth"
          id="map-area"
          :style="{ 
            width: `${587 * zoomLevel}px`, 
            height: `${518 * zoomLevel}px`,
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'top left'
          }"
        >
          <div class="w-full h-full bg-booth-map bg-cover">
            <div
              v-for="(marker, index) in markers.more"
              :id="marker.id"
              :key="`more-${index}`" 
              class="absolute marker"
              :style="{
                left: `${marker.left * zoomLevel}px`,
                bottom: `${marker.bottom * zoomLevel}px`,
                transform: `scale(${1 / zoomLevel})`,
                transformOrigin: 'center bottom'
              }"
              @click="convertBoothMenuTab(marker.tab)"
            >
              <div
                v-if="zoomLevel <= 1.4"
                class="w-[105px] h-[106px] bg-more-marker flex justify-center">
                <div class="absolute top-1/4 text-white font-extrabold text-[22px] select-none">+{{ marker?.count }}</div>
              </div>
            </div>
            <div
              v-for="(category, categoryName) in markers.detail"
              :key="categoryName"
            >
              <div
                v-for="(marker, index) in category"
                :id="marker.id"
                :key="`detail-${categoryName}-${index}`"
                class="absolute marker"
                :style="{
                  left: `${marker.left * zoomLevel}px`,
                  bottom: `${marker.bottom * zoomLevel}px`,
                  transform: `scale(${selectedMarker === `${categoryName}-${index}` ? 1.3 / zoomLevel : 1 / zoomLevel})`,
                  transformOrigin: 'center bottom',
                  zIndex: `${selectedMarker === `${categoryName}-${index}` ? '1000' : '500'}`
                }"
                @click="handleMarkerClick(`${categoryName}-${index}`)"
              >
                <div
                  v-if="zoomLevel > 1.4"
                  class="relative w-[56px] h-[56px] bg-cover"
                  :style="{
                    backgroundImage: `url('/icons/booth/${categoryName}.svg')`,
                    opacity: `${selectedMarker === `${categoryName}-${index}` ? '1' : '0.55' }`
                  }"
                >
                  <MapSpeechBubble 
                    v-if="selectedMarker === `${categoryName}-${index}`"
                    class="absolute bottom-[90px] right-2/3"
                  ></MapSpeechBubble>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-4 absolute bottom-5 left-5 shadow-6xl rounded-full">
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

<style>
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
  transition: transform 0.5s ease, width 0.5s ease, height 0.5s ease, opacity 0.5s ease;
  transform-origin: center bottom;
}
</style>