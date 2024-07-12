<script setup>
import InputName from '@/components/tablings/InputName.vue';
import InputPhoneNum from '@/components/tablings/InputPhoneNum.vue';
import OrderDetail from '@/components/orders/OrderDetail.vue';
import NotExistOrderModal from '@/components/orders/modals/NotExistOrderModal.vue';
import { onMounted, ref, watchEffect } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});

const name = ref('');
const phoneNum = ref('');
const isInputFill = ref(false);
const notExistOrderModal = ref(false);

const handleClickSearchButton = () => {
  if (!isInputFill.value) return;
  handleClickOpenNotExistOrderModal();
  isOrderExist.value = true;
};

const isOrderExist = ref(false);
const handleClickOpenNotExistOrderModal = () => {
  notExistOrderModal.value = true;
};
const handleClickCloseNotExistOrderModal = () => {
  notExistOrderModal.value = false;
};

const handleScrollStop = () => {
  if (notExistOrderModal.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

watchEffect(() => {
  isInputFill.value = name.value.length >= 2 && phoneNum.value.length == 13;
  handleScrollStop();
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
    <div class="w-full flex flex-col gap-12">
      <OrderDetail v-if="isOrderExist" />
      <OrderDetail v-if="isOrderExist" />
    </div>
  </div>
  <NotExistOrderModal
    v-if="notExistOrderModal"
    :handleClickCloseNotExistOrderModal="handleClickCloseNotExistOrderModal"
  />
</template>

<style lang="scss" scoped></style>
