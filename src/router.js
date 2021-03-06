import VueRouter from 'vue-router'

import Home from './components/tarbar/Home.vue'
import Member from './components/tarbar/Member.vue'
import Search from './components/tarbar/Search.vue'
import Shopcar from './components/tarbar/Shopcar.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/photoInfo.vue'

import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'

var router = new VueRouter({
  routes:[
   { path: '/', redirect: '/home'},
   { path: '/home', component: Home },
   { path: '/member', component: Member },
   { path: '/shopcar', component: Shopcar },
   { path: '/search', component: Search },
   { path: '/home/newslist', component: NewsList },
   { path: '/home/newsinfo/:id', component: NewsInfo },
   { path: '/home/photolist', component: PhotoList },
   { path: '/home/photoinfo/:id', component: PhotoInfo },
   { path: '/home/goodslist', component: GoodsList },
   { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
   { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc'},
   { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment'}
  ],
  linkActiveClass: 'mui-active'
})


export default router