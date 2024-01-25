import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
import DataVVue3 from "@kjgl77/datav-vue3"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
installElementPlus(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(store)
  .use(router)
  .use(DataVVue3)
  .mount('#app')

