<template>
  <div class="dynamic-padding w-full h-auto">
    <div class="w-full min-h-[382px] bg-primary-300 border border-primary-900-light rounded-3xl"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-top: calc(25 / 430 * 100%) !important;
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: calc(25 / 430 * 100%) !important;
}
</style>