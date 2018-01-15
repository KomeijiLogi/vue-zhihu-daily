// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from 'mint-ui'   //mint-ui
import 'mint-ui/lib/style.css'
import store from '@/vuex/store.js'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(mintui)
Vue.prototype.$axios=axios;

//对需要权限的页面验证权限并重定向
router.beforeEach((to, from, next) => {
    if(to.meta.requireAuth){
       //需要权限
       if(store.state.loginFlag){
          //已经登录
          next();
       }else {
          //重定向到登录页
          next({
            path:'/login',
            query:{redirect:to.fullPath}
          });

       }
    }else {
       //不需要权限
       next();
    }

})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
