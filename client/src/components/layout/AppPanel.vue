<template>
  <!-- <v-layout column>
    <v-flex xs6 offset-xs3> -->
  <div class='white elevation-2'>
    <v-toolbar flat dense class='cyan' dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-toolbar>
    <div class='pl-4 pr-4 pt-2 pb-2'>
      <slot>
      </slot>
      <!-- See Songs.vue for corresponding code -->
      <!-- <slot name='greeting'>
        No GREETING slot defined
      </slot>
      <slot name='message'>
        No MESSAGE slot defined
      </slot> -->
    </div>
    <!-- <div class='red-alert' v-if='error' v-on:click='dismissError' v-html='error'>
      <div style='float: right; cursor: pointer'><span v-on:click='dismissError'><i class='ti-close'></i></span></div>
      <div>{{ this.error }}</div>
    </div> -->
  </div>
    <!-- </v-flex>
  </v-layout> -->
</template>

<script>
export default {
  props: [
    'title'
  ],
  methods: {
    dismissError () {
      // this.props.error = null
    }
  }
}
</script>

<style scoped>
.red-alert {
  background-color: red;
  color: white;
  margin: auto;
  left: 50%;
  width: 60%;
  height: auto;
  padding:10px;
  border-radius: 5px;
}
</style>
