<template>
	<a-layout-sider width="200" style="background: #fff" v-model:collapsed="collapsed" :trigger="null" collapsible>
		<a-menu
			v-model:selectedKeys="selectedKeys"
			v-model:openKeys="openKeys"
			mode="inline"
			:style="{ height: '100%', borderRight: 0 }"
			:collapsed="false"
		>
			<div v-for="item in sideNavList" :key="item.path">
				<a-sub-menu v-if="item.children?.length" :key="item.path">
					<template #title>
						<span>
							<user-outlined />
							{{item.title}}
						</span>
					</template>
					<a-menu-item v-for="child in item.children" :key="child.path" @click="routerLink(child.path)">{{child.title}}</a-menu-item>
				</a-sub-menu>
				<a-menu-item  v-else @click="routerLink(item.path)" :key="item.path">
					<user-outlined />
					{{item.title}}
				</a-menu-item>
			</div>
			<menu-unfold-outlined
				v-if="collapsed"
				class="trigger"
				@click="() => (collapsed = !collapsed)"
			/>
			<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
		</a-menu>
	</a-layout-sider>
</template>

<script setup lang='ts'>
import { ref, defineProps, Ref, watch} from 'vue'
import { UserOutlined, LaptopOutlined, NotificationOutlined, MenuUnfoldOutlined, MenuFoldOutlined, CloseOutlined} from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router';
interface ISideNavList {
	path:string,
	title:string,
	children?:ISideNavList[]
}
let index = 0
const sideNavList:ISideNavList[] = [
	{ path:"/home", title:"首页", children:[] },
	{ path:"/chart", title:"图表", children:[
		{path:"/chart/broken-line", title:"折线图"},
		{path:"/chart/columnar", title:"柱状图"},
		{path:"/chart/other", title:"其他"},
	]},
]
const router = useRouter()
const routes = useRoute()
const collapsed = ref(false)
let selectedKeys = ref<string[]>([routes.path])
let openKeys = ref<string[]>([routes.path])
function routerLink(path:string) {
	router.push(path);
}
watch(() => routes.path, (to, from) => {
	for(let item of sideNavList) {
		selectedKeys.value[0] = to;
		if(item.path !== '/' && to.includes(item.path)) {
			openKeys.value[0] = item.path
			break;
		}
	}
})
</script>

<style scoped lang='scss'>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>