<template>
    <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo[this.$route.params.id-1].title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo[this.$route.params.id-1].add_time }}</span>
      <span>点击：{{ newsinfo[this.$route.params.id-1].click }}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo[this.$route.params.id-1].content"></div>

    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import comment from '../subcomponents/newComment.vue'
export default {
    data () {
        return {
            id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
            newsinfo: []
        }
    },
    created() {
        //let newsinfos = [];
        for(let i=0; i<20; i++){
            let clicknum = Math.floor(Math.random()*20+1);
            let newsinfolist = {
                id: i+1,
                title: "买房还是炒股，2019年买房子好难的但无法拒绝，有"+(i+1)+"个理由",
                add_time: "2019-04-16T04:05:34.OOOZ",
                click: clicknum,
                content: `<span style="color: red; font-size: 20px">第`+(i+1)+`页</span>`+
                `哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈买房还是炒股，
                2019年买房子好难的但无法拒绝，有"+(i+1)+"个理由买房还是`
                +`<img src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.webp">`+`
                <div style="margin-top: 10px; text-indent: 2em;">什么玩意，炒股，2019年买房子好难的但无法拒绝，有"+(i+1)+"个理由买
                房还是炒股，2019年买房子好难的但无法拒绝，有"+(i+1)+"个理</div>`
                +`<img src="https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p34284.webp">`+
                `<div style="margin-top: 10px; text-indent: 2em;">由买房还是炒股，2019年买房子好难的但无法拒绝，有"+(i+1)
                +"个理由买房还是炒股，2019年买房子好难的但无法拒绝，有
                "+(i+1)+"个理由买房还是炒股，2019年买房子好难的但无法</div>`
                +`<img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2355021473.webp">`+
                `<div style="margin-top: 10px; text-indent: 2em;">拒绝，有"+(i+1)+"个理由买房还是炒股，2019年买房子好难
                的但无法拒绝，有"+(i+1)+"个理由`+(i+1)+(i+1)+(i+1)+
                (i+1)+(i+1)+(i+1)+(i+1)+(i+1)+(i+1)+(i+1)+(i+1)+`
                拒绝，有"+(i+1)+"个理由买房还是炒股，2019年买房子好难
                的但无法拒绝，有"+(i+1)+"个理由aaaaaaaaaaaaaaaaaaaa</div>`
            }
            this.newsinfo.push(newsinfolist)
        }
         
    },
    methods: {
        
        // getNewsInfo() {
        //   // 获取新闻详情
        //   this.$http.get("api/getnew/" + this.id).then(result => {
        //     if (result.body.status === 0) {
        //       this.newsinfo = result.body.message[0];
        //     } else {
        //       console.log("获取新闻失败！");
        //     }
        //   });
        // }
    },
    components: {
        "comment-box": comment
    }
}
</script>
<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    color: #a5a5a5;
    font-size: 13px;
    img {
      width: 100%;
      height: 150px;
    }
  }
}
</style>