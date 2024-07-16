import axios from 'axios';
import { defineStore } from 'pinia';

const HOST = import.meta.env.VITE_API_URL;

export const useReservationStore = defineStore('reservationStore', {
  state: () => ({
    isReservationSucces: false,
    reservationInfo: [],
    //TODO: 야간 부스 리스트 받아오고 나서 수정
    boothId: 0,
    userName: 'gg',
  }),
  actions: {
    setBoothId(boothId) {
      this.boothId = boothId;
    },
    setUserName(userName) {
      this.userName = userName;
    },
    async saveReservation(payload) {
      const res = await axios.post(`${HOST}/main/reservation`, payload);
      this.isReservationSucces = res.data.success;
    },
    async getReservation(payload) {
      const res = await axios.get(`${HOST}/main/reservation`, { params: payload });
      this.reservationInfo = res.data.reservationInfo;
    },
    //TODO: 야간부스 리스트 받아오는 api
  },
});
