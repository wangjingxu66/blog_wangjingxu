<template>
  <div class="login">
    <ListHeader/>
    <ListAside/>
    <DetailMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListHeader from '@/components/list_page/ListHeader.vue'
import ListAside from '@/components/list_page/ListAside.vue'
import DetailMain from '@/components/detail_page/DetailMain.vue'

export default {
  name: 'listlink',
  components: {
    ListHeader,
    ListAside,
    DetailMain
  }
}
</script>