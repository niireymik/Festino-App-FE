<script setup>
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';
import OrderDetail from '@/components/orders/OrderDetail.vue';
import { onMounted, ref, watchEffect } from 'vue';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { useOrderModalStore } from '@/stores/orders/orderModalState';
import NotExistOrderModal from '@/components/orders/modals/NotExistOrderModal.vue';
import { handleStopScroll } from '@/utils/handleScrollStop';

onMounted(() => {
  window.scrollTo(0, 0);
});

const { getOrder } = useOrderStore();
const { orderList } = storeToRefs(useOrderStore());
const { notExistOrderModalState } = storeToRefs(useOrderModalStore());

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);

const handleClickSearchButton = async () => {
  if (!isInputFill.value) return;
  getOrder({ userName: name.value, phoneNum: phoneNum.value });
};

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 11;
  handleStopScroll([notExistOrderModalState.value]);
});
</script>
<template>
  <div class="w-full flex flex-col justify-center items-center gap-7 px-5 pb-5 pt-[74px]">
    <div class="flex flex-col w-full justify-start items-center gap-4">
      <div class="w-full h-[19px] font-semibold text-secondary-700">주문자 정보 입력</div>
      <div class="w-full flex flex-col gap-[30px] px-5 py-[17px] border-2 border-primary-900-light-16 rounded-3xl">
        <div>
          <InputName v-model="name" />
          <InputPhoneNum v-model="phoneNum" />
        </div>
        <button
          class="h-[51px] w-full text-white font-bold rounded-10xl"
          :class="{ 'bg-primary-900': isInputFill, 'bg-secondary-100': !isInputFill }"
          @click="handleClickSearchButton()"
        >
          조회하기
        </button>
      </div>
    </div>
    <div v-for="order in orderList" class="w-full">
      <OrderDetail :key="order.id" :orderInfo="order" />
    </div>
  </div>
  <NotExistOrderModal v-if="notExistOrderModalState" />
</template>

<style lang="scss" scoped></style>
