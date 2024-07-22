import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const useNoticeStore = defineStore('noticeStore', () => {
  const HOST = import.meta.env.VITE_API_URL;
  const mainNoticeData = ref([]);
  const noticeData = ref([]);
  const pinNotices = ref([]);
  const notices = ref([]);
  const allNotices = ref([]);

  const getMainNotice = async () => {
    try {
      const noticeResponse = await axios.get(`${HOST}/main/notice`);
      mainNoticeData.value = noticeResponse.data.noticeInfo;
    } catch (error) {
      console.error(error);
      mainNoticeData.value = [];
    }
  };

  const getNotice = async (noticeId) => {
    try {
      const noticeResponse = await axios.get(`${HOST}/main/notice/${noticeId}`);
      noticeData.value = noticeResponse.data.noticeInfo;
    } catch (error) {
      console.error(error);
      noticeData.value = [];
    }
  };

  const getAllNotice = async () => {
    try {
      const noticeResponse = await axios.get(`${HOST}/main/notice/all`);
      allNotices.value = noticeResponse.data.noticesInfo;
      if (allNotices.value) {
        pinNotices.value = allNotices.value.filter(notice => notice.isPin);
        notices.value = allNotices.value.filter(notice => !notice.isPin);
      }
    } catch (error) {
      console.error(error);
      allNotices.value = [];
    }
  };

  const timeAgo = (uploadTime) => {
    if (!uploadTime) return;
    try {
      return formatDistanceToNow(new Date(uploadTime), { addSuffix: true, locale: ko });
    } catch (error) {
      console.error(error);
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
    allNotices
  };
});
