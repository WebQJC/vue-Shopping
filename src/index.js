import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//导入vue-resource
import VueResource from 'vue-resource' //引入get,post,json 的数据
//安装vue-resource
Vue.use(VueResource)
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)


// // 设置请求的根路径
// Vue.http.options.root = 'http://vue.studyit.io';
// // 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true;

  //导入路由模块
import router from './router.js'

import { Header, Swipe, SwipeItem, Button, Lazyload, Switch} from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch);
Vue.use(Lazyload);


import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
// Vue.filter('dataFormat', function(dataStr, pattern = "") {
//   var dt = new Date(dateStr)
//    //yyyy-mm-dd 
//    var y = dt.getFullYear() 
//    var m = dt.getMonth() + 1 
//    var d = dt.getDate() // return y + '-' + m + '-' + d 
//    if (pattern.toLowerCase() === 'yyyy-mm-dd') { 
//      return `${y}-${m}-${d}` 
//     } else {
//        var hh = dt.getHours() 
//        var mm = dt.getMinutes() 
//        var ss = dt.getSeconds() 
//        return `${y}-${m}-${d} ${hh}:${mm}:${ss}` 
//     }
// })

// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
let car = JSON.parse(localStorage.getItem('car') || '[]')
let store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state,goodsinfo) { //在GoodsInfo.vue传数据给vuex
      //购物车没有找到相应的商品
      var flag = false

      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) { //相当于 flag == false
        state.car.push(goodsinfo)
      }
      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {   //修改购买产品个数
      state.car.some(item => {
        if(item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFormCar(state, id) {  //删除列表
      state.car.some((item, i) => {
        if(item.id == id){
          state.car.splice(i, 1)
          return true;
        }
      })
      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {  //切换开关
      state.car.some(item => {
        if(item.id == info.id) {
          item.selected = info.selected
        }
      })
      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) { //App中的购物车的数量
      let c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state){
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item => {
        if(item.selected) {
          o.count +=item.count
          o.amount +=item.price * item.count
        }
      })
      return o
    }
  }
})

var vm = new Vue({
  el: '#app',
  data: {
    msg: '123'
  },
   render: c => c(app),
   router,
   store
})