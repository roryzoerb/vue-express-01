<template>
  <v-toolbar fixed class='cyan' dark>

    <v-toolbar-title class='mr-4'>
      <router-link to='/' class='btn cyan'>
        TabTracker
      </router-link>
    </v-toolbar-title>

    <v-toolbar-items>
      <router-link to='/songs' class='btn cyan'>
        Browse
      </router-link>
    </v-toolbar-items>

    <v-spacer/>
    <v-toolbar-items v-if='!$store.state.userLoggedIn'>
      <router-link to='/signin' class='btn cyan'>
        Sign In
      </router-link>
      <router-link to='/signup' class='btn cyan'>
        Sign Up
      </router-link>
    </v-toolbar-items>
    <v-toolbar-items v-if='$store.state.userLoggedIn'>
      <v-btn flat dark v-on:click='signOut()'>
        Sign Out
      </v-btn>
      <!-- <router-link to='/signin' class='btn cyan'>
        Sign Out
      </router-link> -->
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {
  methods: {
    signOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>

</style>
