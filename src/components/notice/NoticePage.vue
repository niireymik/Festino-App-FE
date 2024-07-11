<template>
  <div class="w-full h-auto flex flex-col bg-white rounded-3xl border-primary border-1 justify-center items-center p-5 gap-[20px]">
    <div class="w-full aspect-w-1 aspect-h-1 bg-primary-700 rounded-3xl"></div>
    <div class="w-full text-xs" v-html="notice"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const notice = ref("안녕하세요. ‘Festino’ 개발팀입니다.<br><br>‘Festino’는 한국공학대학교 학우 여러분들을 대상으로 한국공학대학교 축제 관련 정보를 쉽게 확인할 수 있는 수단을 제공해드리고자 제작하게 되었습니다!<br><br>또한, 자체적으로 제작한 축제 야간부스 테이블링 기능을 통해 쉽고 빠른 야간부스 예약과 자리에서 빠르게 주문하는 간편 주문 시스템을 제공하고 있으니 많은 관심 부탁드립니다!<br><br>페스티노 드림")
</script>

<style lang="css" scoped></style>
