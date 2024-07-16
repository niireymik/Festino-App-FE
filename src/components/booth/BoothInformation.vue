<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';

const { booth, imageList } = storeToRefs(useGetBoothDataStore());
const currentIndex = ref(0);
const containerRef = ref(null);

const updateCurrentIndex = () => {
  if (containerRef.value) {
    const scrollLeft = containerRef.value.scrollLeft;
    const containerWidth = containerRef.value.clientWidth;
    currentIndex.value = Math.round(scrollLeft / containerWidth);
  }
};

let rafId;

const onScroll = () => {
  if (rafId) {
    cancelAnimationFrame(rafId);
  }
  rafId = requestAnimationFrame(updateCurrentIndex);
};

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener('scroll', onScroll);
  }
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener('scroll', onScroll);
  }
});
</script>

<template>
  <div class="w-full h-3 mb-7 bg-secondary-200"></div>
  <div class="dynamic-padding relative">
    <div 
      class="absolute right-[40px] top-[30px] flex justify-center items-center w-[72px] h-8 bg-white opacity-80 rounded-full text-base text-secondary-500"
    >
      {{ currentIndex + 1 }} / {{ imageList.length }}
    </div>
    <div ref="containerRef" class="snap-x overflow-x-auto w-full min-h-[390px] sm:h-[440px] flex rounded-3xl image-container">
      <div v-for="(image, index) in imageList" :key="index" class="snap-center rounded-3xl">
        <div 
          class="w-full h-full bg-cover bg-no-repeat aspect-1"
          :style="`background-image: url(${image})`" >
        </div>
      </div>
    </div>
    <div class="pt-5 text-secondary-500 font-light leading-7 font-pretendard">{{ booth.boothIntro }}</div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-top: calc(10 / 430 * 100%) !important;
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: 1.5rem;
}
</style>