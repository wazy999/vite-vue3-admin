<template>
  <div ref="chart" :style="{width:props.width,height: props.height}"></div>
</template>

<script setup lang='ts'>
import { ComponentInternalInstance, withDefaults, onMounted, Ref, ref, onUnmounted } from 'vue'
import * as echarts from 'echarts';
const chart = ref(null)
const props = withDefaults(defineProps<{
  width?:string,
  height?:string
}>(),{
  width:"100%",
  height:"300px"
})
// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  var myChart = echarts.init(chart.value, "", {renderer:"svg"});
  window.addEventListener('resize', function() {
    myChart.resize();
  });
  // 绘制图表
  myChart.setOption({
    title: {
      text: 'line Chart',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      name:"时间"
    },
    yAxis: {
      type: 'value',
      name: "数量"
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true
      },{
        data: [100, 200, 300, 500, 100, 800, 1000],
        type: 'line',
        smooth: true
      },
    ]
});
onUnmounted(() => {
  myChart.dispose()
})
})

</script>

<style scoped lang='scss'>

</style>