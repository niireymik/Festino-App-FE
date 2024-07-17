import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const HOST = import.meta.env.VITE_API_URL;

export const useOrderStore = defineStore('orderStore', () => {
  const orderList = ref([]);

  const boothId = ref('3f1f0d0a-001b-4ff0-aea4-9728742f968f');
  const menuList = ref([]);
  const totalPrice = ref(0);
  const userOrderList = ref([]);
  const userName = ref('');
  const phoneNum = ref('');
  const orderId = ref(0);
  //TODO MODIFY
  const tableNum = ref(0);
  const isCoupon = ref(false);
  const accountNum = ref('0000-0000-0000-00');

  const handleTotalPrice = (type, amount) => {
    if (type === 'plus') totalPrice.value += amount;
    if (type === 'minus') totalPrice.value -= amount;
  };

  const addOrderList = (orderInfo) => {
    const existingOrder = userOrderList.value.find((order) => order.menuId === orderInfo.menuId);
    if (existingOrder) {
      existingOrder.menName = orderInfo.menuName;
      existingOrder.menuCount = orderInfo.menuCount;
      existingOrder.menuPrice = orderInfo.menuPrice;
    } else {
      userOrderList.value.push({
        menuId: orderInfo.menuId,
        menuName: orderInfo.menuName,
        menuCount: orderInfo.menuCount,
        menuPrice: orderInfo.menuPrice,
      });
    }
  };

  const setUserName = (name) => {
    userName.value = name;
  };

  const setPhoneNum = (num) => {
    phoneNum.value = num;
  };

  const saveOrder = async (payload) => {
    const res = await axios.post(`${HOST}/main/order`, payload);
  };

  const getOrder = async (payload) => {
    const res = await axios.get(`${HOST}/main/order`, { params: payload });
    orderList.value = res.data.bills;
  };

  const getMenuAll = async (boothId) => {
    const res = await axios.get(`${HOST}/main/menu/all/booth/${boothId}`);
    menuList.value = res.data.MenuInfo;
  };

  return {
    orderList,
    boothId,
    menuList,
    totalPrice,
    userOrderList,
    userName,
    phoneNum,
    orderId,
    tableNum,
    isCoupon,
    accountNum,
    handleTotalPrice,
    addOrderList,
    setUserName,
    setPhoneNum,
    saveOrder,
    getOrder,
    getMenuAll,
  };
});
