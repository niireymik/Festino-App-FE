<template>
  <div>
    <BoothBanner />
    <div v-for="i in 5" :key="i">
      <BoothIntro />
    </div>
  </div>
</template>

<script setup>
import BoothBanner from '@/components/booth/BoothBanner.vue';
import BoothIntro from '@/components/booth/BoothIntroduction.vue';
</script>

<style lang="">
    
</style>