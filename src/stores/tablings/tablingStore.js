import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useTablingModalStore } from './tablingModal';

const HOST = import.meta.env.VITE_API_URL;

export const useReservationStore = defineStore('reservationStore', () => {
  const reservationInfo = ref(null);

  const userName = ref('');
  const nightBoothInfo = ref(null);
  const selectedNightBoothInfo = ref(null);

  const { openSearchReserveModal, openNoReserveModal } = useTablingModalStore();

  const setUserName = (name) => {
    userName.value = name;
  };
  const setSelectedNightBoothInfo = (boothInfo) => {
    selectedNightBoothInfo.value = { ...boothInfo };
  };
  const saveReservation = async (payload) => {
    const res = await axios.post(`${HOST}/main/reservation`, payload);
  };
  const getReservation = async (payload) => {
    try {
      const res = await axios.get(`${HOST}/main/reservation`, { params: payload });
      reservationInfo.value = res.data.reservationInfo;
      console.log(res.data);
      if (res.data.success) openSearchReserveModal();
    } catch (error) {
      openNoReserveModal();
    }
    // reservationInfo.value = res.data.reservationInfo;
    // await nextTick();

    // console.log(res);
    // if (res.data.success) openSearchReserveModal();
    // if (!res.data.success) openNoReserveModal();
  };

  const getAllNightBooth = async () => {
    const res = await axios.get(`${HOST}/main/booth/night/all`);
    nightBoothInfo.value = res.data.boothInfo;
  };
  return {
    reservationInfo,
    userName,
    nightBoothInfo,
    selectedNightBoothInfo,
    setUserName,
    saveReservation,
    getReservation,
    getAllNightBooth,
    setSelectedNightBoothInfo,
  };
});
