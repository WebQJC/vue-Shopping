<template>
	<div class="mui-content">
			<!-- 顶部滑动条区域 -->
		<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id == 'n1' ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)" href="#item1mobile" data-wid="tab-top-subpage-1.html" >
							{{ item.title }}
						</a>
					</div>
				</div>

			</div>
		<ul>
  			<router-link v-for="item in list" :key="item.id" tag="li" :to="'/home/photoinfo/'+ item.id">
    			<img v-lazy="item.img_url">
				<div class="info">
        		  <h1 class="info-title">{{ item.title }}</h1>
        		  <div class="info-body">{{ item.zhaiyao }}</div>
        		</div>
  			</router-link>
		</ul>
	</div>
</template>
<script>
// 1. 导入 mui 的js文件
import mui from "../../lib/mui/js/mui.min.js";
import photoList from '../../json/photos/photoList.json'
import photoImg from '../../json/photos/photoImg.json'
export default {
	data () {
		return{
			cates: photoList.message,
			//img: photoImg
			list: []
		}
	},
	mounted () {
		this.getPhotoListByCateId("n1")
		//console.log(this.list)
		mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
	},
	methods: {
		getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
			switch(cateId){
  				case "n1":
  				    this.list = photoImg.n1;
  				    break;
  				case "n2":
  				    this.list = photoImg.n2;
					  break;
				case "n3":
  				    this.list = photoImg.n3;
  				    break;
  				case "n4":
  				    this.list = photoImg.n4;
					  break;
				case "n5":
  				    this.list = photoImg.n5;
  				    break;
  				case "n6":
  				    this.list = photoImg.n6;
					  break;
				case "n7":
  				    this.list = photoImg.n7;
  				    break;
  				case "n8":
  				    this.list = photoImg.n8;
					break;
				case "n9":
  				    this.list = photoImg.n9;
  				    break;
  				default:
  				    statement;
			}
    	}
	}
}
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.mui-content{
	ul{
		padding: 10px;
		margin: 0;
		list-style: none;

		li{
			background-color: #ccc;
			box-shadow: 0 0 9px #999;
			margin-bottom: 10px;
			position: relative;
			img[lazy=loading] {
			  width: 40px;
			  height: 300px;
			  margin: auto;
			};
			img{
				width: 100%;
				//border: 1px solid red;
				display: block
			}
		}
		.info {
    	  	color: white;
    	  	text-align: left;
    	  	position: absolute;
    	  	bottom: 0;
    	  	background-color: rgba(0, 0, 0, 0.4);
    	  	max-height: 84px;
    	  	.info-title {
    	  	  	font-size: 14px;
    	  	}
    	  	.info-body {
    	    	font-size: 13px;
    	  	}
    	}
	}
}

</style>