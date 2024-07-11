<template>
  <div class="w-full h-3 mb-7 bg-secondary-200"></div>
  <div class="mb-[28px]">
    <DetailInformationVue />
    <MenuInformation v-for="i in 6" :key="i" />
  </div>
</template>

<script setup>
import MenuInformation from "./MenuInformation.vue";
import DetailInformationVue from "./DetailInformation.vue";
</script>

<style lang="css" scoped>
</style>