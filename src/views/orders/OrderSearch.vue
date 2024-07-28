<script setup>
import OrderDetail from '@/components/orders/OrderDetail.vue';
import { onMounted, ref, watch, watchEffect } from 'vue';
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

const TABS = ['전체', '입금 대기', '조리 중', '조리 완료'];

const { getOrder } = useOrderStore();
const { orderList } = storeToRefs(useOrderStore());
const { notExistOrderModalState } = storeToRefs(useOrderModalStore());

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);
const regex = /^010/;
const isInputPhoneNumFocused = ref(false);
const isInputNameFocused = ref(false);
const selectedTabNum = ref(0);

const waitingDepositList = ref([]);
const cookingList = ref([]);
const completeCookingList = ref([]);

const isSumbit = ref(false);

const handleSelectedTab = (index) => {
  selectedTabNum.value = index;
  handleOrderList(index);
};

const handleOrderList = (type) => {
  if (type === 1) return (waitingDepositList.value = orderList.value.filter((order) => order.orderType === 0));
  if (type === 2) return (cookingList.value = orderList.value.filter((order) => order.orderType === 1));
  if (type === 3) return (completeCookingList.value = orderList.value.filter((order) => order.orderType === 2));
};

const handleClickSearchButton = async () => {
  if (!isInputFill.value) return;
  await getOrder({ userName: name.value, phoneNum: phoneNum.value });
  isSumbit.value = true;

  waitingDepositList.value = orderList?.value.filter((order) => order.orderType === 0);
  cookingList.value = orderList?.value.filter((order) => order.orderType === 1);
  completeCookingList.value = orderList?.value.filter((order) => order.orderType === 2);
  handleSelectedTab(0);
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
  <div class="w-full h-full flex flex-col justify-center items-center gap-7 px-5 pb-5 pt-[74px]">
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

    <div class="flex flex-col w-full">
      <!-- tabs -->
      <div v-if="isSumbit" class="w-full flex justify-between place-items-center h-[52px] relative px-3">
        <div
          v-for="(tab, index) in TABS"
          :key="index"
          @click="handleSelectedTab(index)"
          class="text-secondary-700-light-50 font-semibold text-xl cursor-pointer"
        >
          <div :class="{ 'text-secondary-700': index === selectedTabNum }" class="relative px-2">
            {{ tab }}
            <div
              v-if="index === selectedTabNum"
              class="absolute -bottom-[14px] left-0 h-1 bg-primary-900 w-full rounded-full"
            ></div>
          </div>
        </div>
        <div
          class="w-screen max-w-[500px] min-w-[375px] bg-secondary-300 h-[0.3px] absolute bottom-0 -translate-x-10"
        ></div>
      </div>
      <!-- order lists -->
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 1) && waitingDepositList.length !== 0" class="py-5">
        <div class="flex flex-col gap-3 w-full">
          <div class="flex gap-2 items-center text-xs font-semibold">
            <div class="bg-third-100 w-3 h-3 rounded-full"></div>
            <div class="text-secondary-500">입금 대기</div>
            <div class="text-third-100">({{ waitingDepositList.length }})</div>
          </div>
          <div v-for="(order, index) in waitingDepositList" :key="index">
            <OrderDetail :key="index" :orderInfo="order" />
          </div>
        </div>
      </div>
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 2) && cookingList.length !== 0" class="py-5">
        <div class="flex flex-col gap-3 w-full">
          <div class="flex gap-2 items-center text-xs font-semibold">
            <div class="bg-third-200 w-3 h-3 rounded-full"></div>
            <div class="text-secondary-500">조리 중</div>
            <div class="text-third-200">({{ cookingList.length }})</div>
          </div>
          <div v-for="(order, index) in cookingList" :key="index">
            <OrderDetail :key="index" :orderInfo="order" />
          </div>
        </div>
      </div>
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 3) && completeCookingList.length !== 0" class="py-5">
        <div class="flex flex-col gap-3 w-full">
          <div class="flex gap-2 items-center text-xs font-semibold">
            <div class="bg-third-300 w-3 h-3 rounded-full"></div>
            <div class="text-secondary-500">조리 완료</div>
            <div class="text-third-300">({{ completeCookingList.length }})</div>
          </div>
          <div v-for="(order, index) in completeCookingList" :key="index">
            <OrderDetail :key="index" :orderInfo="order" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <NotExistOrderModal v-if="notExistOrderModalState" />
</template>

<style lang="scss" scoped></style>
