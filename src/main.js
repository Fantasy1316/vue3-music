import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LazyPlugin from 'vue3-lazy'

// 引入全局样式文件
import '@/assets/scss/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .use(LazyPlugin, {
    loading: require('@/assets/images/default.png'),
  })
  .mount('#app')
