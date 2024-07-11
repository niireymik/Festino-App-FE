<script setup>
import OrderMainBanner from '@/components/orders/OrderMainBanner.vue';
import router from '@/router';

const handleClickFestinoButton = () => {
  router.push({ name: 'main' });
};
const handleClickOrderSearchButton = () => {
  console.log('clicked');
  router.push({ name: 'order-search' });
};
</script>
<template>
  <div class="flex flex-col">
    <OrderMainBanner />
    <div class="w-full rounded-t-3xl bg-white pt-[25px] flex flex-col items-center -translate-y-5">
      <div
        class="w-[138px] h-11 rounded-10xl bg-primary-900-lighter font-semibold text-primary-900 shrink-0 grid place-items-center"
      >
        테이블 번호 12
      </div>
      <div class="py-11 flex flex-col w-full px-2 gap-y-11 h-full">
        <div class="flex flex-row justify-evenly gap-x-2">
          <div
            class="h-[280px] w-[190px] min-w-[170px] rounded-3xl flex flex-col justify-start items-center border-2 border-primary-900-lighter gap-6 shadow-xs overflow-clip cursor-pointer"
          >
            <div class="font-jalnan2 text-2xl text-primary-900 pt-5">주문하기</div>
            <img src="/icons/orders/orderIcon.svg" />
          </div>
          <div
            class="h-[280px] w-[190px] min-w-[170px] rounded-3xl flex flex-col justify-start items-center border-2 border-primary-900-lighter gap-6 shadow-xs cursor-pointer"
            @click="handleClickOrderSearchButton()"
          >
            <div class="font-jalnan2 text-2xl text-primary-900 pt-5">주문조회</div>
            <img src="/icons/orders/orderSearch.svg" />
          </div>
        </div>
        <div class="relative">
          <img src="/icons/orders/tino-order-shortcut.svg" class="w-full h-full" />
          <div class="absolute flex flex-col top-[28px] right-[25px] sm:right-[40px] items-end">
            <div class="text-white font-jalnan2 text-xs">Festino와 함께하는 2024 한국공학대학교 축제</div>
            <div
              class="bg-gradient-to-t from-white-opacity from-20% to-white text-transparent to-100% bg-clip-text font-jalnan2 text-2xl"
            >
              ‘한국공대 축제’
            </div>
            <button
              class="border-2 border-white w-[155px] h-[26px] text-white font-bold text-xs rounded-3.5xl mt-1"
              @click="handleClickFestinoButton()"
            >
              페스티노 사이트 바로가기 ->
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
