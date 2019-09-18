import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'

Vue.use(Router)

export default new Router({
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
    {
      path: '/detail',
      name: 'detaillink',
      component: Detail
    },
  ]
})
