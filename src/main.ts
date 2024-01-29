import { createApp } from 'vue'
import App from './App.vue'
// import pinia from './stores'
import router from './router'

// 全局样式样式
import 'vant/lib/index.css'
import './styles/mian.scss'

const app = createApp(App)

app.use(router)
// app.use(pinia)

app.mount('#app')
