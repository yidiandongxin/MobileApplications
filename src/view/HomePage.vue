<template>
  <div class="content">
    <div class="content-top">
<!--      <div class="Top-swiper">-->
<!--       <img class="content-top-background" src="../../src/assets/image/swiperImg/Background_Top.png">-->
<!--      </div>-->
      <div class="content-swiper">
        <van-swipe class="my-swipe" :autoplay="10000" :show-indicators="true">
          <van-swipe-item v-for="(item, index) in bannerImageList" :key="index" style="padding-top:0px">
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
        <van-grid :gutter="10" :column-num="2" :icon-size="48" :border="false" direction="horizontal" >
          <van-grid-item v-for="(value, index) in buttonList" :key="index">
            <div class="content-button-Image">
              <van-image width="46" height="42" :src="value.Image" class="content-button-Img" />
            </div>
            <div class="content-button-title">
              {{ value.Name }}
              <div class="content-button-Tips">{{ value.Tips }}</div>
            </div>
          </van-grid-item>
        </van-grid>
      </div>

      <div class="content-ZQ">
        <van-row gutter="10">
          <van-col span="12">
<!--            <div class="cardOne">-->
<!--              <div class="cardOne-content">-->
<!--                <div class="cardOne-title">疫苗预约专区</div>-->
<!--                <div class="cardOne-tips">方便快捷</div>-->
<!--                <div class="cardOne-QueryB">-->
<!--                  <van-button color="linear-gradient(to right, #9DD28E, #5CC485)" round style="height: 30px">立即查看</van-button>-->
<!--                </div>-->
<!--                <van-image class="card-img" width="50" height="50" :src="require('../assets/image/ButtonImage/vaccinesHeadImg.png')" />-->
<!--              </div>-->
<!--            </div>-->
            <van-image :src="require('../assets/image/ButtonImage/YMYY.png')" />
          </van-col>
          <van-col span="12">
<!--            <div class="cardTwo">-->
<!--              <div class="cardOne-content">-->
<!--                &lt;!&ndash;              &ndash;&gt;-->
<!--                <div class="cardTwo-title">儿童保健查询</div>-->
<!--                <div class="cardTwo-tips">在线查询</div>-->
<!--                <div class="cardTwo-QueryB">-->
<!--                  <van-button color="linear-gradient(to right, #FBAA6A, #F58123)" round style="height: 30px">立即查看</van-button>-->
<!--                </div>-->
<!--                <van-image class="card-img" width="50" height="50" :src="require('../assets/image/ButtonImage/ChildHeadImg.png')" />-->
<!--              </div>-->
<!--            </div>-->
            <van-image :src="require('../assets/image/ButtonImage/ETBJCX.png')" />
          </van-col>
        </van-row>
      </div>

    </div>
<!--    <van-button type="primary" @click="getLoad()">获取数据</van-button>-->
    <div class="OtherAppointments">
      <div class="OtherAppointments-title">其他服务</div>
      <div class="OtherAppointments-content">
        <van-grid :column-num="3" :border="false">
          <van-grid-item v-for="(value,index) in otherButton" :key="index" :icon="value.Image" :text="value.name" />
        </van-grid>
      </div>
    </div>
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
                   require('../../src/assets/image/swiperImg/banner_T.png'),
                   require('../../src/assets/image/swiperImg/banner_O.png')
              ],
              buttonList : [
                {
                  Image : require('../assets/image/ButtonImage/ChildAppointment.png'),
                  Name : '儿保预约',
                  Tips : '实时关注儿保',
                  LX : 'EBYY'
                },
                {
                  Image : require('../assets/image/ButtonImage/ImAppointment.png'),
                  Name : '计免预约',
                  Tips : '快捷预约计免',
                  LX : 'JMYY'
                },
                {
                  Image : require('../assets/image/ButtonImage/CommunityExamination.png'),
                  Name : '社区体检',
                  Tips : '在线预约体检',
                  LX : 'SQTJ'
                },
                {
                  Image : require('../assets/image/ButtonImage/VaccinationManagement.png'),
                  Name : '接种证办理',
                  Tips : '网上实时预约',
                  LX : 'JZZBL'
                },
              ],
              otherButton : [
                {
                  Image : require('../assets/image/ButtonImage/JMYYCX.png'),
                  name : '计划免疫查询'
                },
                {
                  Image : require('../assets/image/ButtonImage/JZZCX.png'),
                  name : '接种证查询'
                },
                {
                  Image : require('../assets/image/ButtonImage/TJBGCX.png'),
                  name : '体检报告查询'
                },
                {
                  Image : require('../assets/image/ButtonImage/TJYYCX.png'),
                  name : '体检预约查询'
                }
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
    background-color: #F6F7F9;
    /*height: 1000px;*/
  }

  .content-top {
    /*height: 29%;*/
    background: #F6F7F9;
  }

  .van-grid >>> .van-grid-item__content {
    padding: 16px 0px;
  }

  .content-button-title {
    font-size: 14px;
    color: #373D52;
    font-weight: 700;
    margin: 5px 10px 10px 10px;
    text-align: left;
  }

  .content-button-Tips {
    font-size: 12px;
    color: #A2A6B8;
    font-weight: 300;
    padding-top: 3px;
  }

  .content-ZQ {
    margin: 20px;
  }

  .OtherAppointments-title {
    font-weight: 700;
    text-align: left;
    margin: 10px 20px;
  }

  .OtherAppointments-content {
    margin: 0px 20px 75px;
    padding: 5px;
    background: #ffffff;
    border-radius: 12px;
  }
  /*.cardOne {*/
  /*  background: linear-gradient(to right,#DAF3CE,#B7E7B8);*/
  /*  padding: 10px;*/
  /*  border-radius: 12px;*/
  /*}*/

  /*.cardTwo {*/
  /*  background: linear-gradient(to right,#F4E7D0,#FFCFA9);*/
  /*  padding: 10px;*/
  /*  border-radius: 12px;*/
  /*}*/

  /*.cardOne-title, .cardTwo-title {*/
  /*  color: #2AB46B;*/
  /*  font-size: 16px;*/
  /*  margin-bottom: 3px;*/
  /*}*/

  /*.cardTwo-title {*/
  /*  color: #FA8C36;*/
  /*}*/

  /*.cardOne-content {*/
  /*  text-align: right;*/
  /*  margin-bottom: 3px;*/
  /*  height: 80px;*/
  /*}*/

  /*.cardOne-tips, .cardTwo-tips {*/
  /*  color: #2AB46B;*/
  /*  font-size: 12px;*/
  /*  margin-bottom: 12px;*/
  /*}*/

  /*.cardTwo-tips {*/
  /*  color: #F58123;*/
  /*}*/

  /*.card-img {*/
  /*  position: relative;*/
  /*  left: -95px;*/
  /*  top: -60px;*/
  /*}*/
  /*.Top-swiper {*/
  /*  width: 100%;*/
  /*  !*height: 150px;*!*/
  /*  background: url("../../src/assets/image/swiperImg/Background_Top.png");*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: 100% 100%;*/
  /*}*/

  .banner-image {
    border-radius: 10px;
    padding: 0px;
  }

  .my-swipe >>> .van-swipe__indicator--active{
    background: linear-gradient(to right,#ffffff,#ffffff);
    width: 15px!important;
    height: 5px!important;
    border-radius: 50px;
  }

  .my-swipe >>> .van-swipe__indicator {
    background-color: #d4d4d4;
  }

  .my-swipe >>> .van-swipe__indicators {
    bottom: 50px;
    left: 10%;
  }

  .my-swipe >>> .van-image__img {
    width: 100%;
    height: 180px;
  }

  .OtherAppointments {
    /*background-color: #ffffff;*/
    margin-top: 20px;
    padding-bottom: 10px;
  }

  .content-button {
    padding: 10px;
    background: #ffffff;
    border-radius: 8px;
    margin: -40px 20px 0px 20px;
    position: relative;
  }

  /*.content-top-background {*/
  /*  width: 100%;*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: 100% 100%;*/
  /*  height: 150px;*/
  /*}*/

  .content-swiper {
    margin-top: 0px;
  }

  .van-grid >>> .van-grid-item__text {
    font-weight: 700;
  }

  .swiper-slide:not(.swiper-slide-active) {
    transition: 500ms;
    transform: scale(0.85);
  }
</style>
