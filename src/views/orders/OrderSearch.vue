<script setup>
import OrderDetail from '@/components/orders/OrderDetail.vue';
import { onMounted, ref, watchEffect } from 'vue';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { useOrderModalStore } from '@/stores/orders/orderModalState';
import NotExistOrderModal from '@/components/orders/modals/NotExistOrderModal.vue';
import { handleStopScroll } from '@/utils/handleScrollStop';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const { setBoothInfo, isUUID } = useOrderStore();
onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (!isUUID(route.params.boothId) || isNaN(route.params.tableNum)) {
    return router.push({ name: 'error', params: { page: 'order' } });
  }
  setBoothInfo(route.params.boothId, route.params.tableNum);
});

const { getOrder } = useOrderStore();
const { orderList } = storeToRefs(useOrderStore());
const { notExistOrderModalState } = storeToRefs(useOrderModalStore());

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);
const regex = /^010/;
const isInputPhoneNumFocused = ref(false);
const isInputNameFocused = ref(false);

const handleClickSearchButton = async () => {
  if (!isInputFill.value) return;
  getOrder({ userName: name.value, phoneNum: phoneNum.value });
};

const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  let formattedValue = '';

  if (inputValue.length > 3 && inputValue.length < 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    formattedValue = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }

  event.target.value = formattedValue;
  phoneNum.value = inputValue;
};

const limitInputLength = (event) => {
  let filteredInput = event.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g, '');

  if (filteredInput.length > 5) {
    filteredInput = filteredInput.slice(0, 5);
  }
  event.target.value = filteredInput;
  name.value = filteredInput;
};

const handleScrollToFocusInput = () => {
  if (isInputNameFocused.value) {
    document.getElementById('nameInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (isInputPhoneNumFocused.value) {
    document.getElementById('phoneNumInput').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

watchEffect(() => {
  handleScrollToFocusInput();
});

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 11 && regex.test(phoneNum.value);
  handleStopScroll([notExistOrderModalState.value]);
});
</script>
<template>
  <div class="w-full flex flex-col justify-center items-center gap-7 px-5 pb-5 pt-[74px]">
    <div class="flex flex-col w-full justify-start items-center gap-4">
      <div class="w-full h-[19px] font-semibold text-secondary-700">주문자 정보 입력</div>
      <div class="w-full flex flex-col gap-[30px] px-5 py-[17px] border-2 border-primary-900-light-16 rounded-3xl">
        <div>
          <div class="text-xs">이름</div>
          <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
            <img src="/icons/person.svg" class="w-6 h-6" />
            <input
              class="flex-1 focus:outline-none bg-inherit"
              type="text"
              @input="limitInputLength($event)"
              placeholder="티노"
              maxlength="5"
              @focus="isInputNameFocused = true"
              @blur="isInputNameFocused = false"
              id="nameInput"
            />
          </div>
          <hr
            class="mb-[30px] border-0 h-[1px]"
            :class="{
              'bg-primary-900': isInputNameFocused,
              'bg-secondary-500-light-20': !isInputNameFocused,
            }"
          />
          <div class="text-xs">전화번호</div>
          <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
            <img src="/icons/phone.svg" class="w-6 h-6" />
            <input
              class="flex-1 focus:outline-none bg-inherit"
              type="tel"
              placeholder="010-1234-5678"
              @input="formattedPhoneNum($event)"
              maxlength="13"
              @focus="isInputPhoneNumFocused = true"
              @blur="isInputPhoneNumFocused = false"
              id="phoneNumInput"
            />
          </div>
          <hr
            class="border-0 h-[1px]"
            :class="{
              'bg-primary-900': isInputPhoneNumFocused,
              'bg-secondary-500-light-20': !isInputPhoneNumFocused,
            }"
          />
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
