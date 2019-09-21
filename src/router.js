import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Blog from './views/blog'
import BlogList from './views/blog/modules/List'
import BlogDetail from './views/blog/modules/Detail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      redirect: '/blog/list',
      children: [
        {
          path: 'list',
          name: 'BlogList',
          component: BlogList
        },
        {
          path: 'detail',
          name: 'BlogDetail',
          component: BlogDetail
        }
      ]
    }
  ]
})//as import('vue-router').RouterOptions
router.beforeEach((to, from, next) => {
  console.log(from.path)
  console.log(to.path)
  next()
})
export default router
