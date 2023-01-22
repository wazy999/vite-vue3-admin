<template>
  <a-layout >
    <Head />
    <a-layout>
			<right-side />
      <a-layout style="padding: 0 24px 24px">
				<Tag :tagList="tagList" :curPath="curPath" @closeTag="closeTag" @routerLink="routerLink"></Tag>
				<Content :breadcrumbList="breadcrumbList"/>	
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCommonStore } from "@/store/index"
import Head from "./components/head.vue"
import Tag from "./components/tag.vue"
import RightSide from "./components/right-side.vue"
import Content from "./components/content.vue"
export default defineComponent({
  components: {
    Head,
    RightSide,
    Tag,
    Content
  },
  setup() {
    const routes = useRoute()
    const router = useRouter()
    let curPath = ref("");
    const keepAliveArr:string[] = useCommonStore().$state.keepAliveArr
    let breadcrumbList:{ title:string }[]= reactive([]);
		if(typeof routes.meta.parentTitle === "string") breadcrumbList.push({title: routes.meta.parentTitle})
		if(typeof routes.meta.title === "string") breadcrumbList.push({title: routes.meta.title})
		watch(routes, (to, from) => {
      if(to.meta.keepAlive && !keepAliveArr.includes(to.name as string)) {
        keepAliveArr.push(to.name as string)
      }
      curPath.value = to.path
      tagList.set(curPath.value, {title:routes.meta?.title as string})
      breadcrumbList.length = 0
      if(typeof to.meta.parentTitle === "string") breadcrumbList.push({title: to.meta.parentTitle})
      if(typeof to.meta.title === "string") breadcrumbList.push({title: to.meta.title})
    })

    const tagList:Map<string, { title:string }> = reactive(new Map())
    tagList.set(curPath.value, {title:routes.meta?.title as string})
    function closeTag(pathname:string) {
      keepAliveArr.splice(keepAliveArr.findIndex(el => pathname.includes(el)), 1)
      tagList.delete(pathname)
      const length = tagList.size
      if(length === 0) {
        router.push("/")
        return;
      }
      const path:string = Array.from(tagList)[length - 1][0]
      router.push(path ? path : "/")
    }
		function routerLink(path:string) {
			router.push(path);
		}
    return {
			routerLink,
      keepAliveArr,
      curPath,
      tagList,
      breadcrumbList,
      closeTag,
      selectedKeys1: ref<string[]>(['2']),
    };
  },
});
</script>

<style scoped lang="scss">
.site-layout-background {
  background: #fff;
}

</style>