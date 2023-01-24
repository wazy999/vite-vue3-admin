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
import * as echarts from 'echarts/core';
// 可以根据需要选用只用到的渲染器
import { SVGRenderer, CanvasRenderer } from 'echarts/renderers';
echarts.use([SVGRenderer, CanvasRenderer])
const pinia = createPinia()
pinia.use(piniaPluginPersist)
const app = createApp(App);
app
.use(pinia)
.use(routes)
.use(antd)
.mount('#app')

