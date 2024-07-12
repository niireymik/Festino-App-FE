<template>
  <div>
    <DetailBanner />
    <BoothSelect />
    <BoothMap />
    <DetailImportmation />
    <BoothInformation />
    <MenuList />
    <BoothReservation />
  </div>
</template>

<script setup>
import BoothMap from "@/components/booth/BoothMap.vue";
import BoothReservation from "@/components/booth/BoothReservation.vue";
import DetailImportmation from "@/components/booth/DetailInformation.vue";
import BoothInformation from "@/components/booth/BoothInformation.vue";
import DetailBanner from "@/components/booth/DetailBanner.vue";
import BoothSelect from "@/components/booth/BoothSelect.vue";
import MenuList from "@/components/booth/MenuList.vue";
</script>

<style lang="css" scoped>
</style>