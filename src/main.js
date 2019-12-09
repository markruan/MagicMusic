// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './vuex/store'
import '../static/css/reset.scss'
import '../static/css/plugin.scss'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Icon } from 'vant';

Vue.use(Icon);

Vue.use(Vant);

Vue.config.productionTip = false

fastclick.attach(document.body)

import { Toast, Loading } from '@/common/js/plugin';
Vue.use(Toast);
Vue.use(Loading);

//懒加载的默认图片 
import def_lazy_img from '../static/img/loading.gif'
//使用懒加载组件
Vue.use(VueLazyLoad,{
  loading: def_lazy_img
})



router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
  	
    if (localStorage.getItem('userinfo')) {  // 判断当前用户的登录信息loginInfo是否存在
      next();
    } else {

      next({
        path: '/login'
      })
    }
  }else {
    next();
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
