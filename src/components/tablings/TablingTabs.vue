<script setup>
import { onMounted, ref } from 'vue';
import Reservation from './Reservation.vue';
import SearchReservation from './SearchReservation.vue';

const SLIDE_LIMIT = 100;

const isActive = ref({
  예약하기: true,
  예약조회: false,
});

const sliderContainer = ref(null);
const tabContiner = ref(null);
const startX = ref(0);
const isDragging = ref(false);
const currentPosition = ref(0);

const toggleTab = (type) => {
  if (type === '예약하기') {
    isActive.value.예약하기 = true;
    isActive.value.예약조회 = false;
    moveSlider(0);
  } else {
    isActive.value.예약하기 = false;
    isActive.value.예약조회 = true;
    moveSlider(-SLIDE_LIMIT);
  }
};

const handleTouchStart = (event) => {
  startX.value = event.touches[0].clientX;
  isDragging.value = true;
};

const handleTouchMove = (event) => {
  if (!isDragging.value) return;
  const touchX = event.touches[0].clientX;
  const moveX = startX.value - touchX;

  if (moveX > SLIDE_LIMIT) {
    toggleTab('예약조회');
    handleTouchEnd();
  } else if (moveX < -SLIDE_LIMIT) {
    toggleTab('예약하기');
    handleTouchEnd();
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
};

const moveSlider = (percentage) => {
  currentPosition.value = percentage;
  sliderContainer.value.style.transform = `translateX(${currentPosition}%)`;
};

onMounted(() => {
  const slider = sliderContainer.value;
  const tab = tabContiner.value;
  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchmove', handleTouchMove);
  slider.addEventListener('touchend', handleTouchEnd);

  tab.addEventListener('touchstart', handleTouchStart);
  tab.addEventListener('touchmove', handleTouchMove);
  tab.addEventListener('touchend', handleTouchEnd);

  return () => {
    slider.removeEventListener('touchstart', handleTouchStart);
    slider.removeEventListener('touchmove', handleTouchMove);
    slider.removeEventListener('touchend', handleTouchEnd);

    tab.removeEventListener('touchstart', handleTouchStart);
    tab.removeEventListener('touchmove', handleTouchMove);
    tab.removeEventListener('touchend', handleTouchEnd);
  };
});
</script>

<template>
  <div class="relative" ref="tabContiner">
    <div class="dynamic-padding mt-[13px] h-auto w-full rounded-3xl bg-inherit z-50 absolute">
      <div class="flex gap-[30px]">
        <div
          class="w-[86px] h-[32px] flex flex-col items-center justify-between cursor-pointer"
          @click="toggleTab('예약하기')"
        >
          <div
            class="text-xl"
            :class="{ 'font-bold': isActive['예약하기'], 'text-secondary-300': !isActive['예약하기'] }"
          >
            예약하기
          </div>
          <div v-if="isActive['예약하기']" class="w-full h-4 rounded-full bg-primary-900"></div>
        </div>
        <div
          class="w-[86px] h-[32px] flex flex-col items-center justify-between cursor-pointer"
          @click="toggleTab('예약조회')"
        >
          <div
            class="text-xl"
            :class="{ 'font-bold': isActive['예약조회'], 'text-secondary-300': !isActive['예약조회'] }"
          >
            예약조회
          </div>
          <div v-if="isActive['예약조회']" class="w-full h-4 rounded-full bg-primary-900"></div>
        </div>
      </div>
    </div>
    <div
      :class="`transition-transform duration-500 ease ${
        currentPosition === 0 ? 'translate-x-0' : '-translate-x-full'
      } `"
      ref="sliderContainer"
    >
      >
      <div class="flex flex-row w-[200%]">
        <Reservation />
        <SearchReservation />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
