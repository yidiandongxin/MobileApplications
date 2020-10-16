<template>
  <div class="content">
    <div class="content-head">
      <van-row gutter="0">
        <van-col span="8">
          <van-image width="65" height="65" :src="WXTX === ''? MRTX: WXTX " />
        </van-col>
        <van-col span="16">
          <div class="WxName">{{ WxName }}</div>
        </van-col>
      </van-row>
    </div>

    <div class="MainOperation">
      <van-cell title="新闻动态" :icon="XWDT" is-link :border="false"></van-cell>
      <van-cell title="满意度评价" :icon="MYDPJ" is-link :border="false"></van-cell>
    </div>

    <div class="OtherOperation">
      <van-cell title="意见反馈" :icon="YJFK" is-link :border="false"></van-cell>
      <van-cell title="联系我们" :icon="LXWM" is-link :border="false"></van-cell>
    </div>
  </div>

</template>

<script>
    export default {
        name: "PersonalCenter",
        data(){
          return {
            WXTX : '',
            WxName : '幸好时光与你同在',
            MRTX : require('../assets/image/MRTX.png'),
            XWDT : require('../assets/image/swiperImg/XWDT.png'),
            MYDPJ : require('../assets/image/swiperImg/MYDPJ.png'),
            YJFK : require('../assets/image/swiperImg/YJFK.png'),
            LXWM : require('../assets/image/swiperImg/LXWM.png'),
          }
        }
    }
</script>

<style scoped>
  .content {
    background: linear-gradient(to bottom,#37CD87,#F6F7F9);
    height: 200px;
    padding: 60px 20px 10px 20px;
  }
  .content-head {
    background: url("../../src/assets/image/grzxBackground.png") no-repeat;
    border-radius: 8px;
    padding:25px 10px;
    background-size: 100% 100%;
  }
  .WxName {
    text-align: left;
    padding: 15px 0px;
    font-size: 15px;
    font-weight: 700;
  }
  .MainOperation, .OtherOperation {
    padding: 5px;
    background: #ffffff;
    margin: 20px 0px;
    border-radius: 8px;
  }
  .van-cell__title {
    text-align: left;
    margin-left: 8px;
    font-size: 14px;
  }
</style>
