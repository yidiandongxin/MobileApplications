<template>
  <div class="content">
    <div class="content-top">
      <div class="Top-swiper">
        <van-swipe class="my-swipe" :autoplay="5000" :show-indicators="true">
          <van-swipe-item v-for="(item, index) in bannerImageList" style="margin-top:50px">
            <van-image :src="item" style="border-radius: 10px" class="banner-image"></van-image>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>


<!--    <van-button type="primary" @click="getLoad()">获取数据</van-button>-->
  </div>
</template>

<script>
  import Tabbars from "./Tabbars";
  import api from  '../api/api';
  import { Dialog } from 'vant';
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
                Dialog.alert({
                  title: '标题',
                  message: res.data.students[0].name,
                  theme: 'round-button',
                }).then(() => {
                  // on close
                });
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
  .content {
    background-color: #FBF9F9;
    height: 1000px;
  }

  .content-top {
    height: 29%;
    background: #ffffff;
  }

  .Top-swiper {
    width: 100%;
    height: 150px;
    background: url("../../src/assets/image/swiperImg/Background_Top.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .banner-image {
    border-radius: 10px;
    padding: 0px 20px;
  }

  .my-swipe >>> .van-swipe__indicator--active{
    background: linear-gradient(to right,#8AC7FF,#5EB1FF);
    width: 15px!important;
    height: 5px!important;
    border-radius: 50px;
  }

  .my-swipe >>> .van-swipe__indicator {
    background-color: #d4d4d4;
  }

  .van-image__img {
    width: 100%;
    height: 150px;
  }
</style>
