// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*模拟数据交互，正常使用时不导入*/
import VResource from 'vue-resource'
Vue.use(VResource)

//vnat
import vant from 'vant/lib/vant'
import 'vant/lib/index.css'
Vue.use(vant)
// 使用vue-awesome-swiper轮播组件  https://github.com/surmon-china/vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.min.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
