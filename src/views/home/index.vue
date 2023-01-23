
<template>
  <div class="content">
    <a-card v-for="item in dataList" :key="item.id" hoverable >
      <div>{{ item.title }}</div>
      <div>{{ item.num }}</div>
    </a-card>
  </div>
  
</template>

<script setup lang="ts">
import { } from "vue"
let index = 0;
const dataList = [
  { id:++index, title:"vistor", num:102400 },
  { id:++index, title:"messages", num:81212 },
  { id:++index, title:"Purchases", num:9280 },
  { id:++index, title:"Shoppings", num:13600 }
]
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
