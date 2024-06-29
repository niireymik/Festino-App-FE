<template>
  <Transition name="modalFadeEffect">
    <div v-if="performerModalState" class="fixed z-50">
      <PerformerModal :handleClosePerformerModal="handleClosePerformerModal" />
    </div>
  </Transition>
  <div class="w-full h-[178px] bg-white rounded-3xl border-primary border-1" v-bind="$attrs">
    <div class="flex pt-[17px] dynamic-padding justify-between">
      <div class="flex flex-col items-center" v-for="item in 3" :key="item"  @click="handleClickModalButton()">
        <div
          class="w-[100px] h-[100px] bg-primary-700 rounded-full bg-tino-cheer-up bg-center bg-no-repeat bg-[length:61px_62px]"
        ></div>
        <div class="text-xs font-normal pt-2">17:00</div>
        <div class="text-primary-700 font-medium">티노</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PerformerModal from './PerformerModal.vue';
import { ref, watchEffect } from 'vue';

const performerModalState = ref(false);

const handleClickModalButton = () => {
  performerModalState.value = true;
};
const handleClosePerformerModal = () => {
  performerModalState.value = false;
};
const handleStopScroll = () => {
  if (performerModalState.value) document.documentElement.style.overflow = 'hidden';
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
.modalFadeEffect-enter-from {
  opacity: 0;
}
.modalFadeEffect-enter-active {
  transition: all 0.5s;
}
.modalFadeEffect-enter-to {
  opacity: 1;
}
.modalFadeEffect-leave-from {
  opacity: 1;
}
.modalFadeEffect-leave-active {
  transition: all 0.2s;
}
.modalFadeEffect-leave-to {
  opacity: 0;
}
</style>
