<template>
    <div>
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
              <div>{{ item.txt }}</div>
              <img :src="item.img" alt="" :class="{'full': isfull}">
          </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props: ["lunbotuList", "isfull"]
}
</script>

<style lang="less" scoped>
.mint-swipe{
    position: relative;
    height: 135px;
    .mint-swipe-item > div {
        z-index: 1;
        position: absolute;
        top: 50%;
        left: 45%;
        font-size: 50px;
        color: red; 
    };
    .mint-swipe-item > img{
        // position: absolute;
        // top: -50px;
        // height: 100%;
         width: 100%;
    };
    // .mint-swipe-item:nth-of-type(1){
    //     background-color: red
    // };
    // .mint-swipe-item:nth-of-type(2){
    //     background-color: yellow
    // };
    // .mint-swipe-item:nth-of-type(3){
    //     background-color: pink
    // };
    .mint-swipe-item > .lubotu{
        text-align: center;
        line-height: 200px;
        font-size: 50px;
    }
}
.full {
  width: 100%;
}
</style>