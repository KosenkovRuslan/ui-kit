import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Typography from "@/views/Typography.vue";
import Button from "@/views/Button.vue";
import Checkbox from "@/views/Checkbox.vue";
import Radiobutton from "@/views/Radiobutton.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/typography",
			name: "Typography",
			component: Typography,
		},
		{
			path: "/button",
			name: "Button",
			component: Button,
		},
		{
			path: "/checkbox",
			name: "Checkbox",
			component: Checkbox,
		},
		{
			path: "/radiobutton",
			name: "Radiobutton",
			component: Radiobutton,
		},
	],
});

export default router;
