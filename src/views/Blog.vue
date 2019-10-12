<template>
  <div id="Blog">
    <Header/>
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/blog/Header.vue'
import Nav from '@/components/blog/nav/'
import List from '@/components/blog/List.vue'
import Detail from '@/components/blog/Detail.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    Nav,
    List,
    Detail
  }
}
</script>
