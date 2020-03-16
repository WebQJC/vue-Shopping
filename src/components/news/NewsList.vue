<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
					<router-link :to="'/home/newsinfo/'+ item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<p class="media-body-title">{{ item.title }}</p>
							<span class="media-body-time">发表时间：{{ item.add_time }}</span>
                            <span class="media-body-click">点击：{{ item.click }}次</span>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
       
        for(let i=0; i<20; i++){
            let clicknum = Math.floor(Math.random()*20+1);
            let newslist = {
                id: i+1,
                title: "买房还是炒股，2019年买房子好难的但无法拒绝，有"+(i+1)+"个理由",
                add_time: "2019-04-16T04:05:34.OOOZ",
                click: clicknum,
                img_url: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.webp"
            }
            this.newsList.push(newslist)
        }
      //console.log(this.newsList)  
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    .mui-table-view-cell{
        
        a{
            img{
                width: 100%;
            }
        }
        .mui-media-body{
            .media-body-title{
                font-size: 15px;
                color: #101010;
            };
            .media-body-time{
                font-size: 12px;
                color: #45AFFF
            };
            .media-body-click{
                position: absolute;
                right: 13px;
                font-size: 12px;
                color: #45AFFF
            }
        }
    }
}
</style>