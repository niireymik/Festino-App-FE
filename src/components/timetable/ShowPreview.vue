<template>
  <div v-if="clubModalState">
    <ClubModal :handleCloseModal="handleCloseModal" />
  </div>
  <div v-if="talentModalState">
    <TalentModal :handleCloseModal="handleCloseModal" />
  </div>
  <div class="px-5">
    <div class="w-full h-[178px] bg-white rounded-3xl border-primary border-1" v-bind="$attrs">
      <div class="flex pt-[17px] dynamic-padding justify-between">
        <div class="flex flex-col items-center" v-for="item in 3" :key="item"  @click="handleClickOpenModal()">
          <div
            class="w-[100px] h-[100px] bg-primary-700 rounded-full bg-tino-cheer-up bg-center bg-no-repeat bg-[length:61px_62px]"
          ></div>
          <div class="text-xs font-normal pt-2">17:00</div>
          <div class="text-primary-700 font-medium">티노</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ClubModal from './ClubModal.vue';
import TalentModal from './TalentModal.vue';
import { ref, watchEffect } from 'vue';

const clubModalState = ref(false);
const talentModalState = ref(false);
const props = defineProps(["category"]);

const handleClickOpenModal = () => {
  if (props.category == "talent") talentModalState.value = true;
  else clubModalState.value = true;
};
const handleCloseModal = () => {
  if (props.category == "talent") talentModalState.value = false;
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
.dynamic-padding {
  padding-left: calc(16 / 390 * 100%) !important;
  padding-right: calc(16 / 390 * 100%) !important;
}
</style>
