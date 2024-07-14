import axios from 'axios';
import { defineStore } from 'pinia';

const HOST = import.meta.env.VITE_API_URL;

export const useOrderStore = defineStore('orderStore', {
  state: () => ({
    orderList: [
      {
        tableNum: 5,
        createAt: '2024-07-14T17:10:35.793147',
        menuInfo: [
          {
            menuName: '치즈닭꼬치',
            menuPrice: 1000,
            menuCount: 4,
          },
          {
            menuName: '돈까스',
            menuPrice: 7000,
            menuCount: 1,
          },
        ],
        totalPrice: 11000,
      },
      {
        tableNum: 6,
        createAt: '2024-07-14T17:10:35.793147',
        menuInfo: [
          {
            menuName: '마라탕',
            menuPrice: 2300,
            menuCount: 3,
          },
          {
            menuName: '돈까스',
            menuPrice: 7000,
            menuCount: 1,
          },
        ],
        totalPrice: 11000,
      },
    ],
  }),
  actions: {
    async saveOrde(payload) {
      const res = await axios.post(`${HOST}/main/order`, payload);
    },
    async getOrder(payload) {
      const res = await axios.get(`${HOST}/main/order`, { params: payload });
      this.orderList = res.data.bills;
    },
  },
});
