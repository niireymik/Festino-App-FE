import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const HOST = import.meta.env.VITE_API_URL;

export const useReservationStore = defineStore('reservationStore', () => {
  const isReservationSucces = ref(false);
  const reservationInfo = ref(null);

  const userName = ref('');
  const nightBoothInfo = ref(null);
  const selectedNightBoothInfo = ref(null);

  const setUserName = (name) => {
    userName.value = name;
  };
  const setSelectedNightBoothInfo = (boothInfo) => {
    selectedNightBoothInfo.value = { ...boothInfo };
  };
  const saveReservation = async (payload) => {
    const res = await axios.post(`${HOST}/main/reservation`, payload);
    isReservationSucces.value = res.data.success;
  };
  const getReservation = async (payload) => {
    const res = await axios.get(`${HOST}/main/reservation`, { params: payload });
    reservationInfo.value = res.data.reservationInfo;

    console.log(res.data.reservationInfo);
  };
  const getAllNightBooth = async () => {
    const res = await axios.get(`${HOST}/main/booth/night/all`);
    nightBoothInfo.value = res.data.boothInfo;
  };
  return {
    isReservationSucces,
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
