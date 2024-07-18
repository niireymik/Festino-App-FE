<script setup>
  const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  category: {
    type: String,
    required: true
  },
});
</script>

<template>
  <div class="cursor-pointer flex justify-center py-5 rounded-3xl w-[170px] xs:w-[210px] sm:w-[230px] border-2"
    :class="data.isShowing ? 'border-primary text-primary-700' : 'bg-secondary-50 border-secondary-100 text-secondary-100'">{{ category }} ' {{ data.performer }} '</div>
</template>

<style lang="css" scoped>
</style>
