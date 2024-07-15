<script setup>
import { useGetBoothDataStore } from '@/stores/booths/boothDataStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref, watchEffect } from 'vue';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

import "vue3-carousel/dist/carousel.css";

const { booth, imageList } = storeToRefs(useGetBoothDataStore());
</script>

<template>
  <div class="w-full h-3 mb-7 bg-secondary-200"></div>
  <div class="dynamic-padding">
    <div class="relative w-full min-h-[390px] sm:h-[440px]">
      <Carousel 
        :items-to-show="1"
        :mouseDrag="true"
        ref="myCarousel"
      >
        <Slide
          v-for="(item, index) in imageList" 
          :key="index"
        >
          <img :src="item" class="w-full h-full bg-cover border border-primary-900-light rounded-3xl" />
          <div 
            class="absolute right-[20px] top-[20px] flex justify-center items-center w-[72px] h-8 bg-white opacity-80 rounded-full text-base text-secondary-500"
          >
            {{ index + 1 }} / {{ imageList.length }}
          </div>
        </Slide>
      </Carousel>
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
.carousel__item {
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
.slideImg {
	max-height: 740px;
	max-width: 100%;
}
.wrapper {
	margin-top: 3vh;
}
</style>