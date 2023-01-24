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
  width:"30%",
  height:"300px"
})
let myChart:any = null
// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  myChart = echarts.init(chart.value, "", {renderer:"svg"});
  window.addEventListener('resize', function() {
    myChart.resize();
  });
  const option = {
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  };
  // 绘制图表
  myChart.setOption(option);
})
onUnmounted(() => {
  myChart.dispose()
})

</script>

<style scoped lang='scss'>

</style>