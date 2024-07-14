import axios from 'axios';
import { defineStore } from 'pinia';

const HOST = "https://api.festino.dev-tino.com";

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    host: HOST,
    noticeData: [],
  }),
  actions: {
    async getNotice(noticeId) {
      const noticeResponse = await axios.get(`${this.host}/main/notice/${noticeId}`);
      this.noticeData = noticeResponse.data.noticeInfo;
    },
  },
});