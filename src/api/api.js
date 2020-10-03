import http from "../utils/http";

/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// let resquest = '/testIp/request/'
let resquest = 'http://localhost:8080/MobileApplications/static/mock/index.json'

export default{
  getListAPI(params){
    return http.get(`${resquest}`,params)
  },
  postFormAPI(params){
    return http.post(`${resquest}`,params)
  }
}
