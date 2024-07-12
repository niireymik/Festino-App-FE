<template>
  <div v-if="clubModalState">
    <ClubModal :handleCloseModal="handleCloseModal" />
  </div>
  <div v-if="talentModalState">
    <TalentModal :handleCloseModal="handleCloseModal" />
  </div>
  <div class="w-full px-5 pt-5 pb-1.5">
    <div class="flex flex-col items-center border-2 border-primary rounded-3xl py-5">
      <div class="px-5 pb-5">
        <div class="w-[300px] xs:w-[350px] sm:w-[390px] py-2 text-white bg-primary-700 rounded-full flex justify-center">
          DAY {{ day + 1 }} 공연 타임테이블
        </div>
      </div>
      <div class="flex overflow-y-auto h-full w-full justify-center">
        <div class="flex flex-col items-center text-secondary-700 gap-[65px] pt-1">
          <div v-for="item in 6" :key="item" :class="item == 1 ? 'text-secondary-100' : 'text-secondary-700'">17:00 ~ 17:30</div>
        </div>
        <div class="pt-3 pl-3 xs:pl-4 sm:pl-7 pr-1 xs:pr-3 sm:pr-7">
          <div class="border-2 border-primary-700 h-[450px] w-0 border-dashed flex flex-col items-center gap-[77.6px]">
            <div class="w-[16px] h-[16px] mt-[-5px] rounded-full flex items-center justify-center" :class="item == 1 ? 'bg-secondary-50' : 'bg-primary-700-light'" v-for="item in 5" :key="item">
              <div class="w-[8px] h-[8px] rounded-full" :class="item == 1 ? 'bg-secondary-100' : 'bg-primary-700'"></div>
            </div>
          </div>
          <div class="w-[16px] h-[16px] mt-[-10px] ml-[-7px] rounded-full bg-primary-700-light flex items-center justify-center">
            <div class="w-[8px] h-[8px] rounded-full bg-primary-700"></div>
          </div>
        </div>
        <div class="flex flex-col items-center gap-6">
          <div class="flex justify-center py-5 rounded-3xl w-[170px] xs:w-[210px] sm:w-[230px] border-2"
            v-for="item in 6" :key="item"
            :class="item == 1 ? 'bg-secondary-50 border-secondary-100 text-secondary-100' : 'border-primary text-primary-700'"
            @click="handleClickOpenModal()">교내 동아리 '~~'</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubModal from './ClubModal.vue';
import TalentModal from './TalentModal.vue';
import { ref, watchEffect } from 'vue';
import { defineProps } from 'vue';

const props = defineProps(["day"]);

const clubModalState = ref(false);
const talentModalState = ref(false);
const category = ref("club");

const handleClickOpenModal = () => {
  if (category.value == "talent") talentModalState.value = true;
  else clubModalState.value = true;
};
const handleCloseModal = () => {
  if (category.value == "talent") talentModalState.value = false;
  else clubModalState.value = false;
};
const handleStopScroll = () => {
  if (clubModalState.value || talentModalState.value) document.documentElement.style.overflow = 'hidden';
  else document.documentElement.style.overflow = 'auto';
};

watchEffect(() => {
  handleStopScroll();
});
</script>

<style lang="css" scoped>
</style>
