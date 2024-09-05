<script setup>
import { useBaseModal } from '@/stores/baseModal';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';

const { openModal } = useBaseModal();

const { selectedOrder } = storeToRefs(useOrderStore());
const props = defineProps({
  orderInfo: {
    type: Object,
    required: true,
  },
});

const orderStatus = [
  {
    text: '입금대기',
    color: 'bg-third-100',
    bgColor: 'bg-third-500',
  },
  {
    text: '조리중',
    color: 'bg-third-200',
    bgColor: 'bg-third-600',
  },
  {
    text: '조리완료',
    color: 'bg-third-300',
    bgColor: 'bg-third-700',
  },
  {
    text: '주문취소',
    color: 'bg-third-400',
    bgColor: 'bg-secondary-100',
  },
];

const createAt = props.orderInfo.createAt.slice(5, 16).replace('T', ' ').replaceAll('-', '/');

const formatPrice = (price) => {
  return new Intl.NumberFormat('ko-KR').format(price);
};

const handleClickMemo = () => {
  selectedOrder.value = props.orderInfo;
  openModal('memoModal');
};
</script>

<template>
  <div class="w-full flex flex-col p-4 rounded-3xl text-sm" :class="`${orderStatus[orderInfo.orderType].bgColor}`">
    <div class="flex flex-col w-full gap-3">
      <div class="h-9 flex justify-between w-full border-b-1 border-secondary-300 flex-wrap">
        <div class="flex gap-1 items-center">
          <img src="/icons/orders/map.svg" />
          <p>{{ orderInfo.adminName }} - {{ orderInfo.tableNum }}번 테이블</p>
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
        <p class="text-right">{{ formatPrice(menu.menuPrice) }}원</p>
      </div>
      <div class="flex justify-between h-[31px] items-center border-t-1 border-secondary-300">
        <p>총 가격</p>
        <p class="font-bold">{{ formatPrice(orderInfo.totalPrice) }}원</p>
      </div>
      <div v-if="orderInfo.note" class="w-full text-right" @click="handleClickMemo()">> 메모</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
