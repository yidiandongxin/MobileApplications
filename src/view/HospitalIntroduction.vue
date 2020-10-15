<template>
  <div class="content">
    <div class="content-background">
      <van-image height="192" :src="Topbackground" />
    </div>
    <div class="content-head">
      <van-row>
        <van-col span="8"><van-image width="50" height="50" :src="TXImage" :round="true" style="background:#effff6;padding: 4px;"/></van-col>
        <van-col span="16">
          <div class="content-head-title">测试医院</div>
          <div class="content-head-bage">
            <van-tag color="#FBB568" text-color="#FFEFDE">二级甲等</van-tag>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HospitalIntroduction",
        data(){
          return {
              Topbackground : require('../assets/image/swiperImg/YYJS-background.png'),
              TXImage : require('../assets/image/swiperImg/TXImage.png'),
          }
        }
    }
</script>

<style scoped>
  .content {
    background: #F6F7F9;
  }
  .content-head {
    background: #ffffff;
    margin:-50px 20px 20px 20px;
    position: relative;
    z-index: 1;
    padding: 20px;
    border-radius: 8px;
    /*padding-bottom: 20px;*/
  }
  .content-head-title {
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    color: #373D52;
    padding: 5px 0px;
  }
  .content-head-bage {
    text-align: left;
  }
</style>
