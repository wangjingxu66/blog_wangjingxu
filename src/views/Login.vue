<template>
  <div class="login">
    <LoginContent msg="Welcome to Your Vue.js App"/>
    <LoginFooter :desc="footerDescContent"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginContent from '@/components/login_page/LoginContent.vue'
import LoginFooter from '@/components/login_page/LoginFooter.vue'

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
