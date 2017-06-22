<template>
  <b-navbar toggleable type="inverse" variant="success">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>Store</span>
    </b-link>

    <template v-if="user.loggedIn">
      <b-collapse is-nav id="nav_collapse">
        
        <b-nav is-nav-bar>
          <b-nav-item to="/stores">Stores</b-nav-item>
        </b-nav>
        
        <b-nav is-nav-bar class="ml-auto">
          
          <b-nav-item-dropdown right>
              
            <!-- Using text slot -->
            <template slot="text">
              <img alt="currentUserName" 
              class="avatar" 
              :src="user.profilePicUrl" 
              height="20" width="20" data-pin-nopin="true">
            </template>
            
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click="signOut">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        
        </b-nav>
      </b-collapse>
    </template>
  </b-navbar>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'NavigationBar',
    computed: {
      ...mapGetters(['user', 'currentUserName'])
    },
    methods: {
      ...mapActions(['signIn', 'signOut'])
    }
  }
</script>

<style>

</style>
