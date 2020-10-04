import request from '../utils/request'

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url,params){
    const config = {
      method: 'get',
      url:url
    }
    if(params) config.params = params
    return request(config)
  },
  post(url,params){
    console.log(url)
    const config = {
      method: 'post',
      url:url
    }
    if(params) config.data = params
    return request(config)
  },
}

//导出
export default http
