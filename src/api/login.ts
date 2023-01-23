import axios from "axios";

export const loginApi = (data:{userName:string, password:string}) => {
  return axios.post("/api/login",data)
}