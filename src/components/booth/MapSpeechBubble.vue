<script setup>
</script>

<template>
  <div class="speech-bubble">
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
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 5px solid transparent;
	border-top-color: #ffffff;
	border-bottom: 0;
	margin-left: -5px;
	margin-bottom: -5px;
}
</style>
