import axios from 'axios';
import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTimetableStore = defineStore('timetableStore', () => {
  const HOST = "https://api.festino.dev-tino.com";
  const clubData = ref([]);
  const talentData = ref([]);
  const timetableData = ref([]);
  const day = ref(1);
  const date = ref(10);

  const getClubTimetable = async () => {
    try {
      const clubDataResponse = await axios.get(`${HOST}/main/club/all/date/${date.value}`);
      clubData.value = clubDataResponse.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getTalentTimetable = async () => {
    try {
      const talentDataResponse = await axios.get(`${HOST}/main/talent/all/date/${date.value}`);
      talentData.value = talentDataResponse.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllTimetable = async () => {
    await getClubTimetable();
    await getTalentTimetable();
    if (clubData.value.showInfo && talentData.value.showInfo) timetableData.value = [...clubData.value.showInfo, ...talentData.value.showInfo];
    else timetableData.value = [];
  };

  const changeDate = (index) => {
    day.value = index
    date.value = day.value + 10
  };

  return {
    clubData,
    talentData,
    timetableData,
    day,
    date,
    getClubTimetable,
    getTalentTimetable,
    getAllTimetable,
    changeDate,
  };
});
