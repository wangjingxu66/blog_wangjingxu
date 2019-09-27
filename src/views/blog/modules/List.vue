<template>
  <div class="List">
    <ListHeader/>
    <ListAside/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListHeader from '@/components/list_page/ListHeader.vue'
import ListAside from '@/components/list_page/ListAside.vue'

export default {
  name: 'List',
  components: {
    ListHeader,
    ListAside,
  }
}
</script>
