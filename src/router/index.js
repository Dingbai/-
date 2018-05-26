import Vue from 'vue'
import Router from 'vue-router'

// 路由懒加载
const HelloWorld = () => import('@/components/HelloWorld')
// const app = () => import('@/app')
const demo = () => import('@/view/demo/demo')

Vue.use(Router)
const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: app,
    // },
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/demo',
          name: 'demo',
          component: demo
        }
      ]
    }
  ]
})
export default router
