import Vue from 'vue'
import Router from 'vue-router'
import login from '@/module/login.vue'
import main from '@/module/main.vue'
import bb from '@/module/bb.vue'
import communication1 from '@/module/assembly/communication1.vue'
import children1 from '@/module/assembly/children1.vue'
import communication2 from '@/module/assembly/communication2.vue'
import communication3 from '@/module/assembly/communication3.vue'


Vue.use(Router)
const router = [
  {
    path: '/',
    name: '登录',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/main',
    name: '主页',
    component: main,
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    children:[
      {
        path: '/bb',
        name: 'bb',
        component: bb,
        meta: {
          title: 'bb',
          requireAuth: true,
        }
      },
      {
        path: '/communication1',
        name: 'communication1',
        component: communication1,
        meta: {
          requireAuth: true,
          title: 'communication1'
        }
      },
      {
        path: '/children1',
        name: 'children1',
        component: children1,
        meta: {
          requireAuth: true,
          title: '通过props传递数据'
        }
      },
      {
        path: '/communication2',
        name: 'communication2',
        component: communication2,
        meta: {
          requireAuth: true,
          title: '通过$on传递父组件方法'
        }
      },
      {
        path: '/communication3',
        name: 'communication3',
        component: communication3,
        meta: {
          requireAuth: true,
          title: '通过refs获取'
        }
      },
    ]
  },

];
export default new Router({
  routes: router
})

