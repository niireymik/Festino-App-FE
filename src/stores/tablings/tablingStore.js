import axios from 'axios';
import { api } from '@/utils/api';
import { defineStore } from 'pinia';
import { nextTick, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBaseModal } from '../baseModal';

export const useReservationStore = defineStore('reservationStore', () => {
  const { openModal, closeModal } = useBaseModal();
  const router = useRouter();
  const recentName = ref('');
  const recentPhoneNum = ref('');
  const reservationInfo = ref(null);
  const userName = ref('');
  const nightBoothInfo = ref(null);
  const openNightBoothInfo = ref(null);
  const selectedNightBoothInfo = ref(null);
  const openNightBoothInfoLength = ref(null);
  const prevReserveBoothName = ref('');
  const reserveInfo = ref({
    userName: '',
    phoneNum: '',
    personCount: 0,
    boothId: '',
  });

  const setUserName = (name) => {
    userName.value = name;
  };

  const setSelectedNightBoothInfo = (boothInfo) => {
    selectedNightBoothInfo.value = { ...boothInfo };
  };

  const saveReservation = async (payload) => {
    openModal('loadingModal');
    try {
      const res = await api.post('/main/reservation', payload);
      closeModal();
      if (res.data.success) {
        if (res.data.reservationInfo.messageStatus === 'SEND_FAIL') openModal('messageFailModal');
        if (res.data.reservationInfo.messageStatus === 'SEND_SUCCESS') openModal('completeReserveModal');
      }
      if (!res.data.success) openModal('failReservationModal');
      getAllNightBooth();
    } catch (error) {
      closeModal();
      router.push({ name: 'error', params: { page: 'main' } });
      console.error(error);
    }
  };

  const getReservation = async (payload) => {
    try {
      const res = await api.get('/main/reservation', { params: payload });
      reservationInfo.value = res.data.reservationInfo;
      await nextTick();
      if (res.data.success) {
        if (reservationInfo.value.totalTeamCount === 1) {
          return openModal('enterBoothModal');
        }
        return openModal('searchReserveModal');
      }
      if (!res.data.success) return openModal('noReserveModal');
    } catch (error) {
      closeModal();
      router.push({ name: 'error', params: { page: 'main' } });
      console.error(error);
    }
  };

  const getAllNightBooth = async () => {
    const res = await api.get('/main/booth/night/reservation/all');
    nightBoothInfo.value = res.data.boothList;
    openNightBoothInfo.value = res.data.boothList.filter((booth) => booth.isOpen);
    await nextTick();
    openNightBoothInfoLength.value = openNightBoothInfo.value.length;
  };

  const checkDuplicateReserve = async (phoneNum) => {
    try {
      const res = await api.get(`/main/reservation/duplication?phoneNum=${phoneNum}`);
      closeModal();
      if (res.data.success) {
        prevReserveBoothName.value = res.data.adminName;
        return openModal('duplicateModal');
      } else {
        openModal('loadingModal');
        await saveReservation(reserveInfo.value);
      }
    } catch (error) {
      closeModal();
      router.push({ name: 'error', params: { page: 'main' } });
      console.error(error);
    }
  };

  return {
    recentName,
    recentPhoneNum,
    reservationInfo,
    userName,
    nightBoothInfo,
    selectedNightBoothInfo,
    openNightBoothInfo,
    openNightBoothInfoLength,
    prevReserveBoothName,
    reserveInfo,
    setUserName,
    saveReservation,
    getReservation,
    getAllNightBooth,
    setSelectedNightBoothInfo,
    checkDuplicateReserve,
  };
});
