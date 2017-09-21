// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
import { Upload } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import store from '@/store/index'
import Axios from '@/plugin/axios'
import fun from '@/plugin/main'
import Moment from 'moment'


Vue.component(Upload.name, Upload)

Vue.prototype.$http = Axios

Vue.prototype.$fun = fun

Vue.prototype.$moment = Moment


// Vue.filter('currency', function(value) {
//   if (!value) { return ''}
//   value = value.toString()
//   return value.substr(0, value.indexOf('.')+3)
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
