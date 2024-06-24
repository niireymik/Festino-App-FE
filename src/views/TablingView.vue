<template>
  <div class="flex flex-col min-h-screen h-auto justify-between">
    <Tabling />
    <div class="w-full h-[60px] bg-green-300 flex items-center justify-evenly">
      <div class="w-[44px] h-[43px] bg-red-300 flex flex-col items-center justify-center" v-for="item in 4">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tabling from '@/components/tablings/Tabling.vue';
</script>

<style lang="css" scoped></style>
