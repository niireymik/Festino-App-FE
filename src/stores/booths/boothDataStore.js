import axios from "axios";
import { defineStore } from 'pinia';

const HOST = 'https://api.festino.dev-tino.com';

export const useGetBoothDataStore = defineStore('boothData', {
  state: () => ({
    allBooth: [],
    dayBooths: [],
    nightBooths: [],
    foodBooths: [],
    boothList: [],
    selectBoothMenu: 0,
    booth: [],
    boothType: '',
    boothId: '3f1f0d0a-001b-4ff0-aea4-9728742f968f',
    imageList: [],
    menuList: [],
    mainMenu: [],
    subMenu: [],
  }),
  actions: {
    async getAllBoothData() {
      const res = await axios.get(`${HOST}/main/booth/all`);
      this.dayBooths = res.data.boothInfo.dayBoothInfo;
      this.nightBooths = res.data.boothInfo.nightBoothInfo;
      this.foodBooths = res.data.boothInfo.foodBoothInfo;
      this.allBooth = [...this.nightBooths, ...this.dayBooths, ...this.foodBooths];

      this.boothList.push(this.allBooth, this.nightBooths, this.dayBooths, this.foodBooths);
    },
    handleClickBoothMenu(index) {
      this.selectBoothMenu = index;
    },
    async getDayBoothData(id) {
      const res = await axios.get(`${HOST}/main/booth/day/${this.boothId}`);
      this.booth = res.data.boothInfo;
    },
    async getNightBoothData(id) {
      const res = await axios.get(`${HOST}/main/booth/night/${this.boothId}`);
      this.booth = res.data.boothInfo;
      this.imageList = res.data.boothInfo.boothImage;
      this.menuList = res.data.boothInfo.menuList;
      this.handleMenuType();
    },
    async getFoodBoothData(id) {
      const res = await axios.get(`${HOST}/main/booth/food/${this.boothId}`);
      this.booth = res.data.boothInfo;
    },
    handleBoothType(type) {
      this.boothType = type;
    },
    handleMenuType() {
      this.mainMenu = [];
      this.subMenu = [];
      for(let i=0; i < this.menuList.length; i++) {
        if(this.menuList[i].menuType === 0) {
          this.mainMenu.push(this.menuList[i].menuName);
        } else {
          this.subMenu.push(this.menuList[i].menuName);
        }
      }
      console.log(this.mainMenu, this.subMenu);
    }
  }
});