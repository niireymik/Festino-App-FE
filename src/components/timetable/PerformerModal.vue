<script setup>
const props = defineProps({
  handleClosePerformerModal: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div class="w-full h-full fixed top-0 left-0 bg-opacity-60 bg-black z-50 flex justify-center items-center">
    <div class="w-[266px] h-[248px] bg-white rounded-2xl flex flex-col items-center">
      <div class="w-full flex justify-end pt-2 px-2.5" @click="handleClosePerformerModal()">
        <div class="w-[12px] h-[12px] bg-x-button bg-center bg-no-repeat bg-[length:12px_12px]"></div>
      </div>
      <div class="text-2xs text-primary-700 rounded-full w-[70px] h-5 flex justify-center items-center border-2 border-primary font-medium">교내 동아리</div>
      <div class="py-[5px] flex justify-center">
        <div class="w-[100px] h-[100px] bg-white rounded-full bg-tino-cheer-up bg-center bg-no-repeat bg-[length:61px_62px] border-primary-700-default border-2"></div>
      </div>
      <div class="text-secondary-700 text-xs font-medium pt-1 pb-0.5">댄스 동아리 'Gan.G'</div>
      <div class="text-secondary-500 text-2xs flex flex-col items-center font-medium pb-3 leading-tight">
        <div>'Gan.G'는 교내 댄스 동아리로,</div>
        <div>춤을 좋아한다면 누구나 가입할 수 있는 동아리입니다.</div>
      </div>
      <div class="text-3xs text-secondary-500 rounded-full w-[82px] h-5 flex items-center justify-center bg-instagram-bg gap-1">
        <div class="w-[10px] h-[10px] bg-instagram bg-center bg-no-repeat bg-[length:10px_10px]"></div>
        <div>@tukorea.gan.g</div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
</style>
