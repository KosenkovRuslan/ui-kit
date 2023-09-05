<script setup>
import Header from "@/components/layouts/Header.vue";
import Sidebar from "./components/layouts/Sidebar.vue";
import {ref} from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
	isOpen.value = !isOpen.value;
}

</script>

<template>
	<div class="container">
		<div class="sidebar-toggle" @click="toggleMenu">&#5125;</div>
		<Header/>
		<Sidebar :openSidebar="isOpen"/>
		<div :class="['content', { content__full: !isOpen }]">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="scss">
@import "@/styles/global.scss";

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.content {
	max-width: 1400px;
	margin-left: 250px;
	padding: 30px;
	padding-top: 62px;
	transition: .3s;
	&__full {
		margin-left: 0;
	}
}

.sidebar-toggle {
	position: fixed;
	left: 0;
	width: 15px;
	background: var(--primary);
	height: 100%;
	top: 62px;
	z-index: 3;
	cursor: pointer;
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}

@media screen and (max-width: 1023px) {
	.content {
		margin-left: 0;
	}
}
</style>
