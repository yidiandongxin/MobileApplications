<template>
  <div class="">
    <van-tabbar v-model="active" class="active_tab">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="switchToTab(index,item.name)" :to="(item.name)">
        <span :class="currIndex == index ? active:''">{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.active : item.normal">
        </template>
      </van-tabbar-item>
    </van-tabbar>
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: "Tabbars",
        data(){
          return {
            active: 0,
            currIndex : 0,
            tabbars: [
              {
                name: "HomePage",
                title: "诊疗服务",
                normal: require("../assets/image/home.png"),
                active: require("../assets/image/home_active.png")
              },
              {
                name: "PersonalCenter",
                title: "个人中心",
                normal: require("../assets/image/grzx.png"),
                active: require("../assets/image/grzx_active.png")
              }
          ]
          }
        },
        methods : {
          switchToTab(index, val) {
            this.currIndex = index;
            this.$router.push({ path : val });
          }
        },
        created() {
          if (this.$route.name == "HomePage") {
              this.active = 0;
          } else if (this.$route.name == "PersonalCenter") {
              this.active = 1;
          }
        }
    }
</script>

<style scoped>

</style>
