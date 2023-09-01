<script setup>
const emits = defineEmits(["update:value"]);
const props = defineProps({
	value: {
		type: String,
		default: "",
	},
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		default: "text",
	},
	placeholder: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	width: {
		type: String,
		default: "300px",
	},
	error: {
		type: Array,
		required: false,
	},
});

const updateValue = (event) => {
	emits("update:value", event.target.value);
};
</script>

<template>
	<div class="form-input" :style="{ width: width }">
		<input
			class="input-text"
			:value="value"
			:name="name"
			:type="type"
			:placeholder="placeholder"
			:label="label"
			:id="name"
			@input="updateValue"
		/>
		<label :for="name" class="input-label">{{ label }}</label>
		<TransitionGroup>
			<div class="form-error" v-for="item of error" :key="item.$uid">
				<div class="form-error__message">{{ item.$message }}</div>
			</div>
		</TransitionGroup>
	</div>
</template>

<style lang="scss" scoped>
.form {
	&-input {
		margin-bottom: 30px;
		position: relative;
	}
	&-error {
		background: var(--danger);
		margin-top: 4px;
		border-radius: 7px;
		font-size: 13px;
		color: #fff;
		padding: 5px;
	}
}
.input {
	&-text {
		border: 2px solid var(--primary);
		padding: 0 10px;
		height: 40px;
		border-radius: 7px;
		font-size: 15px;
		width: 100%;
		position: relative;
		z-index: 1;
		transition: all 0.3s;
		&:hover {
			border-color: var(--primary-hover);
		}
		&:active {
			border-color: var(--primary-hover);
		}
		&:focus-visible {
			outline: var(--primary-hover);
		}
		&:focus {
			border-color: var(--primary-hover);
			& + .input-label {
				z-index: 1;
				opacity: 1;
				top: -20px;
			}
		}
		&:not(:placeholder-shown) {
			& + .input-label {
				z-index: 1;
				opacity: 1;
				top: -20px;
			}
		}
	}
	&-label {
		font-weight: bold;
		display: block;
		position: absolute;
		top: 20px;
		opacity: 0;
		z-index: -1;
		transition: 0.3s;
		font-size: 13px;
		color: var(--primary);
	}
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
