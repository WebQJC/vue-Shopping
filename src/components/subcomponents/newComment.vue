 <template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr/>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item, i) in comments" :key="i">
                <div class="cmt-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time }}
                </div>
                <div class="cmt-body">
                   {{ item.content === 'undefined' ? '此用户很懒，嘛都没说···': item.content }}
                </div>
            </div> 
        </div>
        <mt-button type="primary" size="large" plain @click="getMore">加载更多···</mt-button>
    </div>
</template>

<script>
import { Toast } from "mint-ui"
export default {
    data () {
        return {
            list: [],
            comments: [],
            pageIndex: 0,
            commentList: [],
            commentListChunk: [],
            msg: "",
        }
    },
    created() {
        this.cmt();
    },
    
    mounted() {
        this.getComments();
        //this.getComments();
    },
    methods: {
        cmt() {
            var _ = require('lodash');
            for(let i=0; i<30; i++) {
                let num = Math.floor(Math.random()*2+1);
                let contents = "" 
                if(num === 1) {  
                    contents = "我啦评论一下哈" +(i+1)
                }else{
                    contents = "undefined"
                }
                let cmt = {
                    user_name: "匿名用户"+this.id,
                    add_time: "2019-04-19 20:30",
                    content: contents
                }
                this.commentList.push(cmt)
                
            } 
            this.getCommentListChunk()
        },
        getCommentListChunk() {
            this.commentListChunk =  _.chunk(this.commentList, 10);
            //console.log(this.commentListChunk)
            //this.getComments();
        },
        getComments() {
            this.commentListChunk[this.pageIndex].forEach(item =>{
                  this.comments.push(item)
              })
            //    console.log(this.comments)
              //   console.log(this.commentListChunk.length)
        },
        getMore() {
      // 加载更多
            if(this.pageIndex >= this.commentListChunk.length-1) return;
                this.pageIndex++;
                this.getComments(); //先执行后pageIndex++  
              //  console.log(this.pageIndex)    
        },
        postComment() {
            if(this.msg.trim().length === 0) { //trim() 函数用于去除字符串两端的空白字符。
                return Toast("评论内容不能为空！")
            }
            var postMsg = { user_name: "匿名用户"+this.$route.params.id ,add_time: "2019-04-19 20:30",content: this.msg }
            this.commentList.unshift(postMsg)
            this.msg = ""
            //this.cmt()
            this.getCommentListChunk()
            this.getComments()
            console.log(this.commentListChunk)
            // if(this.msg.trim().length === 0) { //trim() 函数用于去除字符串两端的空白字符。
            //     return Toast("评论内容不能为空！")
            // }
            // let postMsg = {  user_name: "匿名用户" ,add_time: "2019-04-19 20:30", content: this.msg }
            // this.list.push(postMsg)
            // var car = { id: 2, name: 'xxxx' }
            // this.list.push(car)
            //this.msg = ""
            // 发表评论
            // 参数1： 请求的URL地址
            // 参数2： 提交给服务器的数据对象 { content: this.msg }
            // 参数3： 定义提交时候，表单中数据的格式  { emulateJSON:true }
            // this.$http
            //   .post("api/postcomment/" + this.$route.params.id, {
            //     content: this.msg.trim()
            //   })
            //   .then(function(result) {
            //     if (result.body.status === 0) {
            //       // 1. 拼接出一个评论对象
            //       var cmt = {
            //         user_name: "匿名用户",
            //         add_time: Date.now(),
            //         content: this.msg.trim()
            //       };
            //       this.comments.unshift(cmt);
            //       this.msg = "";
            //     }
            //   });

        }
    },
    props: ["id"]
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 16px;
    };
    margin-top: 10px; 
    textarea{
        margin-top: -5px;
        height: 100px;
        padding-top: 20px;
        font-size: 15px;
        margin-bottom: 0px
    }
    .cmt-list{
        .cmt-item{
            .cmt-title{
                margin-top: 5px;
                font-size: 13px;
                background-color: #ccc;
                line-height: 30px
            };
            .cmt-body{
                line-height: 35px;
                font-size: 15px;
            };
        }
    }
}
</style>