<script setup>
import { useOrderStore } from '@/stores/orders/orderStore';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';
import { useOrderModalStore } from '@/stores/orders/orderModalState';
import ModalBackground from '@/components/modals/ModalBackground.vue';

const { totalPrice, userOrderList, setUserName, setPhoneNum, saveRecentInfo } = useOrderStore();
const { closeOrderModal, openOrderCheckModal } = useOrderModalStore();
const { recentName, recentPhoneNum } = storeToRefs(useOrderStore());

const orderMenus = ref([]);
onMounted(() => {
  orderMenus.value = userOrderList.filter((orderInfo) => orderInfo.menuCount > 0);
});

const name = ref(recentName.value);
const phoneNum = ref(recentPhoneNum.value);
const regex = /^010/;

const handleClickOrderButton = () => {
  if (name.value.length < 2 || phoneNum.value.length !== 13 || !regex.test(phoneNum.value)) return;
  setUserName(name.value);
  setPhoneNum(phoneNum.value.replace(/-/g, ''));

  closeOrderModal();
  saveRecentInfo(phoneNum.value, name.value)
  openOrderCheckModal();
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('ko-KR').format(price);
};
</script>

<template>
  <ModalBackground :closeModal="closeOrderModal">
    <div
      class="relative col-start-2 row-start-2 h-full dynamic-width bg-white rounded-3xl flex flex-col items-center px-7 py-[21px]"
      @click.stop=""
    >
      <div class="flex flex-col gap-7 w-full">
        <div class="font-semibold text-xl text-secondary-700 text-center">주문하기</div>
        <div class="px-4 w-full">
          <InputName v-model="name" />
          <InputPhoneNum v-model="phoneNum" />
        </div>
        <div class="w-full gap-1 flex flex-col">
          <div class="font-semibold text-secondary-700">주문하기</div>
          <div class="w-full rounded-xl bg-primary-900-lightest p-4 max-h-[250px] overflow-auto">
            <div
              v-for="orderMenu in orderMenus"
              :key="orderMenu.menuName"
              class="grid grid-cols-3 pb-[12px] text-secondary-700 text-sm"
            >
              <div class="text-left">{{ orderMenu.menuName }}</div>
              <div class="text-center">{{ orderMenu.menuCount }}개</div>
              <div class="text-right">{{ formatPrice(orderMenu.menuPrice) }}원</div>
            </div>
            <div class="w-full border-secondary-300 border-1"></div>
            <div class="pt-[10px] pb-[4px] flex justify-between text-sm text-secondary-700">
              <div>총 가격</div>
              <div>{{ formatPrice(totalPrice) }}원</div>
            </div>
          </div>
        </div>
        <div class="gap-5 flex w-full font-bold">
          <button
            class="w-full h-[42px] flex justify-center items-center border-2 border-primary-700 rounded-3xl text-primary-700"
            @click="closeOrderModal()"
          >
            취소
          </button>
          <button
            class="w-full h-[42px] flex justify-center items-center border-2 border-primary-700 bg-primary-700 text-white rounded-3xl"
            @click="handleClickOrderButton()"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  </ModalBackground>
</template>

<style lang="css" scoped>
.dynamic-width {
  width: calc(386 / 430 * 100%) !important;
}
</style>
