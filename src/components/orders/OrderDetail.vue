<script setup></script>
<template>
  <div
    class="w-full bg-primary-900-light-6 border-2 border-primary-900-light-16 flex flex-col p-4 gap-3 rounded-3xl text-sm"
  >
    <div class="h-9 flex justify-between w-full border-b-1 border-secondary-300">
      <div class="flex gap-1 items-center">
        <img src="/icons/orders/map.svg" />
        <p>컴퓨터공학부 No.14</p>
      </div>
      <div class="flex gap-1 items-center">
        <img src="/icons/orders/clock.svg" />
        <p>2024.06.18 19:45</p>
      </div>
    </div>
    <div class="grid grid-cols-3 h-[17px] text-center">
      <p class="text-left">치즈 닭꼬치</p>
      <p>4개</p>
      <p class="text-right">2,000원</p>
    </div>
    <div class="grid grid-cols-3 h-[17px] text-center">
      <p class="text-left">음료수</p>
      <p>4개</p>
      <p class="text-right">2,000원</p>
    </div>
    <div class="grid grid-cols-3 h-[17px] text-center">
      <p class="text-left">마라탕</p>
      <p>4개</p>
      <p class="text-right">2,000원</p>
    </div>
    <div class="grid grid-cols-3 h-[17px] text-center">
      <p class="text-left">치킨</p>
      <p>4개</p>
      <p class="text-right">2,000원</p>
    </div>
    <div class="flex justify-between h-[31px] items-center border-t-1 border-secondary-300">
      <p>총 가격</p>
      <p class="font-bold">20,000원</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
