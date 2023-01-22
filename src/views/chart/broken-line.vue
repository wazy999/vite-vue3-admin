<script setup lang='ts'>
import { onDeactivated,onActivated, onUnmounted } from 'vue'
onDeactivated(() => {
    console.log("onDeactivated")
})
onActivated(() => {
    console.log("onActivated")
})
onUnmounted(() => {
    console.log("unmounted")
})
</script>

<template>
    <div>直线图</div>
</template>

<style scoped lang='scss'>

</style>