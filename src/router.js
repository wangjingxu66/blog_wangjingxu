import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import List from './views/List.vue'


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'loginlink',
      component: Login
    },
    {
      path: '/list',
      name: 'listlink',
      component: List
    },
    
  ]
} )//as import('vue-router').RouterOptions
router.beforeEach((to,from,next) => {
  console.log(from.path)
  console.log(to.path)
  next()
})
export default router
