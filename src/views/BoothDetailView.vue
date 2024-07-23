<script setup>
import BoothMap from "@/components/booth/BoothMap.vue";
import BoothReservation from "@/components/booth/BoothReservation.vue";
import DetailInformation from "@/components/booth/DetailInformation.vue";
import BoothInformation from "@/components/booth/BoothInformation.vue";
import DetailBanner from "@/components/booth/DetailBanner.vue";
import BoothSelect from "@/components/booth/BoothSelect.vue";
import MenuList from "@/components/booth/MenuList.vue";
import { useGetBoothDataStore } from "@/stores/booths/boothDataStore";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const { getBoothData } = useGetBoothDataStore();
const { menuList, booth } = storeToRefs(useGetBoothDataStore());
const route = useRoute();

const boothType = ref('');

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  if (route.params?.type === 'night') {
    boothType.value = '야간부스';
  } else if (route.params?.type === 'day') {
    boothType.value = '주간부스';
  } else if (route.params?.type === 'food') {
    boothType.value = '푸드트럭';
  }
  getBoothData(boothType.value, route.params?.id);
});
</script>

<template>
  <div class="pb-20">
    <DetailBanner />
    <BoothSelect />
    <BoothMap />
    <DetailInformation />
    <BoothInformation />
    <MenuList v-if="menuList != ''" />
    <BoothReservation v-if="boothType === '야간부스' && booth?.isReservation" />
  </div>
</template>

<style lang="css" scoped>
</style>