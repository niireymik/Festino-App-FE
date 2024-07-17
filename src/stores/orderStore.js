import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const HOST = import.meta.env.VITE_API_URL;

export const useOrderStore = defineStore('orderStore', () => {
  const orderList = ref([
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
  ]);

  const boothId = ref('3f1f0d0a-001b-4ff0-aea4-9728742f968f');
  const menuList = ref([]);
  const totalPrice = ref(0);
  const userOrderList = ref([]);
  const userName = ref('');
  const phoneNum = ref('');
  const orderId = ref(0);
  const tableNum = ref(0);

  const handleTotalPrice = (type, amount) => {
    if (type === 'plus') totalPrice.value += amount;
    if (type === 'minus') totalPrice.value -= amount;
  };

  const addOrderList = (orderInfo) => {
    const existingOrder = userOrderList.value.find((order) => order.menuName === orderInfo.menuName);
    if (existingOrder) {
      existingOrder.menuCount = orderInfo.menuCount;
      existingOrder.menuPrice = orderInfo.menuPrice;
    } else {
      userOrderList.value.push({
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
    handleTotalPrice,
    addOrderList,
    setUserName,
    setPhoneNum,
    saveOrder,
    getOrder,
    getMenuAll,
  };
});
