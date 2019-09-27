<template>
  <div class="List">
    <Header/>
    <Nav/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/blog/Header.vue'
import Nav from '@/components/blog/nav/'

export default {
  name: 'List',
  components: {
    Header,
    Nav,
  }
}
</script>
