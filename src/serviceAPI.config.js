const BASEURL = 'https://www.easy-mock.com/mock/5b48a796226e381d25bdc2ee/SmileVue/'
const LOCALURL = 'http://localhost:3000/'

const URL = {
  getShoppingMallInfo: BASEURL + 'index', // 商城首页所有信息
  getGoodsInfo: BASEURL + 'getGoodsInfo',
  registerUser: LOCALURL + 'user/register', // 用户注册接口
  login: LOCALURL + 'user/login' // 用户登录接口
}

module.exports = URL
