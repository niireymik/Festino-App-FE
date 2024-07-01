<script setup>
import TablingBanner from '@/components/tablings/TablingBanner.vue';
import TablingTabs from '@/components/tablings/TablingTabs.vue';
import ReservationModal from '@/components/tablings/ReservationModal.vue';
import SearchReservationModal from '@/components/tablings/SearchReservationModal.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { storeToRefs } from 'pinia';
import { onMounted, watchEffect } from 'vue';

const { reserveModalState, searchReserveModalState } = storeToRefs(useTablingModalStore());
const handleStopScroll = () => {
  if (reserveModalState.value || searchReserveModalState.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

watchEffect(() => {
  handleStopScroll();
});
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<template>
  <div class="min-h-screen flex flex-col relative">
    <TablingBanner />
    <TablingTabs />
    <ReservationModal v-if="reserveModalState" />
    <SearchReservationModal v-if="searchReserveModalState" />
  </div>
</template>

<style lang="css" scoped>
.dynamic-item {
  min-width: 100px;
  min-height: 100px;
  width: calc(190 / 390 * 100%) !important;
  height: calc(190 / 430 * 100%) !important;
}

.dynamic-padding {
  padding-left: calc(20 / 430 * 100%) !important;
  padding-right: calc(20 / 430 * 100%) !important;
}
</style>
