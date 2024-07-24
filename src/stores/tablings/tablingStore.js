import axios from 'axios';
import { defineStore } from 'pinia';
import { nextTick, ref } from 'vue';
import { useTablingModalStore } from './tablingModal';
import { useRouter } from 'vue-router';
const { resetModalState } = useTablingModalStore();

const HOST = import.meta.env.VITE_API_URL;

export const useReservationStore = defineStore('reservationStore', () => {
  const router = useRouter();

  const reservationInfo = ref(null);
  const userName = ref('');
  const nightBoothInfo = ref(null);
  const openNightBoothInfo = ref(null);
  const selectedNightBoothInfo = ref(null);
  const openNightBoothInfoLength = ref(null);

  const {
    openSearchReserveModal,
    openNoReserveModal,
    openFailReserveModal,
    closeReserveModal,
    openCompleteReserveModal,
    openEnterBoothModal,
    openMessageFailModal,
  } = useTablingModalStore();

  const setUserName = (name) => {
    userName.value = name;
  };

  const setSelectedNightBoothInfo = (boothInfo) => {
    selectedNightBoothInfo.value = { ...boothInfo };
  };

  const saveReservation = async (payload) => {
    try {
      const res = await axios.post(`${HOST}/main/reservation`, payload);
      closeReserveModal();
      if (res.data.success) {
        if (res.data.reservationInfo.messageStatus === 'SEND_FAIL') openMessageFailModal();
        if (res.data.reservationInfo.messageStatus === 'SEND_SUCCESS') openCompleteReserveModal();
      }
      if (!res.data.success) openFailReserveModal();
      getAllNightBooth();
    } catch (error) {
      resetModalState();
      router.push({ name: 'error', params: { page: 'main' } });
      console.error(error);
    }
  };

  const getReservation = async (payload) => {
    try {
      const res = await axios.get(`${HOST}/main/reservation`, { params: payload });
      reservationInfo.value = res.data.reservationInfo;
      await nextTick();
      if (res.data.success) {
        if (reservationInfo.value.totalTeamCount === 0) {
          return openEnterBoothModal();
        }
        return openSearchReserveModal();
      }
      if (!res.data.success) return openNoReserveModal();
    } catch (error) {
      resetModalState();
      router.push({ name: 'error', params: { page: 'main' } });
      console.error(error);
    }
  };

  const getAllNightBooth = async () => {
    const res = await axios.get(`${HOST}/main/booth/night/reservation/all`);
    nightBoothInfo.value = res.data.boothList;
    openNightBoothInfo.value = res.data.boothList.filter((booth) => booth.isOpen);
    await nextTick();
    openNightBoothInfoLength.value = openNightBoothInfo.value.length;
  };

  return {
    reservationInfo,
    userName,
    nightBoothInfo,
    selectedNightBoothInfo,
    openNightBoothInfo,
    openNightBoothInfoLength,
    setUserName,
    saveReservation,
    getReservation,
    getAllNightBooth,
    setSelectedNightBoothInfo,
  };
});
