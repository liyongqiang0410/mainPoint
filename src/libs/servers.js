import axios from 'axios'
import { Message } from 'element-ui'


// import Cookies from 'js-cookie'

// create an axios instance
const service = axios.create({
  baseURL: '/api', // api 的 base_url
  timeout: 60000, // request timeout
  // headers: [],
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    // if (store.getters.token) {
    // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   * 接口返回的数据为105统一处理
   */
  response => {
    const res = response.data
    if (res.state === 105) {
      // 清除存的数据
      // Cookies.remove('userName')
      // Cookies.remove('setOperatorName')
      // Cookies.remove('menu')
      location.reload()
    }
    return response
  },
  error => {
    console.log('err' + error) // for debug
    if (error.response.status === 404) {
      Message({
        message: '请求地址出错',
        type: 'warning'
      })
    } else {
      Message({
        message: error.message,
        type: 'warning',
        duration: 3 * 1000
      })
    }
    return Promise.reject(error)
  }
)
export default service
