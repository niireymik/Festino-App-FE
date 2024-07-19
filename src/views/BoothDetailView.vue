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
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const { getBoothData } = useGetBoothDataStore();
const { menuList, booth } = storeToRefs(useGetBoothDataStore());

const route = useRoute();

onMounted(() => {
  const boothId = route.params.id;
  if (boothId) {
    getBoothData('야간부스', boothId);
  }
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="mb-20">
    <DetailBanner />
    <BoothSelect />
    <BoothMap />
    <DetailImportmation />
    <BoothInformation />
    <MenuList v-if="menuList != ''" />
    <BoothReservation v-if="booth.isReservation" />
  </div>
</template>

<style lang="css" scoped>
</style>