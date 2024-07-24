<script setup>
import ClubModal from '@/components/timetable/ClubModal.vue';
import TalentModal from '@/components/timetable/TalentModal.vue';
import { RouterView } from 'vue-router';
import { useHead } from '@vueuse/head';
import { useModalStore } from '@/stores/modalStore.js';
import { storeToRefs } from 'pinia';
import { onMounted, watchEffect } from 'vue';
import EnterBoothModal from './components/tablings/modals/EnterBoothModal.vue';
import { useTablingModalStore } from './stores/tablings/tablingModal';
import ReservationModal from './components/tablings/modals/ReservationModal.vue';
import SearchReservationModal from './components/tablings/modals/SearchReservationModal.vue';
import CompleteReserveModal from './components/tablings/modals/CompleteReserveModal.vue';
import NoReserveModal from './components/tablings/modals/NoReserveModal.vue';
import FailReservationModal from './components/tablings/modals/FailReservationModal.vue';
import MessageFailModal from './components/tablings/modals/MessageFailModal.vue';
import LoadingModal from './components/tablings/modals/LoadingModal.vue';
import { useReservationStore } from './stores/tablings/tablingStore';

const { clubModalState, talentModalState } = storeToRefs(useModalStore());
const {
  reserveModalState,
  searchReserveModalState,
  completeReserveModalState,
  noReserveModalState,
  failReserveModalState,
  enterBoothModalState,
  messageFailModalState,
} = storeToRefs(useTablingModalStore());
const { resetModalState } = useTablingModalStore();
const { isLoading } = storeToRefs(useReservationStore());
const handleStopScroll = () => {
  if (
    clubModalState.value ||
    talentModalState.value ||
    reserveModalState.value ||
    searchReserveModalState.value ||
    completeReserveModalState.value ||
    failReserveModalState.value ||
    enterBoothModalState.value ||
    messageFailModalState.value
  )
    document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

watchEffect(() => {
  handleStopScroll();
});

onMounted(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  resetModalState();
});

useHead({
  title: 'Festino!',
  meta: [
    { name: 'description', content: 'Festino! 모두함께 즐기는 한국공학교 대동제!', vmid: 'description' },
    { name: 'keywords', content: 'Festino, 한국공학대학교, 한국공대, 축제', vmid: 'keywords' },
    { property: 'og:title', content: 'Festino!', vmid: 'og:title' },
    { property: 'og:description', content: 'Festino! 모두함께 즐기는 한국공학교 대동제!', vmid: 'og:description' },
    { property: 'og:image', content: '/images/seo/title-images.png', vmid: 'og:image' },
    { property: 'og:url', content: 'https://festino.dev-tino.com', vmid: 'og:url' },
    { property: 'og:type', content: 'website', vmid: 'og:type' },
  ],
});
</script>

<template>
  <RouterView />
  <ClubModal v-if="clubModalState" />
  <TalentModal v-if="talentModalState" />
  <EnterBoothModal v-if="enterBoothModalState" />
  <SearchReservationModal v-if="searchReserveModalState" />
  <CompleteReserveModal v-if="completeReserveModalState" />
  <FailReservationModal v-if="failReserveModalState" />
  <MessageFailModal v-if="messageFailModalState" />
  <NoReserveModal v-if="noReserveModalState" />
  <ReservationModal v-if="reserveModalState" />
  <LoadingModal v-if="isLoading" />
</template>

<style scoped></style>
