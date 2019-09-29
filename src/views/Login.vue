<template>
  <div class="login">
    <LoginContent/>
    <LoginFooter :desc="footerDescContent"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginContent from '@/components/login/LoginContent.vue'
import LoginFooter from '@/components/login/LoginFooter.vue'

export default {
  name: 'loginlink',
  data () {
    return{
      footerDescContent:"所有方：王璟旭"
    }
  },
  components: {
    LoginContent,
    LoginFooter
  }
}
</script>
