import { createApp } from 'vue'
import App from './App.vue'
import { createNaverMap } from 'vue3-naver-maps'

export const app = createApp(App)

app
  .use(createNaverMap, {
    clientId: import.meta.env.VITE_CLIENT_ID,
    category: 'ncp',
    subModules: []
  })
  .mount('#app')