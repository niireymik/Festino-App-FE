<script setup>
import { usePersonalInfoStore } from '@/stores/personalInfoStore';

const { handleClickAgreeCheckBox } = usePersonalInfoStore();
</script>

<template>
  <label class="flex items-center text-sm font-medium text-secondary-700">
    <input
      @click.stop="handleClickAgreeCheckBox()"
      type="checkbox"
      value=""
      class="w-4 h-4 mr-2 text-primary-900 bg-gray-100 border-gray-300 rounded-4xl focus:ring-primary-900 focus:ring-offset-1 focus:ring-1 focus:rounded-3xl"
    />
    개인정보 수집• 이용 동의 (필수)
  </label>
</template>

<style></style>
