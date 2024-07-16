<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
<template>
  <div class="relative">
    <div class="w-full min-h-[231px] dynamic-tino-height bg-tino-no-arm-v2 bg-cover bg-no-repeat bg-right-top relative">
      <div class="absolute w-auto h-auto dynamic-top dynamic-padding">
        <div class="font-jalnan2 text-xs text-white">예약으로 더 즐거운 축제</div>
        <div
          class="font-jalnan2 text-3xl bg-gradient-to-t from-white-opacity from-20% to-white text-transparent to-100% bg-clip-text"
        >
          테이블링 시스템
        </div>
      </div>
    </div>
    <div
      class="w-min-[375px] w-max-[500px] w-full dynamic-tino-arm-height absolute z-30 top-[215px] bg-tino-arm4x bg-cover bg-no-repeat bg-right-top"
    ></div>
  </div>
</template>

<style lang="css" scoped>
.dynamic-top {
  top: calc(82 / 230 * 100%) !important;
}

.dynamic-tino-height {
  height: calc(231 / 430 * 100%) !important;
  @apply bg-right-bottom;
}
.dynamic-tino-arm-height {
  @apply rounded-tl-3xl border-primary bg-white h-[40px];
}
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
