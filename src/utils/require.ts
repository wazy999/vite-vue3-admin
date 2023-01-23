import axios from "axios"
import { useRouter } from "vue-router"
import { useLoginStore } from "../store"
const router = useRouter()
axios.interceptors.request.use((config) => {
  const loginStore = useLoginStore();
  let token:string | null = loginStore.access_token
  if(!token) token = localStorage.getItem("access_token")
  if(!token) router.push("/login")
  config.headers.token = token
  return config;
},err => {
  return err
})

axios.interceptors.response.use(res => {
  return res.data
},err => {
  
})