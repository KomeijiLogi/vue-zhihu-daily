// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from 'mint-ui'   //mint-ui
import 'mint-ui/lib/style.css'
import store from '@/vuex/store.js'
import axios from 'axios'
import util from '@/util/common'

Vue.config.productionTip = false
Vue.use(mintui)
Vue.prototype.$axios=axios;

let indexScrollTop=0;  //定义变量用来保存跳转前的scrolltop
let dom=document.getElementById('app');

//找到根元素
//let dom =null;
console.log(dom);


router.beforeEach((to, from, next) => {
    //对需要权限的页面验证权限并重定向
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
       //next();
      //对跳转后的地址判断，保存前一地址的scrolltop
      if(to.path=='/NewsDetail'){
          //dom=document.getElementById('app');
          dom=document.querySelector('.routerView');
          indexScrollTop=dom.scrollTop;
          //util.setLocal(indexScrollTop,'indexScrollTop',false);
          next();
      }else {
          next();
      }
    }
});


router.afterEach((to,from)=>{
   //跳转后页面如果是详情页的话，scrolltop为0，如果不是的话，取indexScrollTop,重新定位到跳转前的位置
   if(to.path=='/NewsDetail'){
       dom.scrollTop=0;
   }else {
     Vue.nextTick(()=>{
       //dom.scrollTop=util.getLocal('indexScrollTop');
       dom.scrollTop=indexScrollTop;
       //dom.scrollTop=0;
     });
   }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
