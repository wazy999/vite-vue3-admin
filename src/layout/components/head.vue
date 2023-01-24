<template>
    <a-layout-header class="header">
			<img src="@/assets/image/svg/logo.svg" />
			<a-breadcrumb class="breadcrumb" color="#fff">
				<a-breadcrumb-item v-for="item in props.breadcrumbList" :key="item">{{item.title}}</a-breadcrumb-item>
			</a-breadcrumb>
			<a-dropdown :trigger="['click']">
				<a-avatar style="background-color: #87d068" class="ant-dropdown-link" @click.prevent>
					<template #icon>
						<UserOutlined />
					</template>
				</a-avatar>
				<template #overlay>
					<a-menu @click="handleMenunClick">
						<a-menu-item :key="item.key" v-for="item in avatarConfigList">
							{{ item.content }}
						</a-menu-item>
					</a-menu>
				</template>
			</a-dropdown>
    </a-layout-header>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue';
import { useLoginStore } from '../../store';
interface IAvatarConfigList {
	key:number,
	content:string
}
enum configKey {
	LOGIN
}

const avatarConfigList:IAvatarConfigList[] = [
	{key:configKey.LOGIN , content:"退出登录"}
]
const props = defineProps<{
	breadcrumbList:{ title:string }[]
}>()
function handleMenunClick(item:IAvatarConfigList) {
	if(item.key === configKey.LOGIN) {
		useLoginStore().logout()
	}
}

</script>

<style scoped lang='scss'>
.header{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.ant-breadcrumb > span:last-child {
    color: rgb(255 255 255 / 85%);
}
.ant-breadcrumb {
	color:rgb(161, 161, 161)
}
::v-deep .ant-breadcrumb-separator {
	color:#fff
}
.breadcrumb {
	margin: 16px;
	margin-left: 30px;
	flex: 1;
}
</style>