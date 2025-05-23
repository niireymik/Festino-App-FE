<script setup>
import OrderDetail from '@/components/orders/OrderDetail.vue';
import { onMounted, ref, watchEffect } from 'vue';
import { useOrderStore } from '@/stores/orders/orderStore';
import { storeToRefs } from 'pinia';
import { useRoute, useRouter } from 'vue-router';
import { formatPhoneNum } from '@/utils/utils';

const route = useRoute();
const router = useRouter();
const { setBoothInfo, isUUID, getAccountInfo } = useOrderStore();
const { recentName, recentPhoneNum } = storeToRefs(useOrderStore());

const TABS = ['전체', '입금 대기', '조리 중', '조리 완료', '주문 취소'];

const { getOrder } = useOrderStore();
const { orderList } = storeToRefs(useOrderStore());

const isInputFill = ref(false);
const regex = /^010/;
const isInputPhoneNumFocused = ref(false);
const isInputNameFocused = ref(false);
const selectedTabNum = ref(0);

const waitingDepositList = ref([]);
const cookingList = ref([]);
const completeCookingList = ref([]);
const cancelCookingList = ref([]);

const isSumbit = ref(false);
const isAgreed = ref(false);

const handleSelectedTab = (index) => {
  selectedTabNum.value = index;
};

const sortedList = (list) => list.sort((a, b) => b.createAt.localeCompare(a.createAt));

const handleClickAgreeCheckBox = () => {
  isAgreed.value = !isAgreed.value;
};

const handleClickSearchButton = async () => {
  if (!isInputFill.value || !isAgreed.value) return;
  await getOrder({ userName: recentName.value, phoneNum: formatPhoneNum(recentPhoneNum.value) });
  isSumbit.value = true;

  waitingDepositList.value = sortedList(orderList?.value.filter((order) => order.orderType === 0));
  cookingList.value = sortedList(orderList?.value.filter((order) => order.orderType === 1));
  completeCookingList.value = sortedList(orderList?.value.filter((order) => order.orderType === 2));
  cancelCookingList.value = sortedList(orderList?.value.filter((order) => order.orderType === 3));
  handleSelectedTab(0);
};

const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '').slice(0, 11);
  let formattedValue = '';

  if (inputValue.length > 3 && inputValue.length < 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else if (inputValue.length >= 8) {
    formattedValue = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  } else {
    formattedValue = inputValue;
  }
  recentPhoneNum.value = formattedValue;
};

const limitInputLength = (event) => {
  let filteredInput = event.target.value.replace(/[^a-zA-Z0-9ㄱ-ㅎ가-힣 ]/g, '');

  if (filteredInput.length > 5) {
    filteredInput = filteredInput.slice(0, 5);
  }
  event.target.value = filteredInput;
  recentName.value = filteredInput;
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
  isInputFill.value =
    recentName.value.length >= 2 && recentPhoneNum.value.length == 13 && regex.test(recentPhoneNum.value);
});

onMounted(async () => {
  isAgreed.value = false;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (!isUUID(route.params.boothId) || isNaN(route.params.tableNum)) {
    return router.push({ name: 'error', params: { page: 'NotFound' } });
  }
  await setBoothInfo(route.params.boothId, route.params.tableNum);
  await getAccountInfo();
});
</script>
<template>
  <div class="w-full h-full flex flex-col justify-center items-center gap-7 pb-5 pt-[74px]">
    <div class="flex flex-col w-full justify-start items-center gap-4 px-5">
      <div class="w-full h-[19px] font-semibold text-secondary-700">주문자 정보 입력</div>
      <div class="w-full flex flex-col gap-[30px] px-5 py-[17px] border-2 border-primary-900-light-16 rounded-3xl">
        <div>
          <div class="text-xs">이름</div>
          <div class="h-11 w-full flex flex-row items-center py-2.5 gap-2.5">
            <img src="/icons/person.svg" class="w-6 h-6" />
            <input
              class="flex-1 focus:outline-none bg-inherit"
              type="text"
              v-model="recentName"
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
              v-model="recentPhoneNum"
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
        <div class="text-xs text-secondary-500 flex flex-col items-start w-full">
          <label for="agree-checkbox" class="flex">
            <input
              @click.agree="handleClickAgreeCheckBox()"
              id="agree-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 mr-2 text-primary-900 bg-gray-100 border-gray-300 rounded-4xl focus:ring-primary-900 focus:ring-offset-1 focus:ring-1 focus:rounded-3xl"
            />
            개인정보 수집 이용 동의 <span class="text-danger"> &nbsp; (필수)</span>
          </label>
        </div>

        <button
          class="h-[51px] w-full text-white font-bold rounded-10xl"
          :class="isInputFill && isAgreed ? 'bg-primary-900' : 'bg-secondary-100'"
          @click="handleClickSearchButton()"
        >
          조회하기
        </button>
      </div>
    </div>

    <div class="flex flex-col w-full relative">
      <!-- tabs -->
      <div
        v-if="isSumbit"
        class="w-full flex justify-between place-items-center h-[52px] relative px-3 overflow-x-auto"
      >
        <div
          v-for="(tab, index) in TABS"
          :key="index"
          @click="handleSelectedTab(index)"
          class="text-secondary-700-light-50 font-semibold text-xl cursor-pointer flex-shrink-0"
        >
          <div :class="{ 'text-secondary-700': index === selectedTabNum }" class="relative px-2">
            {{ tab }}
            <div
              v-if="index === selectedTabNum"
              class="absolute -bottom-[12px] left-0 h-1 bg-primary-900 w-full rounded-full z-10"
            ></div>
          </div>
        </div>
      </div>
      <div
        v-if="isSumbit"
        class="w-screen bg-secondary-300 h-[0.3px] ml-[-32px] absolute top-[50px] left-0 translate-x-8"
      ></div>
      <!-- order lists -->
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 1) && isSumbit" class="py-5 px-5">
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
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 2) && isSumbit" class="py-5 px-5">
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
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 3) && isSumbit" class="py-5 px-5">
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
      <div v-if="(selectedTabNum === 0 || selectedTabNum === 4) && isSumbit" class="py-5 px-5">
        <div class="flex flex-col gap-3 w-full">
          <div class="flex gap-2 items-center text-xs font-semibold">
            <div class="bg-secondary-300 w-3 h-3 rounded-full"></div>
            <div class="text-secondary-500">주문 취소</div>
            <div class="text-secondary-300">({{ cancelCookingList.length }})</div>
          </div>
          <div v-for="(order, index) in cancelCookingList" :key="index">
            <OrderDetail :key="index" :orderInfo="order" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
