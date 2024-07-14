<script setup>
import { useOrderStore } from '@/stores/orderStore';
import { onMounted, ref } from 'vue';
const { incrementTotalPrice, decrementTotalPrice } = useOrderStore();

const props = defineProps({
  menuInfo: {
    type: Object,
    required: true,
  },
});

const menuPrice = ref(props.menuInfo.menuPrice);
const menuNum = ref(0);

const handlemenuNumInput = (event) => {
  const inputValue = event.target.value.replace(/[^0-9]/g, '');
  event.target.value = Number(inputValue);
};

const hanldeClickmenuNumButton = (type) => {
  if (type === 'plus') {
    if (menuNum.value == 99) return;
    menuNum.value = Number(menuNum.value) + 1;
    menuPrice.value += menuPrice.value;
    incrementTotalPrice(props.menuInfo.menuPrice);
  }
  if (type === 'minus') {
    if (menuNum.value == 0) return;
    menuNum.value = Number(menuNum.value) - 1;
    menuPrice.value -= menuPrice.value;
    decrementTotalPrice(props.menuInfo.menuPrice);
  }
};
</script>

<template>
  <div class="flex gap-5 py-4 items-center w-full bottom-line">
    <div class="min-w-[120px] w-[120px] h-[120px] rounded-3xl bg-primary-700"></div>
    <div class="flex flex-col w-full">
      <div class="flex justify-between items-center">
        <div class="font-semibold text-secondary-700">{{ menuInfo.menuName }}</div>
        <div
          class="text-3xs text-secondary-500 bg-secondary-50 rounded-full w-[46px] h-[18px] items-center justify-center flex"
          @click="handleClick()"
        >
          메인 메뉴
        </div>
      </div>
      <div class="font-light text-secondary-300 text-sm">{{ menuInfo.menuDescription }}</div>
      <div class="font-light text-secondary-300 text-sm">가격: {{ menuPrice }}</div>
      <div class="flex pt-[12px] justify-between items-center">
        <div>{{ menuInfo.menuPrice }}원</div>
        <div class="w-[118px] flex flex-row gap-[10px]">
          <img src="/icons/orders/minus.svg" class="cursor-pointer" @click="hanldeClickmenuNumButton('minus')" />
          <input
            class="w-[62px] h-7 rounded-3.5xl border-1 border-secondary-500 text-center focus:outline-none"
            v-model="menuNum"
            type="text"
            min="0"
            max="99"
            maxlength="2"
            placeholder="0"
            @input="handlemenuNumInput($event)"
          />
          <img src="/icons/orders/plus.svg" class="cursor-pointer" @click="hanldeClickmenuNumButton('plus')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom-line {
  border-bottom: 1px solid rgba(153, 153, 153, 0.68);
}
</style>
