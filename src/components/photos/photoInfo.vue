<template>
    <div class="photoinfo-container">
        <h3>{{ photoinfo.title }}</h3>
        <p class="subtitle">
          <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
          <span>点击：{{ photoinfo.click }}次</span>
        </p>
        <hr>
        
        <!-- <vue-preview :slides="slide1" @close="handleClose"></vue-preview> -->
        
        <!-- 缩略图区域 -->
        <div class="thumbs">
          <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
          <!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" 
              height="100" @click="$preview.open(index, list)" :key="item.src"> -->
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>
    

        <!-- 放置一个现成的 评论子组件 -->
        <cmt-box :id="this.id"></cmt-box>
    </div>
</template>
<script>
// 1. 导入评论子组件
import comment from "../subcomponents/newComment.vue";

import PhotoInfoImg from "../../json/photos/photoInfoImg.json"
export default {
    data() {
        return{
            slide1: [
              {
                src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                alt: 'picture1',
                title: 'Image Caption 1',
                w: 600,
                h: 400
              },
              {
                src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                alt: 'picture2',
                title: 'Image Caption 2',
                w: 1200,
                h: 900
              }
            ],
            id: this.$route.params.id,
            photoinfo: [],
            list: []
        }
    },
    created () {
        this.getPhotoInfo()
        //this.getPhotoInfoImg()
        console.log(this.list)
    },
    beforeMount() {

    },
    mounted () {
       // console.log(this.photoinfo)
    },
    methods: {
        handleClose () {
            console.log('close event')
        },
        // getPhotoInfoImg(){

        //     PhotoInfoImg.images[this.$route.params.id-1].forEach(item =>{
        //         item.w = 600;
        //         item.h = 400;
        //     })
        //     this.list = PhotoInfoImg.images[this.$route.params.id-1]
        // },
        getPhotoInfo () {
          let photoinfos = [];
          for(let i = 0; i<40; i++) {
            let photoinfoList = {
                "id": i+1,
                "title": "有气质且带可爱的美女中途"+(i+1),
                "click": i+"0",
                "add_time": "2019-11-14 04:15:11",
                "content": "有气质的女孩就是好呀呀呀呀呀呀呀呀哎呀呀啊呀呀呀呀呀呀呀呀呀呀呀晕晕晕晕晕晕晕晕晕晕！"+(i+1)+","+(i+1)+","+(i+1)+","+(i+1)
            }
            photoinfos.push(photoinfoList)
          } 
         // console.log(photoinfos)
          this.photoinfo = photoinfos[this.$route.params.id-1]
          //console.log(this.$route.params.id-1)
        }
    },
    components: {
    // 注册 评论子组件
        "cmt-box": comment
    },
    
}
</script>
<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs{
    .my-gallery{
      figure{
        a{
          color: red;
          img{
            margin: 10px;
            box-shadow: 0 0 8px #999;
            width: 26.33333%;
            //height: 100%;
            //width: 50px;
          }
        }
        
      }
    }
    img{
      margin: 10px;
      box-shadow: 0 0 8px #999;
      //  width: 26.33333%;
      //  height: 100%;
       width: 50px;
    }
  }
}

</style>

