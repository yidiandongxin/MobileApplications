<template>
  <div class="content">
      <div class="Top-swiper">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="red"  :show-indicators="false">
          <van-swipe-item v-for="(item, index) in bannerImageList">
            <van-image :src="item" style="border-radius: 10px"></van-image>
          </van-swipe-item>
        </van-swipe>
      </div>

    <van-button type="primary" @click="getLoad()">主要按钮</van-button>
  </div>
</template>

<script>
  import Tabbars from "./Tabbars";
  import api from  '../api/api'
    export default {
        name: "HomePage",
        data(){
            return {
              bannerImageList : [
                   require('../../src/assets/image/swiperImg/banner_one.png'),
                   require('../../src/assets/image/swiperImg/banner_two.png'),
                   require('../../src/assets/image/swiperImg/banner_one.png')
              ],
            }
        },
        methods : {
            getLoad(){
              api.postFormAPI().then(res => {
                console.log(res)
              }).catch(err => {
                console.log(err)
              })
            }
        },
        components : {
          Tabbars
        },

    }
</script>

<style scoped>
  .Top-swiper {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
  }
</style>
