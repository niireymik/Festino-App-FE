<script setup>
import BoothMap from "@/components/booth/BoothMap.vue";
import BoothReservation from "@/components/booth/BoothReservation.vue";
import DetailImportmation from "@/components/booth/DetailInformation.vue";
import BoothInformation from "@/components/booth/BoothInformation.vue";
import DetailBanner from "@/components/booth/DetailBanner.vue";
import BoothSelect from "@/components/booth/BoothSelect.vue";
import MenuList from "@/components/booth/MenuList.vue";
import { useGetBoothDataStore } from "@/stores/booths/boothDataStore";
import { storeToRefs } from "pinia";

const { boothType } = storeToRefs(useGetBoothDataStore());
</script>

<template>
  <div class="mb-12">
    <DetailBanner />
    <BoothSelect />
    <BoothMap />
    <DetailImportmation />
    <BoothInformation />
    <MenuList v-if="boothType === '운동장'" />
    <BoothReservation v-if="boothType === '운동장'" />
  </div>
</template>

<style lang="css" scoped>
</style>