import axios from 'axios'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 1000000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['X-Auth-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // if (res.headers && (res.headers['content-type'] === 'application/x-msdownload'
    //     || res.headers['content-type'] === 'application/vnd.ms-excel' || res.headers['Content-type'] === 'application/ms-excel;charset=UTF-8')) {
    //     return res;
    // }
    if (!response.data.success) {
      if (response.data.redirectLocation) {
        window.location.href = response.data.redirectLocation
        return true
      }
      return Promise.reject(response)
    }
    return response.data.result || response.data.data
  }, (error) => {
    console.log('err' + error) // for debug
    Message({
      message: '网络出错',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
