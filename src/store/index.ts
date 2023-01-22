import { defineStore } from 'pinia'

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