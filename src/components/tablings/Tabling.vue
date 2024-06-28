<script setup>
import TablingBanner from '@/components/tablings/TablingBanner.vue';
import TablingTabs from '@/components/tablings/TablingTabs.vue';
import ReservationModal from './ReservationModal.vue';
import SearchReservationModal from './SearchReservationModal.vue';
import { useTablingModalStore } from '@/stores/tablings/tablingModal';
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';

const { reserveModalState, searchReserveModalState } = storeToRefs(useTablingModalStore());
const handleStopScroll = () => {
  if (reserveModalState.value || searchReserveModalState.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

watchEffect(() => {
  handleStopScroll();
});
</script>

<template>
  <div class="dynamic-height flex flex-col">
    <TablingBanner />
    <TablingTabs />
  </div>
  <div v-if="reserveModalState">
    <ReservationModal />
  </div>
  <div v-if="searchReserveModalState">
    <SearchReservationModal />
  </div>
</template>

<style lang="css" scoped>
.dynamic-height {
  min-height: calc(100vh - 60px) !important;
  height: auto;
}

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
