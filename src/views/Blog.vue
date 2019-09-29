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

export default {
  name: 'Blog',
  components: {
    Header,
    Nav
  }
}
</script>
