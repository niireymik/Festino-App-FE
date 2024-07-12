<script setup>
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

const formattedPhoneNum = (event) => {
  const inputValue = event.target.value.replace(/\D/g, '');
  if (inputValue.length > 3 && inputValue.length < 8) {
    event.target.value = inputValue.replace(/(\d{3})(\d{1,4})/, '$1-$2');
  } else {
    event.target.value = inputValue.replace(/(\d{3})(\d{4})(\d{1,4})/, '$1-$2-$3');
  }
};

const confirm = () => {
  props.handleOpenCheckModal();
  props.handleCloseOrderModal();
}
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div class="w-[346px] h-auto bg-white rounded-3xl">
      <div class="px-[21px] py-[28px] flex flex-col w-full items-center gap-[28px]">
        <div class="font-semibold text-xl text-secondary-700">주문하기</div>
        <div class="w-full gap-[4px]">
          <div class="font-semibold text-secondary-700">주문하기</div>
          <div class="w-full rounded-xl bg-primary-900-lightest p-4">
            <div v-for="item in 4" :key="item" class="flex pb-[12px] justify-between text-secondary-700">
              <div class="w-[90px] text-sm">메뉴이름</div>
              <div class="text-sm">4개</div>
              <div class="text-sm">2000원</div>
            </div>
            <div class="w-full border-secondary-300 border-1"></div>
            <div class="pt-[10px] pb-[4px] flex justify-between text-sm text-secondary-700">
              <div>총 가격</div>
              <div>20,000원</div>
            </div>
          </div>
        </div>
        <div class="w-full gap-[4px]">
          <div class="font-semibold text-secondary-700">주문자 정보</div>
          <div class="border-2 border-primary rounded-xl p-4 gap-2 flex flex-col">
            <div class="flex items-center">
              <div class="text-sm w-20">입금자명</div>
              <div class="w-full">
                <input class="text-sm w-full focus:outline-none text-secondary-700" dir="rtl" placeholder="ex ) 티노"/>
              </div>
            </div>
            <div class="flex items-center">
              <div class="text-sm w-20">전화번호</div>
              <div class="w-full">
                <input class="text-sm w-full focus:outline-none text-secondary-700" type="tel" dir="rtl" placeholder="ex ) 010-0000-0000" @input="formattedPhoneNum($event)" maxlength="13" />
              </div>
            </div>
          </div>
        </div>
        <div class="gap-[20px] flex">
          <div class="w-[142px] h-[42px] flex justify-center items-center border-2 border-primary-700 rounded-3xl text-primary-700" @click="handleCloseOrderModal()">취소</div>
          <div class="w-[142px] h-[42px] flex justify-center items-center border-2 border-primary-700 bg-primary-700 text-white rounded-3xl" @click="confirm()">확인</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
