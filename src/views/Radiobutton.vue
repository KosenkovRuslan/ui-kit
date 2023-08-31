<script setup>
import { ref } from "vue";
import RadioButton from "@/components/Radiobutton.vue";

const selectedCars = ref("");
const listOfCars = ref([
	{ model: "Tesla", id: "c1" },
	{ model: "BMW", id: "c2" },
	{ model: "Jaguar", id: "c3" },
	{ model: "Жигули", id: "c4" },
]);

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
	<h1 class="heading-1">Radiobutton</h1>
	<h2 class="heading-2">Basic</h2>
	<div class="line line_block">
		<p>Selected: {{ selectedCars }}</p>
		<div v-for="car in listOfCars" :key="car.id">
			<RadioButton
				:value="car.model"
				:label="car.model"
				:id="car.id"
				name="Cars"
				v-model:checkedValue="selectedCars"
			/>
		</div>
	</div>
	<h2 class="heading-2">Disabled radiobutton</h2>
	<RadioButton
		value="Radiobutton Disabled"
		label="Radiobutton Disabled"
		id="RadiobuttonDisabled"
		name="RadiobuttonDisabled"
		:disabled="disabledRadio"
		v-model:checkedValue="disabledRadioChecked"
	/>
</template>

<style lang="scss" scoped></style>
