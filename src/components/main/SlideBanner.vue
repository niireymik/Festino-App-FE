<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickMoveBooth = () => {
  router.push({ name: 'booth' });
};

const handleClickMoveTabling = () => {
  router.push({ name: 'reserve' });
};

const handleClickMoveTimeTable = () => {
  router.push({ name: 'timetable' });
};

const currentIndex = ref(0);
const sliderContainer = ref(null);
const totalSlides = 3;

let startX = 0;
let isDragging = false;

const handleTouchStart = (event) => {
  startX = event.touches[0].clientX;
  isDragging = true;
};

const handleTouchMove = (event) => {
  if (!isDragging) return;
  const touchX = event.touches[0].clientX;
  const moveX = startX - touchX;
  if (moveX > 50) {
    nextSlide();
    isDragging = false;
  } else if (moveX < -50) {
    prevSlide();
    isDragging = false;
  }
};

const handleTouchEnd = () => {
  isDragging = false;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
};

onMounted(() => {
  const slider = sliderContainer.value;
  slider.addEventListener('touchstart', handleTouchStart);
  slider.addEventListener('touchmove', handleTouchMove);
  slider.addEventListener('touchend', handleTouchEnd);

  return () => {
    slider.removeEventListener('touchstart', handleTouchStart);
    slider.removeEventListener('touchmove', handleTouchMove);
    slider.removeEventListener('touchend', handleTouchEnd);
  };
});
</script>

<template>
  <div class="relative select-none rounded-3xl overflow-hidden w-full h-[178px]" ref="sliderContainer">
    <div class="flex transition-transform duration-500 ease" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="min-w-full min-h-[178px] bg-slide-banner-1 bg-cover bg-no-repeat bg-left-top relative" @click="handleClickMoveTabling()">
        <div class="absolute top-5 left-4 flex flex-col items-start">
          <div class="px-[18px] py-0.5 font-pretendard text-xs text-primary-700 font-bold bg-white rounded-full">이제 기다리지 마세요!</div>
          <div class="pt-1 px-0.5 font-pretendard text-base text-white">빠른 입장을 도와주는</div>
          <div class="px-0.5 leading-none font-bold font-pretendard text-base text-white">학과 주점 예약 시스템 '테이블링'</div>
        </div>
        <div class="absolute bottom-4 left-4">
          <div class="text-white font-pretendard font-bold text-xs px-4 py-1.5 rounded-full border-white border-2 cursor-pointer">테이블링 탭으로 이동 -></div>
        </div>
      </div>
      <div class="min-w-full min-h-[178px] bg-slide-banner-2 bg-cover bg-no-repeat bg-right-top relative" @click="handleClickMoveBooth()">
        <div class="absolute top-5 right-4 flex flex-col items-end">
          <div class="px-[18px] py-0.5 font-pretendard text-xs text-primary-700 font-bold bg-white rounded-full">다양한 즐길 거리가 가득!</div>
          <div class="pt-1 px-0.5 font-pretendard text-base text-white">티노와 함께 알아보는</div>
          <div class="px-0.5 leading-none font-bold font-pretendard text-base text-white">축제 부스!</div>
        </div>
        <div class="absolute bottom-4 right-4">
          <div class="text-white font-pretendard font-bold text-xs px-4 py-1.5 rounded-full border-white border-2 cursor-pointer">축제 부스 탭으로 이동 -></div>
        </div>
      </div>
      <div class="min-w-full min-h-[178px] bg-slide-banner-3 bg-cover bg-no-repeat bg-center relative" @click="handleClickMoveTimeTable()">
        <div class="absolute top-5 left-4 flex flex-col items-start">
          <div class="px-[18px] py-0.5 font-pretendard text-xs text-primary-700 font-bold bg-white rounded-full">축제의 꽃! 다양한 공연</div>
          <div class="pt-1 px-0.5 font-pretendard text-base text-white">한눈에 보는 축제 공연 정보!</div>
          <div class="px-0.5 leading-none font-bold font-pretendard text-base text-white">'공연 타임테이블'</div>
        </div>
        <div class="absolute bottom-4 left-4">
          <div class="text-white font-pretendard font-bold text-xs px-4 py-1.5 rounded-full border-white border-2 cursor-pointer">타임테이블 탭으로 이동 -></div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(dot, index) in totalSlides"
        :key="index"
        class="w-1.5 h-1.5 rounded-full"
        :class="currentIndex == index ? 'bg-primary-700 border-1 border-white' : 'bg-white border-1 border-primary-700'"
      ></span>
    </div>
  </div>
</template>

<style scoped>
</style>
