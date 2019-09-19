<template>
  <div class="login">
    <ListHeader/>
    <ListAside/>
    <ListMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListHeader from '@/components/list_page/ListHeader.vue'
import ListAside from '@/components/list_page/ListAside.vue'
import ListMain from '@/components/list_page/ListMain.vue'

export default {
  name: 'listlink',
  components: {
    ListHeader,
    ListAside,
    ListMain
  }
}
</script>
