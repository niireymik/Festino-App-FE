<script setup>
import { useOrderStore } from '@/stores/orderStore';
import { onMounted, ref, watchEffect } from 'vue';
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';

const { totalPrice, userOrderList, setUserName, setPhoneNum } = useOrderStore();

const orderMenus = ref([]);
onMounted(() => {
  orderMenus.value = userOrderList.filter((orderInfo) => orderInfo.menuCount > 0);
});

const props = defineProps({
  handleCloseOrderModal: {
    type: Function,
    required: true,
  },
  handleOpenCheckModal: {
    type: Function,
    required: true,
  },
});

const name = ref('');
const phoneNum = ref('');

const handleClickOrderButton = () => {
  if (name.value.length < 2 || phoneNum.value.length !== 11) return;
  setUserName(name.value);
  setPhoneNum(phoneNum.value);
  props.handleOpenCheckModal();
  props.handleCloseOrderModal();
};
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div class="w-[386px] h-auto bg-white rounded-3xl px-7 py-[21px]">
      <div class="flex flex-col gap-7">
        <div class="font-semibold text-xl text-secondary-700 text-center">주문하기</div>
        <div class="px-4 w-full">
          <InputName v-model="name" />
          <InputPhoneNum v-model="phoneNum" />
        </div>
        <div class="w-full gap-1">
          <div class="font-semibold text-secondary-700">주문하기</div>
          <div class="w-full rounded-xl bg-primary-900-lightest p-4">
            <div
              v-for="orderMenu in orderMenus"
              :key="orderMenu.menuName"
              class="grid grid-cols-3 pb-[12px] text-secondary-700 text-sm"
            >
              <div class="text-left">{{ orderMenu.menuName }}</div>
              <div class="text-center">{{ orderMenu.menuCount }}개</div>
              <div class="text-right">{{ orderMenu.menuPrice }}원</div>
            </div>
            <div class="w-full border-secondary-300 border-1"></div>
            <div class="pt-[10px] pb-[4px] flex justify-between text-sm text-secondary-700">
              <div>총 가격</div>
              <div>{{ totalPrice }}원</div>
            </div>
          </div>
        </div>
        <div class="gap-5 flex w-full">
          <div
            class="w-[162px] h-[42px] flex justify-center items-center border-2 border-primary-700 rounded-3xl text-primary-700"
            @click="handleCloseOrderModal()"
          >
            취소
          </div>
          <div
            class="w-[162px] h-[42px] flex justify-center items-center border-2 border-primary-700 bg-primary-700 text-white rounded-3xl"
            @click="handleClickOrderButton()"
          >
            확인
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
