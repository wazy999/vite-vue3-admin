<template>
	<a-layout-content
		:style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
	>
		<router-view v-slot="{ Component }" :key="key">
			<Transition>
				<keep-alive :include="keepAliveArr">
					<component class="view" :is="Component" />
				</keep-alive>
			</Transition>
		</router-view>
	</a-layout-content>
</template>

<script setup lang='ts'>
import { computed, defineProps, watch } from 'vue'
import { useCommonStore } from '@/store';
import { useRoute } from 'vue-router';
const props = defineProps<{}>()
const route = useRoute();
const keepAliveArr =  useCommonStore().$state.keepAliveArr
const key = computed(()=> route.path)
</script>

<style scoped lang='scss'>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>