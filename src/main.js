import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
app.use(Toast)
app.use(store).use(router).mount('#app')
