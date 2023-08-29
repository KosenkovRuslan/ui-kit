import { createApp } from "vue";
import router from "@/router";
import App from "./App.vue";
const icons = [faAddressBook, faCreditCard, faHand, faHeart, faHourglass, faLemon];

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressBook, faCreditCard, faHand, faHeart, faHourglass, faLemon } from '@fortawesome/free-regular-svg-icons'

library.add([...icons]);

createApp(App)
	.component('font-awesome', FontAwesomeIcon)
	.use(router)
	.mount("#app");
