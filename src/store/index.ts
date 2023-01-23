import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import router from '@/router'

export const useUserInfo = defineStore('userInfo', {
  state:() => ({
    token: '',
  }),
  getters:{

  },
  actions:{

 }
})

interface ICommonStore {
    keepAliveArr:string[],
}

export const useCommonStore = defineStore<string, ICommonStore>('commonStore', {
    state:() => ({
        keepAliveArr: [],
    }),
    getters:{

    },
    actions:{

    }
})

export const useLoginStore = defineStore("loginStore", {
  state:() => ({
    userName: "",
    password: "",
    access_token: ""
  }),
  getters:{

  },
  actions:{
    logout:function() {
      this.userName = ""
      this.password = ""
      this.access_token = ""
      sessionStorage.removeItem("access_token")
      router.push("/login")
    }
  },
  persist:{
    enabled: true,
    strategies: [
      {
        key: 'loginStore',  //自定义 Key值
        storage: sessionStorage,  // 选择存储方式
      },
    ],
  }
})

// const instance = useLoginStore()
// instance.$subscribe((_, state) => {
//   useLocalStorage("login-store", JSON.stringify(state))
//   useLocalStorage("token", state.token)
// })
// let loginStore = window.localStorage.get("login-store")
// if(loginStore) {
//   instance.$state = JSON.parse(loginStore)
// }
