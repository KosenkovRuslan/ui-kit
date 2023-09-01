<script setup>
import { ref } from 'vue';

const props = defineProps({
	openSidebar: {
		type: Boolean,
		required: true,
	}
});

const links = ref([
	{ name: 'Typography', href: '/typography' },
	{ name: 'Button', href: '/button' },
	{ name: 'Checkbox', href: '/checkbox' },
	{ name: 'RadioButton', href: '/radiobutton' },
	{ name: 'Progress', href: '/progress' },
	{ name: 'Input', href: '/input' },
])
</script>

<template>
	<div :class="['sidebar', {sidebar__isopen: openSidebar }]">
		<router-link
			class="sidebar__link"
			v-for="link in links"
			:key = link.name
			:to="link.href"
		>
			{{ link.name }}
		</router-link>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	left: 0;
	top: 62px;
	height: 100%;
	background: #fff;
	position: fixed;
	width: 250px;
	padding: 20px;
	transition: .3s;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
	transform: translateX(-250px);
	&__isopen {
		transform: translateX(0px);
		z-index: 1;
	}
	&__link {
		display: block;
		border-radius: 12px;
		border: 2px solid #fff;
		transition: .3s;
		font-weight: bold;
		margin-bottom: 10px;
		&:hover {
			color: var(--primary);
		}
	}
}
</style>