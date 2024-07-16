import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const useNoticeStore = defineStore('noticeStore', () => {
  const HOST = "https://api.festino.dev-tino.com";
  const mainNoticeData = ref([]);
  const noticeData = ref([]);
  const pinNotices = ref([]);
  const notices = ref([]);

  const getMainNotice = async () => {
    try {
      const noticeResponse = await axios.get(`${HOST}/main/notice`);
      mainNoticeData.value = noticeResponse.data.noticeInfo;
    } catch (error) {
      console.error("Error fetching main notice:", error);
    }
  };

  const getNotice = async (noticeId) => {
    try {
      const noticeResponse = await axios.get(`${HOST}/main/notice/${noticeId}`);
      noticeData.value = noticeResponse.data.noticeInfo;
    } catch (error) {
      console.error("Error fetching notice:", error);
    }
  };

  const getAllNotice = async () => {
    try {
      const noticeResponse = await axios.get(`${HOST}/main/notice/all`);
      const allNotices = noticeResponse.data.noticesInfo;
      pinNotices.value = allNotices.filter(notice => notice.isPin);
      notices.value = allNotices.filter(notice => !notice.isPin);
    } catch (error) {
      console.error("Error fetching all notices:", error);
    }
  };

  const timeAgo = (uploadTime) => {
    if (!uploadTime) return;
    try {
      return formatDistanceToNow(new Date(uploadTime), { addSuffix: true, locale: ko });
    } catch (error) {
      console.error("Error formatting date:", error);
    }
  };

  return {
    getMainNotice,
    getNotice,
    getAllNotice,
    timeAgo,
    mainNoticeData,
    noticeData,
    pinNotices,
    notices,
  };
});
