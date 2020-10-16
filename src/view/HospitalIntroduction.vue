<template>
  <div class="content">
    <div class="content-background">
      <van-image height="192" :src="Topbackground" />
    </div>
    <div class="content-head">
      <van-row>
        <van-col span="8"><van-image width="50" height="50" :src="TXImage" :round="true" style="background:#effff6;padding: 4px;"/></van-col>
        <van-col span="16">
          <div class="content-head-title">四川省社区医院</div>
          <div class="content-head-bage">
            <van-tag color="#FBB568" text-color="#FFEFDE">二级甲等</van-tag>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="content-Introduce">
      <div class="content-Introduce-title">医院简介</div>

      <p class="content-Introduce-XQ van-multi-ellipsis--l3" :style="this.falg === false? '-webkit-line-clamp: 5':'-webkit-line-clamp: inherit' ">
        追溯历史，四川省社区医院起源于由美国、英国、加拿大等国的基督教会1892年在成都创建的仁济、存仁医院；1914年，华西协合大学建立医科，将其作为教学医 院。1937年抗战爆发，中央大学、金陵大学、金陵女子文理学院、燕京大学、齐鲁大学内迁成都，与华西协合大学联合办学办医；是时，华西坝大师云集，名家 汇萃，盛况空前。
      </p>
      <div style="color: #d2d2d2;" @click="changeIntroduce">
        <van-icon name="arrow-up" v-if="falg" />
        <van-icon name="arrow-down" v-else/>
      </div>
    </div>
    <div class="content-tel">
      <div class="content-tel-title">联系方式</div>
      <div class="content-tel-XQ">
        <van-row>
          <van-col span="22"><a style="padding: 5px 0px;color: #666666" href="tel:10086">767567578-787876</a></van-col>
          <van-col span="2"><div><van-image width="20" height="20" :src="YYDH" /></div></van-col>
        </van-row>
      </div>
    </div>

    <div class="content-address">
      <div class="content-address-title">医院地址</div>
      <div class="content-address-XQ">
        <van-row>
          <van-col span="22"><div style="padding: 1px 0px;">成都市武侯区平安大道67号</div></van-col>
          <van-col span="2"><div><van-image width="20" height="20" :src="YYDZ" /></div></van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HospitalIntroduction",
    data(){
      return {
        falg : false,
        Topbackground : require('../assets/image/swiperImg/YYJS-background.png'),
        TXImage : require('../assets/image/swiperImg/TXImage.png'),
        YYDH : require('../assets/image/swiperImg/LXDH.png'),
        YYDZ : require('../assets/image/swiperImg/YYDZ.png')
      }
    },
    methods: {
      changeIntroduce(){
        if(this.falg === true){
          this.falg = false
        }else{
          this.falg = true
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    background: #F6F7F9;
    margin-bottom: 75px;
  }
  .content-head {
    background: #ffffff;
    margin:-75px 20px 20px 20px;
    position: relative;
    z-index: 1;
    padding:20px 10px;
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
  .content-Introduce-title, .content-tel-title, .content-address-title {
    font-weight: 700;
    text-align: left;
    padding: 10px 20px;
    color: #373D52;
  }
  .content-Introduce, .content-tel, .content-address {
    background: #ffffff;
    margin: 20px;
    border-radius: 8px;
  }
  .content-Introduce-XQ, .content-tel-XQ, .content-address-XQ {
    padding: 0px 20px 4px 20px;
    text-align: justify;
    margin: 0;
    font-size: 14px;
    color: #777B8F;
    line-height: 22px;
  }
  .van-multi-ellipsis--l3 {
    /*-webkit-line-clamp: 5;*/
  }
</style>
