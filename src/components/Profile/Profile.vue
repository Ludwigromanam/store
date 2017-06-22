<template> 
  
  <div> 
    <h1>{{currentUserName}}</h1> 
    <hr> 
    <img :src="user.profilePicUrl" style="height: 120px"> <br> 
    <p>{{currentUserName}}</p> 
    <p>{{user.uid}}</p> 
    <hr> 
    <pre>{{user}}</pre> 
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters(['user', 'currentUserName'])
    }
  }
</script>
