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
    // TODO: MODIFY
    boothId: '3f1f0d0a-001b-4ff0-aea4-9728742f968f',
    menuList: [],
    totalPrice: 0,
    userOrderList: [],
    userName: '',
    phoneNum: '',
    orderId: '0000-0000-0000-00',
    tableNum: 0,
  }),
  actions: {
    incrementTotalPrice(amount) {
      this.totalPrice += amount;
    },
    decrementTotalPrice(amount) {
      this.totalPrice -= amount;
    },
    addOrderList(orderInfo) {
      const existingOrder = this.userOrderList.find((order) => order.menuName === orderInfo.menuName);

      if (existingOrder) {
        existingOrder.menuCount = orderInfo.menuCount;
        existingOrder.menuPrice = orderInfo.menuPrice;
      } else {
        this.userOrderList.push({
          menuName: orderInfo.menuName,
          menuCount: orderInfo.menuCount,
          menuPrice: orderInfo.menuPrice,
        });
      }
    },
    setUserName(name) {
      this.userName = name;
    },
    setPhoneNum(num) {
      this.phoneNum = num;
    },
    async saveOrder(payload) {
      const res = await axios.post(`${HOST}/main/order`, payload);
    },
    async getOrder(payload) {
      const res = await axios.get(`${HOST}/main/order`, { params: payload });
      this.orderList = res.data.bills;
    },
    async getMenuAll(boothId) {
      const res = await axios.get(`${HOST}/main/menu/all/booth/${boothId}`);
      this.menuList = res.data.MenuInfo;
    },
  },
});
