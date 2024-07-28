import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useOrderModalStore } from './orderModalState';
import { useRouter } from 'vue-router';

const HOST = import.meta.env.VITE_API_URL;

export const useOrderStore = defineStore('orderStore', () => {
  const router = useRouter();

  const recentPhoneNum = ref("");
  const recentName = ref("");
  const orderList = ref([]);
  const boothId = ref('');
  const menuInfo = ref([]);
  const totalPrice = ref(0);
  const userOrderList = ref([]);
  const userName = ref('');
  const phoneNum = ref('');
  const tableNum = ref(0);
  const isCoupon = ref(false);
  const accountNum = ref('0000-0000-0000-00');
  const { openNotExistOrderModal, closeOrderCheckModal, openOrderCompleteModal } = useOrderModalStore();

  const setBoothInfo = (id, num) => {
    boothId.value = id;
    tableNum.value = num;
  };

  const resetOrderInfo = () => {
    totalPrice.value = 0;
    userOrderList.value = [];
    orderList.value = [];
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
    orderList.value = [];
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
      if (res.data.success) menuInfo.value = res.data.menuList;
      if (!res.data.success) router.push({ name: 'error', params: { page: 'order' } });
    } catch (error) {
      router.push({ name: 'error', params: { page: 'order' } });
      console.error('Error get menu data :', error);
    }
  };

  const isUUID = (uuid) => {
    const uuidRegex = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$');
    return uuidRegex.test(uuid);
  };

  router.beforeEach(async (to, from) => {
    if (to.name === 'order' || to.name === 'order-payment' || to.name === 'order-search') {
      if (isUUID(to.params.boothId) && !isNaN(to.params.tableNum)) return true;
      else {
        return {
          name: 'error',
          params: { page: 'NotFound' },
        };
      }
    } else {
      return true;
    }
  });

  return {
    orderList,
    boothId,
    menuInfo,
    totalPrice,
    userOrderList,
    userName,
    phoneNum,
    tableNum,
    isCoupon,
    accountNum,
    recentPhoneNum,
    recentName,
    handleTotalPrice,
    addOrderList,
    setUserName,
    setPhoneNum,
    saveOrder,
    getOrder,
    getMenuAll,
    resetOrderInfo,
    setBoothInfo,
    isUUID,
  };
});
