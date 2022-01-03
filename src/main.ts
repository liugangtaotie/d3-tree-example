import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import '@ASS/flex.css'
import '@ASS/style.css'

Vue.use(ElementUI)
Vue.use(VueCompositionAPI)

const app = new Vue({
  router,
  render: (h) => h(App),
})

app.$mount('#app')
