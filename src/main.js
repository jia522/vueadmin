// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import '../src/assets/iconfont/iconfont';
import store from './store/index'
import * as types from './store/types'
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;
const FastClick = require('fastclick')
FastClick.attach(document.body)
/* eslint-disable no-new */

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
console.log(window.localStorage.getItem('token'),3,store.state.mutations.token)
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.name) {
    document.title = to.name
  }
  if(to.meta.requireAuth){
    if(store.state.mutations.token){
      next();
    }else {
      next({
        path:'/',
        query:{redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
