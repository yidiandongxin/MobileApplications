import Vue from 'vue'
import Router from 'vue-router'
import Tabbars from "../view/Tabbars";
import HomePage from "../view/HomePage";
import PersonalCenter from "../view/PersonalCenter";
Vue.use(Router)

/*解决重复点击避免冗余导航到当前位置*/
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tabbars',
      component: () => import(/* webpackChunkName: "about" */ '../view/Tabbars.vue'),
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          meta: {
            title: '诊疗服务',
          },

          component: () => import(/* webpackChunkName: "about" */ '../view/HomePage.vue')
        },
        {
          path: 'PersonalCenter',
          name: 'PersonalCenter',
          meta: {
            title: '个人中心',
          },
          component: () => import(/* webpackChunkName: "about" */ '../view/PersonalCenter.vue')
        },
      ]
    },

    // {
    //   path: '/',
    //   name: 'Tabbars',
    //   component: Tabbars
    // },
    // {
    //   path: '/',
    //   name: 'HomePage',
    //   component: HomePage
    // },
    // {
    //   path: '/',
    //   name: 'PersonalCenter',
    //   component: PersonalCenter
    // },
    // {
    //   path:'/',
    //   redirect:'HomePage'
    // }
  ]
})
