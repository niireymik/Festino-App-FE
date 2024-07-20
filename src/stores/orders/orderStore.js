import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useOrderModalStore } from './orderModalState';
import { useRouter } from 'vue-router';

const HOST = import.meta.env.VITE_API_URL;

export const useOrderStore = defineStore('orderStore', () => {
  const router = useRouter();

  const orderList = ref([]);
  const boothId = ref('4c0fdc4d-4a3d-4ba7-acc3-0d5d46d7f6f1');
  const menuList = ref([]);
  const totalPrice = ref(0);
  const userOrderList = ref([]);
  const userName = ref('');
  const phoneNum = ref('');
  //TODO MODIFY
  const tableNum = ref(0);
  const isCoupon = ref(false);
  const accountNum = ref('0000-0000-0000-00');
  const { openNotExistOrderModal, closeOrderCheckModal, openOrderCompleteModal } = useOrderModalStore();

  const resetOrderInfo = () => {
    totalPrice.value = 0;
    userOrderList.value = [];
  };

  const handleTotalPrice = () => {
    totalPrice.value = userOrderList.value.reduce((acc, cur) => {
      return acc + cur.menuPrice;
    }, 0);
  };

  const addOrderList = (orderInfo) => {
    const existingOrder = userOrderList.value.find((order) => order.menuId === orderInfo.menuId);
    if (existingOrder) {
      existingOrder.menuName = orderInfo.menuName;
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
    try {
      const res = await axios.post(`${HOST}/main/order`, payload);
      closeOrderCheckModal();

      if (res.data.success) {
        openOrderCompleteModal();
      }
    } catch (error) {
      router.push({ name: 'error', params: { page: 'order' } });
      console.error('Error save order data :', error);
    }
  };

  const getOrder = async (payload) => {
    try {
      const res = await axios.get(`${HOST}/main/order`, { params: payload });
      if (res.data.success) orderList.value = res.data.bills;
      if (!res.data.success) openNotExistOrderModal();
    } catch (error) {
      router.push({ name: 'error', params: { page: 'order' } });
      console.error('Error get order data :', error);
    }
  };

  const getMenuAll = async (boothId) => {
    try {
      const res = await axios.get(`${HOST}/main/menu/all/booth/${boothId}`);
      if (res.data.success) menuList.value = res.data.MenuInfo;
    } catch (error) {
      console.error('Error get menu data :', error);
    }
  };

  return {
    orderList,
    boothId,
    menuList,
    totalPrice,
    userOrderList,
    userName,
    phoneNum,
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
    resetOrderInfo,
  };
});
