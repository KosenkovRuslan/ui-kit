<script setup>
import Checkbox from "@/components/checkboxes/Checkbox.vue";

const emits = defineEmits(['update:value']);
const props = defineProps({
	value: {
		type: Array,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	options: {
		type: Array,
		required: true,
		validator: (value) => {
			const hasNameKey = value.every(option => Object.keys(option).includes('name'));
			const hasIdKey = value.every(option => Object.keys(option).includes('id'));

			return hasNameKey && hasIdKey;
		},
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const check = (params) => {
	let updateValue = [...props.value];
	if (params.checked) {
		updateValue.push(params.optionId)
	} else {
		updateValue.splice(updateValue.indexOf(params.optionId), 1);
	}
	emits('update:value', updateValue)
};

</script>

<template>
	<div v-for="option in options" :key="option.id">
		<Checkbox
			:label="option.name"
			:id="option.id"
			type="checkbox"
			:name="name"
			:value="option.name"
			:disabled="option.disabled"
			group
			:checked="value.includes(option.id)"
			@updateCheckboxGroup="check"
		/>
	</div>
</template>

<style lang="scss" scoped></style>
