import axios from "axios";
import { defineStore } from 'pinia';
import { ref } from "vue";

const HOST = 'https://api.festino.dev-tino.com';

export const useGetBoothDataStore = defineStore('boothData', () => {
  const allTypeBoothLsit = ref([]);
  const dayBoothList = ref([]);
  const nightBoothList = ref([]);
  const foodBoothList = ref([]);
  const boothList = ref([]);

  const selectBoothMenu = ref(0);
  const booth = ref([]);
  const boothType = ref('');
  const boothId = ref('3f1f0d0a-001b-4ff0-aea4-9728742f968f');
  const imageList = ref([]);

  const menuList = ref([]);
  const mainMenu = ref([]);
  const subMenu = ref([]);
  
  const getallTypeBoothLsitData = async () => {
    try {
      const res = await axios.get(`${HOST}/main/booth/all`);
      dayBoothList.value = res.data.boothInfo.dayBoothInfo;
      nightBoothList.value = res.data.boothInfo.nightBoothInfo;
      foodBoothList.value = res.data.boothInfo.foodBoothInfo;
      allTypeBoothLsit.value = [...nightBoothList.value, ...dayBoothList.value, ...foodBoothList.value];
      
      boothList.value.push(allTypeBoothLsit.value, nightBoothList.value, dayBoothList.value, foodBoothList.value);
    } catch (error) {
      console.error('Error fetching booth list:', error);
    }
  };

  const convertBoothMenuTab = (index) => {
    selectBoothMenu.value = index;
  };

  const getBoothData = async (type, id) => {
    try {
      let res;
      if (type === 'day') {
        res = await axios.get(`${HOST}/main/booth/day/${id}`);
      } else if (type === 'night') {
        res = await axios.get(`${HOST}/main/booth/night/${id}`);
        imageList.value = res.data.boothInfo.boothImage;
        menuList.value = res.data.boothInfo.menuList;
        setMenuType();
      } else if (type === 'food') {
        res = await axios.get(`${HOST}/main/booth/food/${id}`);
      }
      booth.value = res.data.boothInfo;
    } catch (error) {
      console.error(`Error fetching ${type} booth data:`, error);
    }
  };

  const setBoothType = (type) => {
    boothType.value = type;
  };

  const setMenuType = () => {
    mainMenu.value = [];
    subMenu.value = [];

    menuList.value.forEach(menu => {
      if (menu.menuType === 0) {
        mainMenu.value.push(menu.menuName);
      } else {
        subMenu.value.push(menu.menuName);
      }
    });
  };

  return {
    allTypeBoothLsit,
    dayBoothList,
    nightBoothList,
    foodBoothList,
    boothList,
    selectBoothMenu,
    booth,
    boothType,
    boothId,
    imageList,
    menuList,
    mainMenu,
    subMenu,
    getallTypeBoothLsitData,
    convertBoothMenuTab,
    getBoothData,
    setBoothType,
    setMenuType
  }
});