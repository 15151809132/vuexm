/*
ajax请求函数模块
返回值:promise对象(异步返回的数据是：response.data)
 */
import axios from './axios'
export default function ajax(url,data={},type='GET'){
  //resolve、reject皆为函数，则接收函数的函数是高阶函数
  return new Promise(function (resolve,reject){
    //用axios来执行异步ajax请求
    let promise;
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送 post 请求
      promise = axios.post(url, data)
    }
    //因为axios返回的promise就是response
    promise.then(function (response){
      //成功了调用resolve()
      resolve(response.data)
    }).catch(function (error){
      //失败了调用reject()
      reject(error)
    })
  })
}


/*
const response = await ajax();
const result = response.data;

//不想像上面一样分两步走先得到response，再得到response.data；
//而是要直接得到response.data，所以直接要new Promise
const resule = await ajax();
 */
