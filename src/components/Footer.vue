<script setup>
const ICON_URL_MAP = [
  { name: '홈', url: '/icons/help_clinic.svg', width: '28px' },
  { name: '타임테이블', url: '/icons/acute.svg', width: '44px' },
  { name: '부스', url: '/icons/distance.svg', width: '28px' },
  { name: '테이블링', url: '/icons/hourglass_bottom.svg', width: '35px' },
];
</script>
<template>
  <div class="w-full h-[60px] bg-white flex items-center justify-around fixed bottom-0">
    <div class="flex flex-col items-center justify-center" v-for="item in ICON_URL_MAP" :class="`w-[${item.width}]`">
      <img :src="item.url" class="w-6 h-6" />
      <div class="text-2xs text-secondary-100">{{ item.name }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
