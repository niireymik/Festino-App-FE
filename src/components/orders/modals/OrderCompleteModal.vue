<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({
  handleCloseCompleteModal: {
    type: Function,
    required: true,
  },
});

const router = useRouter();
const handleClickConfirmButton = () => {
  props.handleCloseCompleteModal();
  router.push({ name: 'order' });
};
</script>

<template>
  <div class="max-w-[500px] w-full h-full fixed top-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div
      class="dynamic-modal-width bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
      @click.stop=""
    >
      <div class="w-12 h-12 rounded-full bg-primary-900-light-16 grid place-items-center">
        <img src="/icons/info.svg" />
      </div>
      <div class="w-full flex flex-col gap-3 items-center">
        <p class="text-secondary-700 text-xl font-bold">입금완료</p>
        <p class="text-secondary-500">입금이 완료되었습니다.<br />학과에서 주문을 확인중입니다.</p>
      </div>
      <button
        class="w-full h-12 bg-primary-900 rounded-3xl text-white font-semibold text-xl"
        @click="handleClickConfirmButton()"
      >
        확인
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-modal-width {
  width: calc(390 / 430 * 100%) !important;
}
</style>
