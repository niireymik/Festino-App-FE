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

const getBoothIntroduceImageProps = (boothImage) => {
  return {
    class: {'bg-booth-default-image': !boothImage},
    style: boothImage ? `background-image: url(${ boothImage })` : ''
  };
};
</script>

<template>
  <div class="w-full h-3 bg-secondary-200"></div>
  <div class="relative pt-[2.33%] pl-[4.65%] pr-[4.65%] pb-9">
    <div class="mt-4">
      <div 
        class="absolute right-10 top-11 flex justify-center items-center w-[72px] h-8 bg-white opacity-80 rounded-full text-base text-secondary-500"
      >
        {{ currentIndex + 1 }} / {{ imageList.length }}
      </div>
      <div ref="containerRef" class="snap-x overflow-x-auto w-full min-h-[340px] sm:h-[453.5px] flex rounded-3xl gap-4 border">
        <div v-for="(image, index) in imageList" :key="index" class="sanp-always snap-center min-w-full">
          <div 
            class="aspect-square w-full min-h-[340px] h-[340px] xs:h-[390px] sm:h-[453.5px] max-h-[453.5px] bg-cover bg-no-repeat"
            v-bind="getBoothIntroduceImageProps(image)" >
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5 text-secondary-500 font-light leading-7 font-pretendard">{{ booth.boothIntro }}</div>
  </div>
</template>

<style scoped>
</style>