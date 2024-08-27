<script setup>
import { formatPrice } from '@/utils/utils';
import { useOrderStore } from '@/stores/orders/orderStore';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';
import { useOrderModalStore } from '@/stores/orders/orderModalState';
import ModalBackground from '@/components/modals/ModalBackground.vue';
import { formatPhoneNum } from '@/utils/utils';
import PersonalInfo from '@/components/PersonalInfo.vue';
import { usePersonalInfoStore } from '@/stores/personalInfoStore';

const { totalPrice, userOrderList, setUserName, setPhoneNum } = useOrderStore();
const { closeOrderModal, openOrderCheckModal } = useOrderModalStore();
const { recentName, recentPhoneNum } = storeToRefs(useOrderStore());

const { isAgreed } = storeToRefs(usePersonalInfoStore());

const orderMenus = ref([]);
const isSame = ref(false);

onMounted(() => {
  isSame.value = false;
  isAgreed.value = false;
  orderMenus.value = userOrderList.filter((orderInfo) => orderInfo.menuCount > 0);
});

const regex = /^010/;

const handleClickOrderButton = () => {
  if (
    recentName.value.length < 2 ||
    recentPhoneNum.value.length !== 13 ||
    !isSame.value ||
    !isAgreed.value ||
    !regex.test(recentPhoneNum.value)
  )
    return;
  setUserName(recentName.value);
  setPhoneNum(formatPhoneNum(recentPhoneNum.value));

  closeOrderModal();
  openOrderCheckModal();
};

const handleClickSameCheckBox = () => {
  isSame.value = !isSame.value;
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
          <InputName v-model="recentName" />
          <InputPhoneNum v-model="recentPhoneNum" />
        </div>
        <div class="w-full gap-1 flex flex-col">
          <div class="font-semibold text-secondary-700">주문하기</div>
          <div class="w-full rounded-xl bg-primary-900-lightest p-4 max-h-[155px] overflow-auto">
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
        <div class="flex flex-col">
          <label for="same-checkbox" class="flex items-center text-sm font-medium text-secondary-700 mb-3">
            <input
              @click.stop="handleClickSameCheckBox()"
              id="same-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 mr-2 text-primary-900 bg-gray-100 border-gray-300 rounded-4xl focus:ring-primary-900 focus:ring-offset-1 focus:ring-1 focus:rounded-3xl"
            />
            입금자명과 주문자명이 동일합니까? (필수)
          </label>
          <PersonalInfo />
        </div>
        <div class="gap-5 flex w-full font-bold">
          <button
            class="w-full h-[42px] flex justify-center items-center border-2 border-primary-700 rounded-3xl text-primary-700"
            @click="closeOrderModal()"
          >
            취소
          </button>
          <button
            class="w-full h-[42px] flex justify-center items-center text-white rounded-3xl"
            :class="
              recentName.length > 2 && recentPhoneNum.length === 13 && isSame && isAgreed
                ? 'bg-primary-700 border-2 border-primary-700'
                : 'bg-secondary-100'
            "
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
