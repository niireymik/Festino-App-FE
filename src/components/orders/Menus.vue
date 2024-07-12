<template>
  <div class="flex gap-5 py-4 items-center w-full bottom-line">
    <div class="min-w-[120px] w-[120px] h-[120px] rounded-3xl bg-primary-700"></div>
    <div class="flex flex-col w-full">
      <div class="flex justify-between items-center">
        <div class="font-semibold text-secondary-700">메뉴이름</div>
        <div class="text-3xs text-secondary-500 bg-secondary-50 rounded-full w-[46px] h-[18px] items-center justify-center flex">메인 메뉴</div>
      </div>
      <div class="font-light text-secondary-300 text-sm">제가 한번 열심히 메뉴 설명을 적어보겠습니다.</div>
      <div class="font-light text-secondary-300 text-sm">가격: 2,000원</div>
      <div class="flex pt-[12px] justify-between items-center">
        <div>2,000원</div>
        <div class="flex gap-[10px] items-center">
          <div class="w-[15.75px] h-[15.75px] bg-primary-700 rounded-full text-white flex items-center justify-center">-</div>
          <div class="w-[62px] h-[28px] flex items-center justify-center rounded-full border-2 border-secondary-700">0</div>
          <div class="w-[15.75px] h-[15.75px] bg-primary-700 rounded-full text-white flex items-center justify-center">+</div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script setup>

</script>

<style scoped>
.bottom-line {
  border-bottom: 1px solid rgba(153, 153, 153, 0.68);
}
</style>