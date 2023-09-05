<script setup>
import { ref } from 'vue';
import Tabs from '@/components/Tabs.vue';

const names = [
	{ name: 'About', label: 'О нас'},
	{ name: 'Vue', label: 'Про vue'},
	{ name: 'React', label: 'Про React'},
];

const selectedTab = ref('Vue');
const changeTab = (tabName) => {
	selectedTab.value = tabName;
}
</script>

<template>
	<h1 class="heading-1">Tabs</h1>
	<Tabs
		:names="names"
		:selectedTab="selectedTab"
		@changeTab="changeTab"
	>
		<div v-if="selectedTab === 'About'">Lorem ipsum dolor sit amet.</div>
		<div v-if="selectedTab === 'Vue'">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
		<div v-if="selectedTab === 'React'">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum.</div>
	</Tabs>
</template>

<style lang="scss" scoped></style>
