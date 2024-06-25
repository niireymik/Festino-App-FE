<template>
  <div class="relative">
    <div class="w-full min-h-[240px] bg-booth-banner">
      <div class="absolute w-auto h-auto dynamic-top dynamic-padding">
        <div class="banner-title-shadow bg-gradient-to-b from-white from-50% to-primary-300 bg-clip-text text-transparent font-jalnan2 text-md">티노와 함께</div>
        <div class="banner-title-shadow bg-gradient-to-b from-white from-50% to-primary-300 bg-clip-text text-transparent font-jalnan2 text-3xl">축제 부스 알아보기</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  
}
</script>

<style lang="css" scoped>
.dynamic-top {
  top: calc(85 / 230 * 100%) !important;
}
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
.banner-title-shadow {
  text-shadow: 0px 4px 5px rgba(68, 68, 68, 0.15);
}
</style>