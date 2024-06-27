<template>
  <div class="dynamic-padding">
    <div class="font-pretendard text-2xl font-semibold">현재 대기중</div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>