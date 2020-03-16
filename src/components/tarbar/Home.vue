<template>
    <div>
        <!-- 轮播图 -->
        <!-- <swiper></swiper> -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
        <!-- 六空格 -->
       
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newslist">
                            <img src="../../images/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/photolist">
		                    <img src="../../images/menu2.png">
		                    <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/goodslist">
		                    <img src="../../images/menu3.png"/>
		                    <div class="mui-media-body">商品购物</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu4.png"/>
		                <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu5.png"/>
		                <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                <img src="../../images/menu6.png"/>
		                <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
    </div>
</template>
<script>
 import swiper from '../subcomponents/swiper.vue'
 import Home from '../../json/home/home.json'
export default {
    data() {
        return{
            lunbotuList: Home.message
        }
    },
    created() {  
        this.getLunbotu()
        
    },
    beforeMount(){
       //console.log(this.lunbotuList)
    },
    methods:{
        getLunbotu() {
            this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20').then(result1 => {
                 console.log(result1.body)
              
                   // this.lunbotu = result1.body.result;  
            })
        }
     },
     components: {
         swiper
     }
}
</script>
<style scoped lang="less">
    
.mui-table-view.mui-grid-view {
    .mui-table-view-cell {
        width: 33.33333%;
        background-color: #FFFEFF;
        img {
            width: 60px;
            height: 60px;
        };
        .mui-media-body {
            font-size: 10px;
        }
    } 
}

</style>