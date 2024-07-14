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
    boothId: '4f1f0d0a-001b-4ff0-aea4-9728742f968f',
    menuList: []
  }),
  actions: {
    async getAllBoothData() {
      const res = await axios.get(`${HOST}/main/booth/all`);
      this.dayBooths = res.data.boothInfo.dayBoothInfo;
      this.nightBooths = res.data.boothInfo.nightBoothInfo;
      this.foodBooths = res.data.boothInfo.foodBoothList;
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
    },
    async getFoodBoothData(id) {
      const res = await axios.get(`${HOST}/main/booth/food/${this.boothId}`);
      this.booth = res.data.boothInfo;
    },
    handleBoothType(type) {
      this.boothType = type;
    },
    handleFoodList(food) {
      this.menuList = food;
    }
  }
});