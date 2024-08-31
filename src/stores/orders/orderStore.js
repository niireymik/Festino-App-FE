import { api } from '@/utils/api';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { useBaseModal } from '../baseModal';

export const useOrderStore = defineStore('orderStore', () => {
  const { openModal, closeModal } = useBaseModal();
  const router = useRouter();

  const recentPhoneNum = ref('');
  const recentName = ref('');
  const orderList = ref([]);
  const boothId = ref('');
  const menuInfo = ref([]);
  const totalPrice = ref(0);
  const userOrderList = ref([]);
  const userName = ref('');
  const phoneNum = ref('');
  const tableNum = ref(0);
  const customTableNum = ref('');
  const isCoupon = ref(false);
  const accountInfo = ref({
    account: '',
    accountHolder: '',
    bankName: '',
  });

  const getCustomTableNum = async (tableNum, boothId) => {
    try {
      const res = await api.get('/main/order/table', {
        params: { tableNumIndex: tableNum, boothId },
      });
      if (res.data.success) return res.data;
      else {
        router.push({ name: 'error', params: { page: 'NotFound' } });
      }
    } catch (error) {
      console.error(error);
      router.push({ name: 'error', params: { page: 'NotFound' } });
    }
  };

  const setBoothInfo = async (id, num) => {
    const tableInfo = await getCustomTableNum(num, id);
    boothId.value = id;
    tableNum.value = num;
    customTableNum.value = tableInfo.tableNum;
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
      const res = await api.post('/main/order', payload);
      closeModal();

      if (res.data.success) {
        openModal('orderCompleteModal');
      }
    } catch (error) {
      router.push({ name: 'error', params: { page: 'order' } });
      console.error('Error save order data :', error);
    }
  };

  const getOrder = async (payload) => {
    orderList.value = [];
    try {
      const res = await api.get('/main/order', { params: payload });
      if (res.data.success) orderList.value = res.data.bills;
      if (!res.data.success) openModal('notExistOrderModal');
    } catch (error) {
      router.push({ name: 'error', params: { page: 'order' } });
      console.error('Error get order data :', error);
    }
  };

  const getMenuAll = async (boothId) => {
    try {
      const res = await api.get(`/main/menu/all/booth/${boothId}`);
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

  const getAccountInfo = async () => {
    try {
      const res = await api.get('/main/booth/night/account', { params: { boothId: boothId.value } });
      if (res.data.success) accountInfo.value = res.data.accountInfo;
      if (!res.data.success) router.push({ name: 'error', params: { page: 'order' } });
    } catch (error) {
      console.error('Error get account data :', error);
      router.push({ name: 'error', params: { page: 'order' } });
    }
  };

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
    accountInfo,
    recentPhoneNum,
    recentName,
    customTableNum,
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
    getAccountInfo,
  };
});
