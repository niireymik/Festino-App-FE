<script setup>
import { ref, onMounted, watchEffect, nextTick, computed } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';
import MapSpeechBubble from './MapSpeechBubble.vue';

const { convertBoothMenuTab } = useGetBoothDataStore();
const { selectBoothMenu, selectedTickectBooth, allBoothList, boothMarkerData, nightBoothList, dayBoothList, foodBoothList } = storeToRefs(useGetBoothDataStore());

const zoomLevel = ref(1);
const containerRef = ref(null);
const imageLoaded = ref(false);

const markers = ref({
  more: [
    { left: 160, bottom: 120, count: 12, tab: 1 },
    { left: 425, bottom: 240, count: 22, tab: 2 },
    { left: 100, bottom: 300, count: 4, tab: 4 },
    { left: 290, bottom: 320, count: 1, tab: 5 },
  ],
  detail: {
    wind: [
      // 총학 이벤트 추가되면 활성화
      // { num: 90, left: 476, bottom: 310 }
    ],
    // 총학 술 판매 추가
    ticket: [
      //총학 티켓
      { num: 91, left: 302, bottom: 325, scrollLeft: 620, scrollTop: 200 }
    ],
    alcohol: [
      { num: 92, left: 50, bottom: 85 }
    ],
    food: [
      // 야간부스
      { num: 1, left: 145, bottom: 175 },
      { num: 2, left: 120, bottom: 175 },
      { num: 3, left: 95, bottom: 175 },
      { num: 4, left: 70, bottom: 175 },
      { num: 5, left: 50, bottom: 155 },
      { num: 6, left: 50, bottom: 130 },
      { num: 7, left: 50, bottom: 105 },
      { num: 8, left: 170, bottom: 85 },
      { num: 9, left: 145, bottom: 85 },
      { num: 10, left: 120, bottom: 85 },
      { num: 11, left: 95, bottom: 85 },
      { num: 12, left: 70, bottom: 85 },
      // 주간부스
      // { num: 34, left: 420, bottom: 340 },
      // { num: 35, left: 440, bottom: 340 },
      // { num: 36, left: 532, bottom: 230 },
      // 푸드트럭
      { num: 51, left: 420, bottom: 180 },
      { num: 52, left: 420, bottom: 155 },
      { num: 53, left: 420, bottom: 130 },
      { num: 54, left: 450, bottom: 130 },
      { num: 55, left: 450, bottom: 155 },
    ],
    music: [
      { num: 21, left: 420, bottom: 220 },
      { num: 22, left: 532, bottom: 205 },
    ],
    join: [
      { num: 23, left: 385, bottom: 310 },
      { num: 24, left: 405, bottom: 310 },
      { num: 25, left: 448, bottom: 300 },
      { num: 26, left: 420, bottom: 285 },
      { num: 27, left: 448, bottom: 270 },
      { num: 28, left: 420, bottom: 255 },
      { num: 29, left: 448, bottom: 240 },
      { num: 30, left: 513, bottom: 300 },
      { num: 31, left: 532, bottom: 285 },
      { num: 32, left: 513, bottom: 270 },
      { num: 33, left: 532, bottom: 255 },
    ],
    smoke: [
      { num: 76, left: 150, bottom: 430 }, // 팁 뒤
      { num: 77, left: 50, bottom: 175 } // 운동장 구석
    ],
    store: [
      { num: 74, left: 150, bottom: 370 },
      { num: 75, left: 500, bottom: 367 }
    ],
    toilet: [
      { num: 71, left: 70, bottom: 350 },
      { num: 72, left: 440, bottom: 367 },
      { num: 73, left: 520, bottom: 367 },
      // { num: 74, left: 350, bottom: 230 },
      // { num: 75, left: 395, bottom: 260 },
      // { num: 76, left: 548, bottom: 265 },
      // 마커 정보 추가 후 수정
    ]
  }
});

const selectedMarker = ref('');

const zoomIn = () => {
  zoomLevel.value = Math.min(zoomLevel.value + 0.2, 2.4);
};

const zoomOut = () => {
  zoomLevel.value = Math.max(zoomLevel.value - 0.2, 1);
};

const moveScroll = () => {
  const container = containerRef.value;
  if (container) {
    if (selectBoothMenu.value === 0) {
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
    } else if (selectBoothMenu.value === 2) {
      zoomLevel.value = 1.6;
      nextTick(() => {
        container.scrollLeft = 1060;
        container.scrollTop = 390;
      });
    } else if (selectBoothMenu.value === 3) {
      zoomLevel.value = 1.6;
      nextTick(() => {
        container.scrollLeft = 1000;
        container.scrollTop = 600;
      })
    } else if (selectBoothMenu.value === 4) {
      zoomLevel.value = 1.6;
      if(selectedTickectBooth.value === false) {
        nextTick(() => {
          container.scrollLeft = 130;
          container.scrollTop = 150;
        })
      } else { // +1인 대왕 마커 눌렀을 때
        nextTick(() => {
          handleMarkerClick(markers.value.detail.ticket[0]);
          container.scrollLeft = 620;
          container.scrollTop = 200;
        })
      }
    }
  }
};

const handleMarkerClick = (index) => {
  selectedMarker.value = index;
  getBoothData(index);
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

const boothDataMap = computed(() => {
  const map = {};
  allBoothList.value.forEach(booth => {
    map[booth.markerNum] = booth;
  })
  return map;
});

const getBoothData = (marker) => {
  boothMarkerData.value = boothDataMap.value[marker.num];
}

onMounted(() => {
  imageLoaded.value = true;
});

watchEffect(() => {
  if (imageLoaded.value && containerRef.value) {
    moveScroll();
    selectedMarker.value = '';

    const findMarker = (boothList) => {
      if (boothList.length > 0) {
        const firstBooth = boothList[0];
        for (const category in markers.value.detail) {
          const foundMarker = markers.value.detail[category].find(marker => marker.num === firstBooth.markerNum);
          if (foundMarker) {
            return foundMarker;
          }
        }
      }
      return null;
    };

    if (selectBoothMenu.value === 1) {
      const foundMarker = findMarker(nightBoothList.value);
      if (foundMarker) {
        selectedMarker.value = foundMarker;
        getBoothData(foundMarker);
      }
    } else if (selectBoothMenu.value === 2) {
      const foundMarker = findMarker(dayBoothList.value);
      if (foundMarker) {
        selectedMarker.value = foundMarker;
        getBoothData(foundMarker);
      }
    } else if (selectBoothMenu.value === 3) {
      const foundMarker = findMarker(foodBoothList.value);
      if(foundMarker) {
        selectedMarker.value = foundMarker;
        getBoothData(foundMarker);
      }
    }
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
        class="relative aspect-square w-full min-h-[340px] h-[340px] xs:h-[390px] sm:h-[453.5px] max-h-[453.5px] bg-map-color border border-primary-900-light rounded-3xl overflow-auto touch-pan-x touch-pan-y"
      >
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
                class="w-[72px] h-[72px] bg-more-marker bg-cover flex justify-center">
                <div class="absolute top-1/4 text-white font-extrabold text-[15px] select-none">+{{ marker?.count }}</div>
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
                  transform: `scale(${selectedMarker === marker ? 1.3 / zoomLevel : 1 / zoomLevel})`,
                  transformOrigin: 'center bottom',
                  zIndex: `${selectedMarker === marker ? '1000' : '500'}`
                }"
                @click="handleMarkerClick(marker)"
              >
                <div
                  v-if="zoomLevel > 1.4"
                  class="relative w-[56px] h-[56px] bg-cover flex justify-center"
                  :style="{
                    backgroundImage: `url('/icons/booth/${categoryName}.svg')`,
                    opacity: `${selectedMarker === marker ? '1' : '0.55' }`
                  }"
                >
                  <MapSpeechBubble 
                    v-if="selectedMarker === marker"
                    class="absolute bottom-[90px]"
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