import axios from 'axios'
import store from '@/store'

let service = axios.create({
  withCredentials: true   //加了这段就可以跨域了,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['Accept-Language'] = store.state.language


  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default service
