import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueAxios, Axios)

// 引入字体
import './assets/css/base.css'
import './assets/fonts/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'

// 公共组件
import VHeader from './components/header.vue';
Vue.component('VHeader', VHeader)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
