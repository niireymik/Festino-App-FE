import { api } from '@/utils/api';
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTimetableStore = defineStore('timetableStore', () => {
  const clubData = ref([]);
  const day = ref(1);

  const getClubTimetable = async () => {
    try {
      const clubDataResponse = await api.get(`/main/club/all/date/${day.value}`);
      clubData.value = clubDataResponse.data;
    } catch (error) {
      console.error(error);
      clubData.value = [];
    }
  };
  
  const changeDate = (index) => {
    day.value = index;
  };

  return {
    clubData,
    day,
    getClubTimetable,
    changeDate,
  };
});
