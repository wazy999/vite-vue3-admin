<template>
	<div>
		<a-tag 
			:visible="props.tagList.get(tag[0]) !== undefined" 
			@click="jump(tag[0])" 
			:color="tag[0] === curPath ? '#108ee9' : ''" 
			v-for="tag in props.tagList" 
			:key="tag[0]" 
			style="cursor: pointer;"
		>
			{{tag[1].title}}
			<close-outlined @click.stop="closeTag(tag[0])"/>
		</a-tag>
	</div> 
</template>

<script setup lang='ts'>
import { defineProps, defineEmits,  } from 'vue'
import { CloseOutlined } from "@ant-design/icons-vue"
const emit = defineEmits<{
	(e:"routerLink", path:string):void,
	(e:"closeTag", path:string):void,
}>()
interface IMapParams {
	title?:string
}
interface IProps {
	tagList:Map<string, IMapParams>,
	curPath: string
}
const props = defineProps<IProps>()

function jump(path:string) {
	emit("routerLink", path)
}
function closeTag(path:string) {
	emit("closeTag", path)
}
</script>

<style scoped lang='scss'>

</style>