import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTimetableStore = defineStore('timetableStore', () => {
  const HOST = import.meta.env.VITE_API_URL;
  const clubData = ref([]);
  const talentData = ref([]);
  const timetableData = ref([]);
  const day = ref(1);

  const getClubTimetable = async () => {
    try {
      const clubDataResponse = await axios.get(`${HOST}/main/club/all/date/${day.value}`);
      clubData.value = clubDataResponse.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getTalentTimetable = async () => {
    try {
      const talentDataResponse = await axios.get(`${HOST}/main/talent/all/date/${day.value}`);
      talentData.value = talentDataResponse.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllTimetable = async () => {
    await getClubTimetable();
    await getTalentTimetable();
    if (clubData.value.showInfo && talentData.value.showInfo) timetableData.value = [...clubData.value.showInfo, ...talentData.value.showInfo];
    else if (!clubData.value.showInfo) timetableData.value = talentData.value.showInfo;
    else if (!talentData.value.showInfo) timetableData.value = clubData.value.showInfo;
    else timetableData.value = [];
  };

  const changeDate = (index) => {
    day.value = index
  };

  return {
    clubData,
    talentData,
    timetableData,
    day,
    getClubTimetable,
    getTalentTimetable,
    getAllTimetable,
    changeDate,
  };
});
