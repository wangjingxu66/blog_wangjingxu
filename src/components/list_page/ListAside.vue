<template>
  <div id="ListAside">
    <el-container>
      <el-aside>
        <img src="@/assets/blog_logo_3.png" />
        <!-- <div class="asideTitle">
          <i class="el-icon-document"></i>
          <h3>文章列表</h3>
        </div>
        <div class="posts-aside">
          <ul class="posts-title">
            <li
              v-for="(item, index) in navList"
              :key="index"
              :class="{selected: item.route.name === curRouteName}"
              @click="selectedPost = post"
            >
              <div v-if="!item.children">{{ item.title }}</div>
              <ul></ul>
            </li>
          </ul>
        </div>-->

        <NavUnit :navList="navList"></NavUnit>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import NavUnit from './NavUnit'
export default {
  name: 'ListAside',

  components: {
    NavUnit
  },

  data () {
    return {
      routes: this.$router.options.routes,
      navList: [],
      curRouteName: this.$route.name,
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
  text-align: center;
}
.el-aside img {
  width: 120px;
}
.el-aside .asideTitle {
  margin-top: 75px;
  margin-bottom: 26px;
}
.el-aside .asideTitle i,
h3 {
  display: inline;
  font-size: 20px;
  line-height: 20px;
}
.el-aside .asideTitle i {
  margin-right: 20px;
}
.el-aside p {
  padding-left: 30px;
  padding-bottom: 16px;
}
</style>
