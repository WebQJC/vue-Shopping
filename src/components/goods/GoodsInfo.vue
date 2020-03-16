<template>
    <div class="goodsinfo-container">
		<transition
		  @before-enter="beforeEnter"
      	  @enter="enter"
          @after-enter="afterEnter">
			<div class="ball" v-show="ballFlag" ref="ball"></div>
		</transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
				</div>
			</div>
		</div>
    <!-- 商品购买区域 -->
        <div class="mui-card">
			<div class="mui-card-header">页眉</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>
					 市场价：<del>￥250</del>&nbsp;&nbsp;
					 销售价：<span class="now_price">￥<span ref="sell_price">222</span ></span>
					</p>
					<p> 购买数量：<numbox @getcount="getSelectedCount" :max="goodsInfoMax"></numbox></p>
					<p>
						<mt-button type="primary">立即购买</mt-button>
						<mt-button type="danger" @click="addToShopCar">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>
    <!-- 商品参数区域 -->
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：aaaa</p>
          			<p>库存情况：<span id="kucun" ref="kucun">30</span>件</p>
          			<p>上架时间：dddd-dd-dd 11:11:11</p>
				</div>
			</div>
			<div class="mui-card-footer">
        		<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        		<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
  			</div>
		</div>
    </div>
</template>

<script>
import GoodsInfo from '../../json/goods/goodsInfo.json'
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
    data(){
		return{
			id: this.$route.params.id,
			lunbotuList: [],
			ballFlag: false,
			selectedCount: 1,  //// 保存用户选中的商品数量， 默认，认为用户买1个 
			goodsInfoMax: 0,
			sell_price: 0

		}
	},
	created() {
		this.getLunbotu()
		
		//console.log(this.lunbotuList)
	},
	mounted() {
		this.goodsInfoMax = parseInt(this.$refs.kucun.innerHTML)
		this.sell_price = this.$refs.sell_price.innerHTML
		console.log(this.sell_price)
	},
	methods: {
		getLunbotu(){
			GoodsInfo.message[this.$route.params.id-1].forEach(item => {
				item.img = item.src;
			});
			this.lunbotuList = GoodsInfo.message[this.$route.params.id-1]
		},

		goDesc(id){
			this.$router.push({name: "goodsdesc", params: { id }})
		},
		goComment(id){
			this.$router.push({ name: "goodscomment", params: { id }})
		},
		addToShopCar(){
			this.ballFlag = !this.ballFlag;
			let goodsinfo = {
				id: this.id,
				count: this.selectedCount,
				price: this.sell_price,
				selected: true
			};
			this.$store.commit("addToCar", goodsinfo);
		},
		beforeEnter(el) {
    	  el.style.transform = "translate(0, 0)";
    	},
    	enter(el, done) {
		  el.offsetWidth;
		  
		  // 获取小球的 在页面中的位置
		  const ballPosition = this.$refs.ball.getBoundingClientRect();
		  // 获取 徽标 在页面中的位置
		  const badgePosition = document.getElementById("badge").getBoundingClientRect(); //badge不在这个组件内的调用
		  const xDist = badgePosition.left - ballPosition.left;
		  const yDist = badgePosition.top - ballPosition.top;
    	  el.style.transform = `translate(${xDist}px, ${yDist}px)`;
    	  el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
    	  done();
    	},
    	afterEnter(el) {
    	  this.ballFlag = !this.ballFlag;
		},
		getSelectedCount(count) {
      		// 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
      		this.selectedCount = count;
     		 console.log("父组件拿到的数量值为： " + this.selectedCount);
    	}
	},
	components:{
		swiper,
		numbox
	}
}
</script>

<style lang="less" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;

  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }

  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 325px;
    left: 146px;
  }
}
</style>