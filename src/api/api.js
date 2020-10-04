import http from "../utils/http";

/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// let resquest = '/testIp/request/'
// let resquest = 'http://6b8a88f50d85.ngrok.io/dictDept'
// let resquest = 'http://localhost:8080/dictDept'
let resquest = 'http://localhost:8080/api/data'

export default{
  getListAPI(params){
    return http.get(`${resquest}`,params)
  },
  postFormAPI(params){
    return http.post(`${resquest}`,params)
  }
}
