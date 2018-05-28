import Vue from 'vue'
import Router from 'vue-router'
import login from '@/module/login.vue'
import main from '@/module/main.vue'
import bb from '@/module/bb.vue'
import communication1 from '@/module/assembly/communication1.vue'
import children1 from '@/module/assembly/children1.vue'
import communication2 from '@/module/assembly/communication2.vue'
import communication3 from '@/module/assembly/communication3.vue'
import communication4 from '@/module/assembly/communication4.vue'


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
    redirect:'/bb',
    meta: {
      requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
    },
    children:[
      {
        path: '/bb',
        name: '选项1',
        component: bb,
        meta: {
          title: '选项1',
          requireAuth: true,
        }
      },
      {
        path: '/communication1',
        name: '通过props传递数据',
        component: communication1,
        meta: {
          requireAuth: true,
          title: '通过props传递数据'
        }
      },
      {
        path: '/children1',
        name: '通过props传递数据1',
        component: children1,
        meta: {
          requireAuth: true,
          title: '通过props传递数据1'
        }
      },
      {
        path: '/communication2',
        name: '通过$on传递父组件方法',
        component: communication2,
        meta: {
          requireAuth: true,
          title: '通过$on传递父组件方法'
        }
      },
      {
        path: '/communication3',
        name: '通过refs获取',
        component: communication3,
        meta: {
          requireAuth: true,
          title: '通过refs获取'
        }
      },
      {
        path: '/communication4',
        name: '导航二',
        component: communication4,
        meta: {
          requireAuth: true,
          title: '导航二'
        }
      },
    ]
  },

];
export default new Router({
  routes: router
})

