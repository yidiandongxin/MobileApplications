<template>
  <div class="content">
      <div class="Top-swiper">
        <van-swipe class="my-swipe" :autoplay="5000" indicator-color="red"  style="height: 150px;" :show-indicators="false">
          <van-swipe-item v-for="(item, index) in bannerImageList">
            <van-image :src="item" style="border-radius: 10px"></van-image>
          </van-swipe-item>
        </van-swipe>
      </div>

    <van-button type="primary" @click="getLoad()">获取数据</van-button>
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
  .Top-swiper {
    width: 100%;
    height: 200px;
    box-sizing: border-box;
  }
</style>
