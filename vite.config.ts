import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import { VITE_PORT } from "./src/build/vite-config"

const pathResolve = function(path:string):string {
    return resolve(process.cwd(), '.', path)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:[
      {
        find: /\@\//,
        replacement: pathResolve("src") + '/'
      }
    ]
  },
  server:{
    port: VITE_PORT,
    open: true
  }
})
