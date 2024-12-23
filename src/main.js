import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AosVue from "aos-vue";

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia).use(router).use(AosVue);

app.mount('#app')
