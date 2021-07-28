import { createApp } from 'vue'
import { globalRegister } from './global'

import './service/axios_demo'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)
app.use(router)
app.use(store)

app.mount('#app')

// console.log(VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
