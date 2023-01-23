<template>
  <div class="body">
    <div class="login-frame">
      <a-card title="系统登录" :bordered="false" style="width: 300px">
        <a-input v-model:value="userName" placeholder="账号">
        <template #prefix>
          <user-outlined type="user" />
        </template>
      </a-input>
      <p style="color:red">{{userNameTip}}</p>
      <a-input v-model:value="password" placeholder="密码" :type="isWatch ? 'text' : 'password'">
        <template #prefix>
          <key-outlined />
        </template> 
        <template #suffix>
          <eye-outlined v-if="isWatch" @click="isWatch = !isWatch"/>
          <eye-invisible-outlined v-else @click="isWatch = !isWatch"/>
        </template>
      </a-input>
      <p style="color:red">{{passwordTip}}</p>
      <a-button type="primary" class="login-frame-btn" @click="login">登录</a-button>
      <br />
      <br />
      <div>
        <p>账号：admin</p>
        <p>密码：admin</p>
      </div>
    </a-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { message } from "ant-design-vue"
import { UserOutlined, InfoCircleOutlined, KeyOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons-vue'
import { useLocalStorage } from '@vueuse/core'
import { useLoginStore } from '@/store/index.js'
import { loginApi } from "@/api/index"
import router from '@/router'
const loginStore = useLoginStore()
if(loginStore.access_token) router.push("/")
let userName = ref("")
let password = ref("")
let userNameTip = ref("")
let passwordTip = ref("")
let isWatch = ref(false)
function login() {
  const userNameReg = /^[0-9a-zA-Z]+$/
  userNameTip.value = ""
  passwordTip.value = ""

  if(!userNameReg.test(userName.value)) {
    userNameTip.value = "账号错误"
    return
  }
  if(!userNameReg.test(password.value)) {
    passwordTip.value = "密码错误"
    return
  }
  if(userName.value !== "admin" || password.value !== "admin") {
    message.error('账号密码错误');
    return;
  }
  loginApi({password:password.value,userName:userName.value})
  .then(res => {
    const token = res.access_token
    loginStore.$state = {
      password:password.value,
      userName:userName.value,
      access_token:token
    }
    useLocalStorage("access_token", token)
    router.push("/")
  })
}

</script>

<style scoped lang='scss'>
.body{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  width:100vw;
  background:  #6175d8;
  .login-frame{
    max-width:500px;
    max-height: 500px;
    padding: 5px;
    .login-frame-btn{
      width:100%
    }
  }
}
</style>