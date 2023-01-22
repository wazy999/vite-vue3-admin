import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia"
import antd from "ant-design-vue"
import routes from "./router" 
import 'ant-design-vue/dist/antd.css'
const pinia = createPinia()
const app = createApp(App);
app
.use(pinia)
.use(routes)
.use(antd)
.mount('#app')

