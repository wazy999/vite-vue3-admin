import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from "pinia"
import antd from "ant-design-vue"
import routes from "./router" 
import 'ant-design-vue/dist/antd.css'
import piniaPluginPersist from "pinia-plugin-persist"
import "./mock/index"
import "./utils/require"
const pinia = createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App);
app
.use(pinia)
.use(routes)
.use(antd)
.mount('#app')

