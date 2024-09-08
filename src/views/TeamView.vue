<script setup>
import Header from '@/components/header/Header.vue';
import { api } from '@/utils/api';
import { ref } from 'vue';

const content = ref('');
const email = ref('');

const handleClickReviewSubmit = async () => {
  // Check is Email is valiate
  if (email.value.length > 0 && !email.value.includes('@')) {
    alert('Please enter a valid email address');
    return;
  }

  try {
    const response = await api.post('/main/review', {
      content: content.value,
      email: email.value,
    });
    if (!response.data.success) {
      alert('Something ent wrong, Please try again');
    }
  } catch (error) {
    alert('Something ent wrong, Please try again');
    console.error(error);
  }
};
</script>

<template>
  <div class="flex flex-col pb-24">
    <Header />
    <img src="/images/teams/teams.png" />

    <div class="flex flex-col w-full items-center justify-center px-6 gap-4 pt-6 pb-16">
      <div class="text-primary-900 text-2xl font-bold">REVIEW</div>
      <div class="text-secondary-700 text py-4 text-center">
        Festino 서비스를 이용하면서 좋았던<br />
        불편했던 점을 작성해주세요!
      </div>
      <textarea
        placeholder="내용을 작성해주세요."
        class="text-xs border-1 border-gray-200 rounded w-full px-4 py-4 h-[200px] resize-none"
        maxlength="1000"
        v-model="content"
      ></textarea>
      <div class="flex w-full justify-between items-center placeholder-gray-400">
        <input
          type="text"
          placeholder="이메일 (선택사항)"
          class="text-xs rounded-lg border-1 border-gray-200 px-4 w-[200px] h-[33px] align-middle"
          v-model="email"
        />
        <button
          class="text-primary-900 w-[112px] h-[33px] flex items-center justify-center rounded-lg border-1 border-gray-200 gap-2 py-4"
          type="button"
          @click="handleClickReviewSubmit()"
        >
          <img src="/images/teams/send.svg" /> 보내기
        </button>
      </div>
    </div>
    <!-- <div class="w-full min-h-screen bg-teams grow bg-cover"></div> -->
  </div>
</template>

<style></style>
