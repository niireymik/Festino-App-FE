<script setup>
const props = defineProps({
  type: String,
});
</script>
<template>
  <div class="w-full dynamic-padding">
    <div class="flex justify-between">
      <div class="text-2xl">타임테이블</div>
      <div v-if="type === 'notice'" class="text-xs text-secondary-300">더보기 ></div>
    </div>
    <ShowPreview></ShowPreview>
  </div>
</template>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
