<template>
    <div class="shopcar-container">
        <!-- 商品列表项区域 -->
        <div class="goods-list">
            <div class="mui-card" v-for="(item, i) in shopcar" :key="item.id">
			    <div class="mui-card-content">
			    	<div class="mui-card-content-inner">
			    		<mt-switch 
                v-model="$store.getters.getGoodsSelected[item.id]"
                @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
              <img :src="item.thuab_path">
              <div class="info">
                <h3>{{ item.title }}</h3>
                <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>&ensp;
                <a href="#" @click.prevent="remove(item.id, i)">删除</a>
                <!-- item.id是用于删除store的，i是用于删除shopcar的循环的内容 -->
                </p>
              </div>
			    	</div>
			    </div>
            </div>
		</div>
        <!-- 结算区域 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner jiesuan">
					<div class="left">
            <p>总计（不含运费）</p>
            <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件， 
               总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span>
            </p>
          </div>
           <mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>

    <p>{{ $store.getters.getGoodsSelected }}</p>
    </div>
</template>
<script>
import numbox from "../subcomponents/shopcar_numbox.vue";
import ShopCar from "../../json/shopcar/shopcarList.json"
export default {
    data() {
        return{
            shopcarlist: ShopCar.message,
            shopcar: []
        }
    },
    created() {
        this.getShopCar()
        console.log(this.shopcar)
        
    },
    methods: {
        getShopCar() {
            // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
            let idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id));
            // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
            if (idArr.length <= 0) {
              return;
            }
           // console.log(idArr.join())
           // console.log(idArr.length)
            for(let i = 0; i<idArr.length; i++){
               this.shopcar.push(this.shopcarlist[idArr[i]-1])
            }    
        },
        remove(id, index){
          this.shopcar.splice(index, 1);
          this.$store.commit("removeFormCar", id)
        },
        selectedChanged(id, val) {
         // console.log(id+ "----"+val)
          this.$store.commit("updateGoodsSelected", { id, selected: val });
        }
    },
    components: {
        numbox
    }
}
</script>
<style lang="less" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h3 {
      font-size: 13px;
      margin-bottom: 10px 
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>