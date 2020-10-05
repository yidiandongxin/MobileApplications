<template>
  <div class="content">
    <div class="content-top">
      <div class="Top-swiper">
       <img class="content-top-background" src="../../src/assets/image/swiperImg/Background_Top.png">
      </div>
      <div class="content-swiper">
        <van-swipe class="my-swipe" :autoplay="5000" :show-indicators="true">
          <van-swipe-item v-for="(item, index) in bannerImageList" style="padding-top:0px">
            <van-image :src="item" style="border-radius: 10px;" class="banner-image"></van-image>
          </van-swipe-item>
        </van-swipe>
<!--        <div v-swiper:mySwiper="swiperOption">-->
<!--          <div class="swiper-wrapper">-->
<!--            <div class="swiper-slide" :key="banner" v-for="banner in bannerImageList">-->
<!--              <img :src="banner" style="width: 100%;height: 130px">-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="swiper-pagination"></div>-->
<!--        </div>-->
      </div>

      <div class="content-button">
        <van-grid :gutter="10" :column-num="3" :icon-size="48" :border="false">
          <van-grid-item v-for="(value, index) in buttonList" :key="index" :icon="value.Image" :text="value.Name" />
        </van-grid>
      </div>
    </div>
    <div class="OtherAppointments">
      1111111111111
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
              // swiperOption: {
              //   // slidesPerView: 1.20,
              //   // centeredSlides: true,
              //   // loop: true,
              //   // initialSlide: 0, //初始索引
              //   // touchRatio: 1, //触摸距离与slide滑动距离的比率。
              //   // spaceBetween: 0,
              //   loop: true,
              //   slidesPerView: 1.22,
              //   centeredSlides: true,
              //   spaceBetween: 0,
              //   autoplay : true,
              //   autoplay: {
              //     delay:5000,
              //     disableOnInteraction: false,
              //   },
              // },
              bannerImageList : [
                   require('../../src/assets/image/swiperImg/banner_one.png'),
                   require('../../src/assets/image/swiperImg/banner_two.png'),
              ],
              buttonList : [
                {
                  Image : require('../../src/assets/image/ButtonImage/EBYY.png'),
                  Name : '儿童保健预约'
                },
                {
                  Image : require('../../src/assets/image/ButtonImage/JMYY.png'),
                  Name : '计划免疫预约'
                },
                {
                  Image : require('../../src/assets/image/ButtonImage/JMYYCX.png'),
                  Name : '新闻公告'
                },
              ]
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
    /*height: 1000px;*/
  }

  .content-top {
    /*height: 29%;*/
    background: #ffffff;
  }

  .Top-swiper {
    width: 100%;
    /*height: 150px;*/
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

  .my-swipe >>> .van-image__img {
    width: 100%;
    height: 140px;
  }

  .OtherAppointments {
    background-color: #ffffff;
    margin-top: 20px;
  }

  .content-button {
    padding: 5px 5px 0px 5px;
  }

  .content-top-background {
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 150px;
  }

  .content-swiper {
    margin-top: -130px;
  }

  .van-grid >>> .van-grid-item__text {
    font-weight: 700;
  }

  .swiper-slide:not(.swiper-slide-active) {
    transition: 500ms;
    transform: scale(0.85);
  }
</style>
