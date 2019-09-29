<template>
  <div id="ListAside">
    <el-container>
      <el-aside>
        <img src="@/assets/blog_logo_3.png" />
        <NavUnit :navList="navList"></NavUnit>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import NavUnit from '@/components/blog/nav/NavUnit'

export default {
  name: 'ListAside',

  components: {
    NavUnit
  },

  data () {
    return {
      routes: this.$router.options.routes,
      navList: []
    }
  },

  created () {
    this.generateNavList(this.routes, this.navList)
    console.log(this.navList);
    console.log(this.$route)
  },

  methods: {
    generateNavList (routes, targetArr) {
      routes.forEach((route, index) => {
        const nav = route.meta.nav;
        // 如果不存在在侧边栏定义，则跳过
        if (!nav) {
          return;
        }
        if (nav.length) {
          nav.forEach((navItem, navItemIndex) => {
            if (route.children && route.children.length) {
              const children = [];
              this.generateNavList(route.children, children)
              targetArr.push({
                nav: navItem,
                route,
                children
              })
            } else {
              targetArr.push({
                nav: navItem,
                route
              })
            }
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.el-aside {
  position: absolute;
  height: 100%;
  background-color: #f8f8f8;
  color: #333;
  padding-inline-start: 0 !important;
}
.el-aside img {
  width: 120px;
  margin-left:90px;
}

</style>
