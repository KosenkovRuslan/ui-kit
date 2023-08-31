<script setup>
import ProgressBar from "@/components/progress/ProgressBar.vue";
import ProgressCircle from "@/components/progress/ProgressCircle.vue";
import Button from "@/components/Button.vue";
import { ref } from "vue";

const percentBar = ref(31);
const percentCircle = ref(31);
const disabledButtonBar = ref(false);
const disabledButtonCircle = ref(false);
const addPercentBar = () => {
	percentBar.value += 10;
	if (percentBar.value > 100) {
		disabledButtonBar.value = true;
		percentBar.value = 100;
	}
};

const addPercentCircle = () => {
	percentCircle.value += 10;
	if (percentCircle.value > 100) {
		disabledButtonCircle.value = true;
		percentCircle.value = 100;
	}
};
</script>

<template>
	<h1 class="heading-1">Progress</h1>
	<h2 class="heading-2">Progress Bar</h2>
	<div class="line line_block">
		<ProgressBar maxWidth="400px" :percent="percentBar" color="danger" />
		<Button
			label="Add 10%"
			@click="addPercentBar"
			:disabled="disabledButtonBar"
			color="success"
		/>
	</div>
	<h2 class="heading-2">Progress Bar Circle</h2>
	<div class="line line_block">
		<ProgressCircle :percent="percentCircle" color="info" />
		<Button
			label="Add 10%"
			@click="addPercentCircle"
			:disabled="disabledButtonCircle"
			color="success"
		/>
	</div>
</template>

<style lang="scss" scoped>
.progress {
	&-circle {
		position: relative;
		margin-bottom: 20px;
		width: 120px;
		height: 120px;
		&-svg {
			transform: rotate(-90deg);
		}
		&-percent {
			position: absolute;
			left: 0;
			width: 100%;
			top: 0;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: bold;
			font-size: 18px;
		}
		&-line {
			stroke-dasharray: 100;
			transition: 0.5s;
		}
	}
}
</style>
