
<template>
  <div class="main">
    <github-corner class="github-corner"/>
    <statistic />
    <line-chart />
    <div class="main-chart">
      <circle-chart />
      <radar-chart />
      <rainfall-chart />
    </div>
    <div class="main-list">
      <!-- <list />-->
      <table /> 
      <card />
    </div>
  </div>
</template>

<script setup lang="ts">
import GithubCorner from "@/components/github-corner/index.vue"
import statistic from "./components/statistic.vue"
import LineChart from "./components/line-chart.vue"
import CircleChart from "./components/circle-chart.vue"
import RadarChart from "./components/radar-chart.vue"
import RainfallChart from "./components/rainfall-chart.vue"
import List from "./components/list.vue"
import Table from "./components/table.vue"
import Card from "./components/card.vue"
import { } from "vue"
let index = 0;
const dataList = [
  { id:++index, title:"vistor", num:102400 },
  { id:++index, title:"messages", num:81212 },
  { id:++index, title:"Purchases", num:9280 },
  { id:++index, title:"Shoppings", num:13600 }
]
</script>

<style scoped lang="scss">
.main {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 80%;
  .github-corner {
    position: absolute;
    top: -24px;
    border: 0;
    right: -24px;
  }
  .main-chart {
    display: flex;
    flex-direction: row;
  }
  .main-list {
    display: flex;
    // flex-direction: row;
  }
}

.read-the-docs {
  color: #888;
}
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

</style>
