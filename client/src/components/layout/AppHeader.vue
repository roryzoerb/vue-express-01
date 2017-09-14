<template>
  <v-toolbar fixed class='cyan' dark>

    <v-toolbar-title class='mr-4'>
      <router-link to='/' class='btn cyan'>
        TabTracker
      </router-link>
    </v-toolbar-title>

    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browser
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer/>
    <v-toolbar-items>
      <router-link to='/signin' class='btn cyan'>
        Sign In
      </router-link>
      <router-link to='/signup' class='btn cyan'>
        Sign Up
      </router-link>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
