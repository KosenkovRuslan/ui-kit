<script setup>
import { reactive, computed } from "vue";
import useVulidate, { useVuelidate } from '@vuelidate/core';
import { minLength, maxLength, numeric, helpers, email, sameAs, required } from "@vuelidate/validators";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const state = reactive({
	name: '',
	email: '',
	age: '',
	password: '',
	confirmPassword: '',
	requiredWord: '',
});

const mustBeFrontend = (value) => value.toLowerCase().includes('frontend');


const rules = computed(() => ({
	name: {
		minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3)),
	},
	email: {
		email: helpers.withMessage('Вы ввели неверный email', email),
		required: helpers.withMessage('Поле обязательно для заполнения', required),
	},
	age: {
		maxLength: helpers.withMessage('Максимальная длина: 2 символа', maxLength(2)),
		numeric: helpers.withMessage('Вы можете ввести только цифры', numeric),
	},
	password: {
		minLength: helpers.withMessage('Минимальная длина: 3 символа', minLength(3)),
		required: helpers.withMessage('Поле обязательно для заполнения', required),
	},
	confirmPassword: {
		sameAsPassword: helpers.withMessage('Пароли не совпадают', sameAs(state.password)),
	},
	requiredWord: {
		requiredWord: helpers.withMessage('Поле должно содержать слово "frontend"', mustBeFrontend),
	}
}));

const v = useVuelidate(rules, state);

const submitForm = () => {
	v.value.$touch();
	console.log(v.value);
	if (v.value.$error) return
	alert('Form submitted')
}
</script>

<template>
	<h1 class="heading-1">Input</h1>
	<form @submit.prevent="submitForm">
		<Input
			name="name"
			placeholder="Input your name"
			label="Your name"
			:error="v.name.$errors"
			v-model:value="v.name.$model"
		/>
		<Input
			name="email"
			placeholder="Input your email"
			label="Your email"
			:error="v.email.$errors"
			v-model:value="v.email.$model"
		/>
		<Input
			name="age"
			placeholder="Input your age"
			label="Your age"
			:error="v.age.$errors"
			v-model:value="v.age.$model"
		/>
		<Input
			name="password"
			type="password"
			placeholder="Input your password"
			label="Your password"
			:error="v.password.$errors"
			v-model:value="v.password.$model"
		/>
		<Input
			name="confirmPassword"
			placeholder="Confirm your password"
			label="Confirm password"
			:error="v.confirmPassword.$errors"
			v-model:value="v.confirmPassword.$model"
		/>
		<Input
			name="mustBeWord"
			placeholder="Input text"
			label="Required word"
			:error="v.requiredWord.$errors"
			v-model:value="v.requiredWord.$model"
		/>

		<Button
			label="Submit"
			color="primary"
		/>
	</form>
</template>

<style lang="scss" scoped></style>
