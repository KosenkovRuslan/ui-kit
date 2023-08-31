<script setup>
import { ref } from 'vue';
import Checkbox from "@/components/checkboxes/Checkbox.vue";
import CheckboxGroup from "@/components/checkboxes/CheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const selectedHeroes = ref(['1']);

const switchProfessional = ref(false);

const listOfHeroes = ref([
	{ name: 'Venom', id: '1', disabled: true },
	{ name: 'Batman', id: '2' },
	{ name: 'Hulk', id: '3' },
	{ name: 'Iron Man', id: '4' },
]);

</script>

<template>
	<h1 class="heading-1">Checkbox</h1>
	<h2 class="heading-2">Checkbox Active</h2>
	{{ checkboxActive }}
	<div class="line">
		<Checkbox
			label="Checkbox Active"
			id="checkboxActive"
			name="checkboxActive"
			value="I like it"
			v-model:checked="checkboxActive"
		/>
	</div>
	<h2 class="heading-2">Checkbox Disabled</h2>
	{{ checkboxDisabled }}
	<div class="line">
		<Checkbox
			label="Checkbox Active"
			id="checkboxDisabled"
			name="checkboxDisabled"
			value="He is disabled"
			:disabled="checkboxDisabled"
			v-model:checked="checkboxDisabledChecked"
		/>
	</div>
	<h2 class="heading-2">Checkbox Group</h2>
	<div class="line line_block">
		<p>Selected Heroes: {{ selectedHeroes }}</p>
		<CheckboxGroup
			:options="listOfHeroes"
			name="Heroes"
			v-model:value="selectedHeroes"
		/>
	</div>
	<h2 class="heading-2">Switch</h2>
	<div class="line line_block">
		<div>State switch: {{ switchProfessional }}</div>
		<Checkbox
			type="switch"
			label="I'm a professional"
			id="switch"
			name="switch"
			value="I'm a professional"
			v-model:checked="switchProfessional"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
