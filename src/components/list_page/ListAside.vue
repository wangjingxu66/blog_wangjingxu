<template>
  <div id="ListAside">
    <el-container>
      <el-aside>
        <img src="@/assets/blog_logo_3.png" />
        <div class="asideTitle">
          <i class="el-icon-document"></i>
          <h3>文章列表</h3>
        </div>
        <div class="posts-aside">
          <ul class="posts-title">
            <li
              v-for="post in posts"
              :key="post.id"
              :class="{selected: post === selectedPost}"
              v-on:click="selectedPost = post"
            >{{post.title}}</li>
          </ul>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'ListAside',
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '前端笔记'
        },
        {
          id: 2,
          title: '服务端笔记'
        }
      ],
      selectedPost: null
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
