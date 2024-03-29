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
      component: Login,
      meta: {
        title: '登录页',
      }
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog,
      redirect: '/blog/list',
      meta: {
        title: '列表入口',
        nav: [
          { name: '文章列表', level: 0 }
        ]
      },
      children: [
        {
          path: 'list',
          name: 'BlogList',
          component: BlogList,
          meta: {
            title: '博客列表',
            nav: [
              { name: '前端博客', type: 'frontend_blog', level: 1 },
              { name: '服务端博客', type: 'server_blog', level: 1 },
            ]
          }
        },
        {
          path: 'detail',
          name: 'BlogDetail',
          component: BlogDetail,
          meta: {
            title: '详情',
          }
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
