<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  orderInfo: {
    type: Object,
    required: true,
  },
});

const createAt = props.orderInfo.createAt.slice(0, 16).replace('T', ' ').replaceAll('-', '.');
</script>
<template>
  <div
    class="w-full bg-primary-900-light-6 border-2 border-primary-900-light-16 flex flex-col p-4 gap-3 rounded-3xl text-sm"
  >
    <div class="h-9 flex justify-between w-full border-b-1 border-secondary-300">
      <div class="flex gap-1 items-center">
        <img src="/icons/orders/map.svg" />
        <p>컴퓨터공학부 No.{{ orderInfo.tableNum }}</p>
      </div>
      <div class="flex gap-1 items-center">
        <img src="/icons/orders/clock.svg" />
        <p>{{ createAt }}</p>
      </div>
    </div>
    <div
      class="grid grid-cols-3 min-h-[17px] text-center break-keep"
      v-for="(menu, index) in orderInfo.menuInfo"
      :key="index"
    >
      <p class="text-left">
        {{ menu.menuName }}
      </p>
      <p>{{ menu.menuCount }}개</p>
      <p class="text-right">{{ menu.menuPrice }}원</p>
    </div>
    <div class="flex justify-between h-[31px] items-center border-t-1 border-secondary-300">
      <p>총 가격</p>
      <p class="font-bold">{{ orderInfo.totalPrice }}원</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
