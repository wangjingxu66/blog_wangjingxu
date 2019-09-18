<template>
  <div class="detail">
    <Detail msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Detail from '@/components/Detail.vue'

export default {
  name: 'detaillink',
  components: {
    Detail
  }
}
</script>