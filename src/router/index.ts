import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "../layout/index.vue"
import Login from "@/views/login/index.vue"
import { useLocalStorage } from "@vueuse/core"
import { useLoginStore } from "../store"
import NProcess from "nprogress"
import "nprogress/nprogress.css"

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
	},{
		path:"/login",
		name:"login",
		component:Login
	}
]
const router = createRouter({
	history:createWebHashHistory(),
	routes
})

router.beforeEach((to, from, next) => {
	NProcess.start()
	if(to.path === "/login"){
		next()
	}else{
		let token = useLoginStore().access_token;
		if(!token) localStorage.getItem("access_token")
		if(!token){
			next("/login")
		}else{
			next()
		}
	}
})

router.afterEach((to, from) => {
	NProcess.done()
})

export default router