<template>
  <div class="dynamic-padding w-full h-auto">
    <div @click="handleClickBoothIntroduction(i)" v-for="i in 5" :key="i" class="pb-2">
      <div
        class="w-full h-[160px] bg-white shadow-3xl flex flex-row justify-between items-center rounded-3.5xl border border-primary-900-light px-4 py-3"
      >
        <div class="w-[222px] flex flex-col justify-center pr-1">
          <div
            class="px-2 py-1 w-fit flex justify-center text-center rounded-3.5xl border border-primary-900 text-primary-900 text-3xs font-pretendard font-semibold"
          >
            #푸드트럭
          </div>
          <div class="py-1.5 text-base font-pretendard font-semibold">치즈닭갈비</div>
          <div class="pb-2 text-2xs text-secondary-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </div>
          <div class="flex flex-row">
            <div
              class="px-2 py-1 mr-2 w-fit flex justify-center text-center text-3xs text-white bg-primary-900 rounded-full"
            >
              운영중
            </div>
            <div
              class="px-2 py-1 w-fit flex justify-center text-center items-center text-3xs text-secondary-500 bg-primary-100 rounded-full"
            >
              <img class="mr-1 w-2 h-2 flex justify-center" src="/images/booth/booth-clock-icon.png" />
              <div>12:00 ~ 16:00</div>
            </div>
          </div>
        </div>
        <div class="w-32 h-32 flex justify-center items-center">
          <div class="w-full h-full bg-primary-300 rounded-3.5xl"></div>
        </div>
      </div>
    </div>
    <button
      class="w-full h-auto py-4 mt-3 mb-20 shadow-3xl border-1 border-primary-900 rounded-full text-primary-900 font-pretendard text-base active:text-white active:bg-primary-900"
    >
      더보기
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleClickBoothIntroduction = (i) => {
  router.push({ path: `/booth/detail/${i}` });
}
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
