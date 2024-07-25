<script setup>
</script>

<template>
  <div class="px-[18px] py-[11px] speech-bubble shadow-5xl flex flex-col">
    <div class="text-primary-900 font-semibold text-[12px] pb-1">디자인공학부 부스</div>
		<div class="flex items-center">
			<div class="w-[10px] h-[10px] bg-[url('/icons/booth/location_on.svg')]"></div>
			<div class="text-[8px] pl-[2px] text-secondary-500">운동장 구령대 앞</div>
		</div>
		<div class="flex items-center">
			<div class="w-[10px] h-[10px] bg-[url('/icons/booth/alarm.svg')]"></div>
			<div class="text-[8px] pl-[2px] text-secondary-500">18:00 ~ 24:00</div>
		</div>
  </div>
</template>

<style lang="css" scoped>
.speech-bubble {
  width: 132px;
  height: 68px;
	position: relative;
	background-color: #ffffff;
	border-radius: 17px;
}

.speech-bubble::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 18px solid transparent;
	border-top-color: #ffffff;
	border-bottom: 0;
	margin-left: -18px;
	margin-bottom: -16px;
}
</style>
