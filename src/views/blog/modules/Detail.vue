<template>
  <div class="Detail">
    <Header/>
    <Nav/>
    <Detail/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/blog/Header.vue'
import Nav from '@/components/blog/nav/'
import Detail from '@/components/blog/Detail.vue'

export default {
  name: 'Detail',
  components: {
    Header,
    Nav,
    Detail
  }
}
</script>
