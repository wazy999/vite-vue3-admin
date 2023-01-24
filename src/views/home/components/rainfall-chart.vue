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
let myChart:any = null;
// 基于准备好的dom，初始化echarts实例
onMounted(() => {
  myChart = echarts.init(chart.value, "", {renderer:"svg"});
  window.addEventListener('resize', function() {
    myChart.resize();
  });
  const option = {

    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Rainfall', 'Evaporation']
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Rainfall',
        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
        ],
        markPoint: {
          data: [
            { type: 'max', name: 'Max' },
            { type: 'min', name: 'Min' }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
      },
      {
        name: 'Evaporation',
        type: 'bar',
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ],
        markPoint: {
          data: [
            { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
            { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
          ]
        },
        markLine: {
          data: [{ type: 'average', name: 'Avg' }]
        }
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