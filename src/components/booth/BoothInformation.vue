<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { booth, imageList } = storeToRefs(useGetBoothDataStore());
const currentIndex = ref(0);
const containerRef = ref(null);

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

  scrollToSlide(currentIndex.value);
};

const nextSlide = () => {
  if (currentIndex.value < imageList.value.length - 1) {
    currentIndex.value++;
  }
  scrollToSlide(currentIndex.value);
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
  scrollToSlide(currentIndex.value);
};

const scrollToSlide = (index) => {
  const container = containerRef.value;
  const slideWidth = container.clientWidth;
  container.scrollTo({
    left: index * slideWidth,
    behavior: 'smooth',
  });
};

watch(currentIndex, (newIndex) => {
  scrollToSlide(newIndex);
});

onMounted(() => {
  const container = containerRef.value;
  if (container) {
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
  }
});

onUnmounted(() => {
  const container = containerRef.value;
  if (container) {
    container.removeEventListener('touchstart', handleTouchStart);
    container.removeEventListener('touchmove', handleTouchMove);
    container.removeEventListener('touchend', handleTouchEnd);
  }
});

const getBoothIntroduceImageProps = (boothImage) => {
  return {
    class: { 'bg-booth-default-image': !boothImage },
    style: boothImage ? `background-image: url(${boothImage})` : '',
  };
};
</script>

<template>
  <div class="w-full h-3 bg-secondary-200"></div>
  <div class="relative pt-[2.33%] pl-[4.65%] pr-[4.65%] pb-9">
    <div class="mt-4">
      <div
        v-if="imageList.length > 1"
        class="absolute right-10 top-11 flex justify-center items-center w-[72px] h-8 bg-white opacity-80 rounded-full text-base text-secondary-500"
      >
        {{ currentIndex + 1 }} / {{ imageList.length }}
      </div>
      <div
        ref="containerRef"
        class="snap-x snap-mandatory overflow-x-hidden w-full min-h-[340px] sm:h-[453.5px] flex rounded-3xl border"
      >
        <div
          v-for="(image, index) in imageList"
          :key="index"
          class="snap-center snap-always min-w-full flex-shrink-0"
        >
          <div
            class="aspect-square scroll-smooth w-full min-h-[340px] h-[340px] xs:h-[390px] sm:h-[453.5px] max-h-[453.5px] bg-cover bg-no-repeat"
            v-bind="getBoothIntroduceImageProps(image)"
          ></div>
        </div>
      </div>
    </div>
    <div class="pt-5 text-secondary-500 font-light leading-7">
      {{ booth.boothIntro }}
    </div>
  </div>
</template>

<style scoped>
</style>