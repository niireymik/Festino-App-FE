import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const HOST = import.meta.env.VITE_API_URL;

export const useReservationStore = defineStore('reservationStore', () => {
  const isReservationSucces = ref(false);
  const reservationInfo = ref([]);
  //TODO: 야간 부스 리스트 받아오고 나서 수정
  const boothId = ref(0);
  const userName = ref('');
  const nightBoothInfo = ref([]);

  const setBoothId = (boothId) => {
    boothId.value = boothId;
  };
  const setUserName = (userName) => {
    userName.value = userName;
  };
  const saveReservation = async (payload) => {
    const res = await axios.post(`${HOST}/main/reservation`, payload);
    isReservationSucces.value = res.data.success;
  };
  const getReservation = async (payload) => {
    const res = await axios.get(`${HOST}/main/reservation`, { params: payload });
    reservationInfo.value = res.data.reservationInfo;
  };
  const getAllNightBooth = async () => {
    const res = await axios.get(`${HOST}/main/booth/night/all`);
    console.log(res.data);
    nightBoothInfo.value = res.data.boothInfo;
  };
  return {
    isReservationSucces,
    reservationInfo,
    boothId,
    userName,
    setBoothId,
    setUserName,
    saveReservation,
    getReservation,
    getAllNightBooth,
  };
});
