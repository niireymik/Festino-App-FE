<script setup>
</script>

<template>
  <div class="speech-bubble shadow-5xl">
    <slot></slot>
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
	left: 0;
	top: 50%;
	width: 0;
	height: 0;
	border: 11px solid transparent;
	border-right-color: #ffffff;
	border-left: 0;
	margin-top: -10px;
	margin-left: -10px;
}
</style>
