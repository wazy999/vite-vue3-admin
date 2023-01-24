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
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },

    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
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