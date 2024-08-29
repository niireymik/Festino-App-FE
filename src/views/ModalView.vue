<script setup>
import ModalBackground from '@/components/modals/ModalBackground.vue';
import ReservationModal from '@/components/tablings/modals/ReservationModal.vue';
import SearchReservationModal from '@/components/tablings/modals/SearchReservationModal.vue';
import { useBaseModal } from '@/stores/baseModal';
import { storeToRefs } from 'pinia';

const baseModalStore = useBaseModal();
const { isModalOpen, modalType } = storeToRefs(baseModalStore);
</script>
<template>
  <ModalBackground v-if="isModalOpen">
    <ReservationModal v-if="modalType === 'reserveModal'" />
    <SearchReservationModal v-if="modalType === 'searchReserveModal'" />
  </ModalBackground>
</template>

<style lang="scss" scoped></style>
