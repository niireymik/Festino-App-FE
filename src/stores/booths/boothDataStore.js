import axios from "axios";
import { defineStore } from 'pinia';

const HOST = 'https://api.festino.dev-tino.com';

export const useGetBoothDataStore = defineStore('boothData', {
  state: () => ({
    allBooth: [],
    dayBooth: [],
    nightBooth: [],
    foodBooth: [],
    boothList: [],
    selectBoothMenu: 0,
  }),
  actions: {
    async getAllBoothData() {
      const res = await axios.get(`${HOST}/main/booth/all`);
      this.dayBooth = res.data.boothInfo.dayBoothInfo;
      this.nightBooth = res.data.boothInfo.nightBoothInfo;
      this.foodBooth = res.data.boothInfo.foodBoothList;
      this.allBooth = [...this.nightBooth, ...this.dayBooth, ...this.foodBooth];

      this.boothList.push(this.allBooth, this.dayBooth, this.nightBooth, this.foodBooth);
      console.log(this.boothList)
    },
    handleClickBoothMenu(index) {
      this.selectBoothMenu = index;
    },
  }
});