<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const currentIndex = ref(0);
const containerRef = ref(null);

const props = defineProps({
  noticeData: {
    type: Object,
    required: true
  }
});

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
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
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
  <div class="w-full h-auto flex flex-col bg-white rounded-3xl border-primary border-1 justify-center items-center p-5 gap-[20px] select-none">
    <div v-if="noticeData.imageUrl.length > 0" class="relative w-full">
      <div 
        class="absolute z-50 right-1 top-1 flex justify-center items-center w-[72px] h-8 bg-white opacity-80 rounded-full text-secondary-500"
      >
        {{ currentIndex + 1 }} / {{ noticeData.imageUrl.length }}
      </div>
      <div ref="containerRef" class="snap-mandatory snap-x overflow-x-auto flex rounded-3xl">
        <div v-for="(image, index) in noticeData.imageUrl" :key="index" class="snap-start w-full flex-shrink-0">
          <div 
            class="w-full aspect-w-1 aspect-h-1 bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }" >
          </div>
        </div>
      </div>
    </div>
    <div class="w-full text-xs break-words px-1 whitespace-pre-wrap">{{ noticeData.content }}</div>
  </div>
</template>

<style scoped>
</style>