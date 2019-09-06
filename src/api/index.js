/*
包含n个接口请求函数的模块
函数的返回值：promise对象
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情(注意：所有的接口型函数都以req开头;箭头函数的左边括号里写的是参数)
//ajax(url,data={},type='GET')中的第二个参数data是query参数,是封装在？后面的;
// 而下面geohash是params参数，写在路径里面的，而且是动态的
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 2、获取食品分类列表(以下的各条为'',第一条为``)
export const reqFoodTypes = () => ajax('/index_category')
// 3、根据经纬度获取商铺列表(如果只想传一个参数，但是有两个数据，箭头函数的左边用{}包裹，即{longitude,latitude})
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash,keyword) => ajax('/search_shops',{geohash,keyword})
// 5、获取一次性验证码
export const reqCaptcha = () => ajax('/captcha')
// 6、用户名密码登陆
export const reqPwdLogin = (name,pwd,captcha) => ajax('/login_pwd',{name, pwd, captcha},'POST')
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/sendcode',{phone})
// 8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax('/login_sms',{phone, code},'POST')
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/userinfo')
// 10、用户登出
export const reqLogout = () => ajax('/logout')

//因为是多个接口，所以要不能用export default(如下，但是上面写成箭头函数的形式)
/*
export function reqAddress() {

}
*/
