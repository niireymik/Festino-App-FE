import axios from "axios";
import { defineStore } from 'pinia';
import { ref } from "vue";
import { useRouter } from 'vue-router'; 

const HOST = 'https://api.festino.dev-tino.com';

export const useGetBoothDataStore = defineStore('boothData', () => {
  const router = useRouter();

  const allTypeBoothLsit = ref([]);
  const dayBoothList = ref([]);
  const nightBoothList = ref([]);
  const foodBoothList = ref([]);
  const boothList = ref([]);

  const selectBoothMenu = ref(0);
  const booth = ref([]);
  const boothType = ref('');
  const urlBoothType = ref('');
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
      console.error('Error getallTypeBoothLsitData', error);
    }
  };

  const convertBoothMenuTab = (index) => {
    selectBoothMenu.value = index;
  };

  const setBoothTypeUseUrl = (type) => {
    urlBoothType.value = type;
  }

  const getBoothData = async (type, id) => {
    try {
      if (type === '야간부스') {
        setBoothType('운동장');
        setBoothTypeUseUrl('night');
      } else if (type === '주간부스') {
        setBoothType('벙커');
        setBoothTypeUseUrl('day');
      } else if (type === '푸드트럭') {
        setBoothType('푸드트럭');
        setBoothTypeUseUrl('food');
      }

      const res = await axios.get(`${HOST}/main/booth/${urlBoothType.value}/${id}`);
      
      if (urlBoothType === 'night') {
        imageList.value = res.data.boothInfo.boothImage;
        menuList.value = res.data.boothInfo.menuList;
        setMenuType();
      }

      booth.value = res.data.boothInfo;
  
      router.push({ path: `/booth/detail/${id}` });
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
    urlBoothType,
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