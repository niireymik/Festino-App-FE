<script setup>
import { useOrderModalStore } from '@/stores/orders/orderModalState';
import { useOrderStore } from '@/stores/orders/orderStore';
import { onMounted, ref } from 'vue';

const { tableNum, totalPrice, userName, phoneNum, saveOrder, userOrderList, isCoupon, accountNum } = useOrderStore();

const { closeOrderCheckModal } = useOrderModalStore();

const orderMenus = ref([]);
onMounted(() => {
  orderMenus.value = userOrderList.filter((orderInfo) => orderInfo.menuCount > 0);
});

const handleClickConfirmDepositButton = () => {
  // TODO: CHANGE BOOTH ID
  saveOrder({
    boothId: 'bcb6ddc2-1116-4729-a643-fa8f3bb5408f',
    tableNum: tableNum,
    userName: userName,
    phoneNum: phoneNum,
    menuInfo: orderMenus.value.map(({ menuId, ...rest }) => rest),
    totalPrice: totalPrice,
    isCoupon: isCoupon,
  });
};

const clipAccount = () => {
  window.navigator.clipboard.writeText(accountNum);
};
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div class="dynamic-modal-width h-auto bg-white rounded-3xl">
      <div class="px-[21px] py-7 flex flex-col w-full items-center gap-7">
        <div class="font-semibold text-xl text-secondary-700">주문 확인</div>

        <div class="w-full gap-[4px]">
          <div class="font-semibold text-secondary-700">결제정보 확인</div>
          <div class="w-full rounded-xl bg-primary-900-lightest p-4">
            <div class="font-bold flex pb-[12px] justify-between text-secondary-500">
              <div class="text-sm">신한은행</div>
              <div class="flex gap-[8px] items-center cursor-pointer" @click="clipAccount()">
                <div class="text-sm">{{ accountNum }}</div>
                <div class="w-[16px] h-[16px] bg-center bg-board-icon bg-no-repeat bg-[length:16px_16px]"></div>
              </div>
            </div>
            <div class="flex pb-[12px] justify-between text-secondary-500">
              <div class="text-sm">예금주</div>
              <div class="text-sm">{{ userName }}님</div>
            </div>
            <div class="w-full border-secondary-300 border-1"></div>
            <div class="pt-[10px] pb-[4px] flex justify-between text-sm text-secondary-500">
              <div>총 가격</div>
              <div>{{ totalPrice }}원</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[4px] items-center">
          <div class="font-bold text-warning">주의사항</div>
          <div class="flex items-center flex-col text-secondary-500 text-xs">
            <div>입금 후 입금 완료 버튼을 눌러주세요.</div>
            <div>입금 완료 버튼을 눌러야 주문이 완료됩니다.</div>
          </div>
        </div>
        <div class="gap-5 w-full flex font-bold">
          <button
            class="w-full h-[42px] flex justify-center items-center border-2 border-primary-700 rounded-3xl text-primary-700"
            @click="closeOrderCheckModal()"
          >
            취소
          </button>
          <button
            class="w-full h-[42px] flex justify-center items-center border-2 border-primary-700 bg-primary-700 text-white rounded-3xl"
            @click="handleClickConfirmDepositButton()"
          >
            입금 완료
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-modal-width {
  width: calc(390 / 430 * 100%) !important;
}
</style>
