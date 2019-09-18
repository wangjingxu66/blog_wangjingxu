<template>
  <div class="list">
    <List msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'

export default {
  name: 'listlink',
  components: {
    List
  }
}
</script>