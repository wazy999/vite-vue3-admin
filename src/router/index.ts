import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "../layout/index.vue"

const routes = 
[{
		path:"/", 
		name:"layout", 
		redirect:"/home",
		meta:{
			title:"layout",
			keepAlive:false
		},
		component: Layout,
		children:[{
				path:"/home", 
				name:"home", 
				meta:{
						title:"首页",
						keepAlive:true
				},
				component:() => import ('../views/home/index.vue'),
			}]
	},{
		path:"/chart", 
		name:"chart", 
		component:Layout, 
		redirect:"/chart/broken-line",
		children:[{
				path:"/chart/columnar", 
				name:"columnar", 
				meta:{
						title:"柱状",
						parentTitle:"图表",
						keepAlive:true
				},
				component:() => import ('../views/chart/columnar.vue'), 
			},{
				path:"/chart/broken-line", 
				name:"broken-line", 
				meta:{
						title:"折线",
						parentTitle:"图表",
						keepAlive:true
				},
				component:() => import ('../views/chart/broken-line.vue'), 
			},{
				path:"/chart/other", 
				name:"other", 
				meta:{
						title:"其他",
						parentTitle:"图表",
						keepAlive:true
				},
				component:() => import ('../views/chart/other.vue'), 
			}]
	},
]
const router = createRouter({
	history:createWebHashHistory(),
	routes
})

export default router