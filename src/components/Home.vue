<template>
  <div class="hello">
    <template v-if="!user.loggedIn">
      <div id="firebaseui-auth-container"></div>
    </template>
    <template v-else>
      <span> Home Page Logged In </span>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebaseui from 'firebaseui'
import Firebase from '@/api/firebase'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['user', 'currentUserName'])
  },
  mounted () {
    var ui = new firebaseui.auth.AuthUI(Firebase.getAuthObject())
    ui.start('#firebaseui-auth-container', Firebase.getUISettings())
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
