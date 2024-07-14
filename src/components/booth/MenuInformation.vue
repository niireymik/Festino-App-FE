<template>
  <div class="dynamic-padding">
    <div class="w-full h-[120px] p-[13px] bg-white border border-primary-900-light rounded-3xl shadow-4xl flex mb-[10px]">
      <!-- food image -->
      <div class="min-w-[94px] h-full bg-primary-900-light rounded-3xl"></div>
      <div class="w-[359px] flex flex-col justify-center">
        <div class="pl-[12px]">
          <div class="pb-2 flex justify-between">
            <div class="text-[14px] font-semibold text-secondary-700">치즈 닭꼬치</div>
            <div class="flex">
              <MenuOption class="mr-1">대표 메뉴</MenuOption>
              <MenuStatus>판매중</MenuStatus>
            </div>
          </div>
          <div class="w-fit pb-3 text-[8px] text-seconday-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet.
          </div>
          <div class="flex justify-between">
            <div class="flex items-center">
              <div class="text-secondary-700 text-[14px] font-semibold">2,000</div>
              <div class="text-secondary-500 text-[14px]">원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuOption from '@/components/booth/MenuOption.vue';
import MenuStatus from '@/components/booth/MenuStatus.vue';
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>