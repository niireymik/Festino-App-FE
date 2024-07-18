import axios from "axios";
import { defineStore } from 'pinia';
import { ref } from "vue";
import { useRouter } from 'vue-router'; 

const HOST = import.meta.env.VITE_API_URL;

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
  const imageList = ref([]);

  const menuList = ref([]);
  const mainMenu = ref([]);
  const subMenu = ref([]);
  
  const getAllTypeBoothLsitData = async () => {
    try {
      const res = await axios.get(`${HOST}/main/booth/all`);
      dayBoothList.value = res.data.boothInfo.dayBoothInfo;
      nightBoothList.value = res.data.boothInfo.nightBoothInfo;
      foodBoothList.value = res.data.boothInfo.foodBoothInfo;
      allTypeBoothLsit.value = [...nightBoothList.value, ...dayBoothList.value, ...foodBoothList.value];
      
      boothList.value = [];
      boothList.value.push(allTypeBoothLsit.value, nightBoothList.value, dayBoothList.value, foodBoothList.value);

      localStorage.setItem('boothList', JSON.stringify(boothList.value));
    } catch (error) {
      console.error('Error getAllTypeBoothLsitData', error);
    }
  };

  const convertBoothMenuTab = (index) => {
    selectBoothMenu.value = index;
    localStorage.setItem('selectBoothMenu', index);
  };

  const setBoothTypeUseUrl = (type) => {
    urlBoothType.value = type;
    localStorage.setItem('urlBoothType', type);
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
      booth.value = res.data.boothInfo;
      imageList.value = res.data.boothInfo.boothImage;
      console.log(booth.value)
      
      menuList.value = [];
      if (urlBoothType.value === 'night') {
        menuList.value = res.data.boothInfo.menuList;
        setMenuType();
      }

      localStorage.setItem('booth', JSON.stringify(booth.value));
      localStorage.setItem('imageList', JSON.stringify(imageList.value));
      localStorage.setItem('menuList', JSON.stringify(menuList.value));

      router.push({ path: `/booth/detail/${id}` });
    } catch (error) {
      console.error(`Error fetching ${type} booth data:`, error);
    }
  };

  const setBoothType = (type) => {
    boothType.value = type;
    localStorage.setItem('boothType', type);
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

    localStorage.setItem('mainMenu', JSON.stringify(mainMenu.value));
    localStorage.setItem('subMenu', JSON.stringify(subMenu.value));
  };

  const initializeStore = () => {
    const storedBoothList = localStorage.getItem('boothList');
    const storedSelectBoothMenu = localStorage.getItem('selectBoothMenu');
    const storedBooth = localStorage.getItem('booth');
    const storedBoothType = localStorage.getItem('boothType');
    const storedUrlBoothType = localStorage.getItem('urlBoothType');
    const storedImageList = localStorage.getItem('imageList');
    const storedMenuList = localStorage.getItem('menuList');
    const storedMainMenu = localStorage.getItem('mainMenu');
    const storedSubMenu = localStorage.getItem('subMenu');

    if (storedBoothList) {
      boothList.value = JSON.parse(storedBoothList);
    }

    if (storedSelectBoothMenu) {
      selectBoothMenu.value = parseInt(storedSelectBoothMenu);
    }

    if (storedBooth) {
      booth.value = JSON.parse(storedBooth);
    }

    if (storedBoothType) {
      boothType.value = storedBoothType;
    }

    if (storedUrlBoothType) {
      urlBoothType.value = storedUrlBoothType;
    }

    if (storedImageList) {
      imageList.value = JSON.parse(storedImageList);
    }

    if (storedMenuList) {
      menuList.value = JSON.parse(storedMenuList);
    }

    if (storedMainMenu) {
      mainMenu.value = JSON.parse(storedMainMenu);
    }

    if (storedSubMenu) {
      subMenu.value = JSON.parse(storedSubMenu);
    }
  };

  initializeStore();

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
    imageList,
    menuList,
    mainMenu,
    subMenu,
    getAllTypeBoothLsitData,
    convertBoothMenuTab,
    getBoothData,
    setBoothType,
    setMenuType
  };
});