<template>
  <div>
    <BoothBanner />
    <BoothMap />
    <div class="dynamic-padding">
      <BoothMenu />
    </div>
    <BoothIntro />
  </div>
</template>

<script setup>
import BoothBanner from '@/components/booth/BoothBanner.vue';
import BoothMap from '@/components/booth/BoothMap.vue';
import BoothMenu from '@/components/booth/BoothMenu.vue';
import BoothIntro from '@/components/booth/BoothIntroduction.vue';
</script>

<style lang="css" scoped>
.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
  padding-bottom: calc(20 / 430 * 100%) !important;
}
</style>