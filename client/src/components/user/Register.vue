<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Registration</v-toolbar-title>
        </v-toolbar>
          <div>
            <input
              type='text'
              name='email'
              v-model='email'
              placeholder='Email'/>
          <br>
            <input
              type='password'
              name='password'
              v-model='password'
              placeholder='Password'/>
          <br>
          <div class='red-alert' v-if='error' v-on:click='dismissError' v-html='error'>
            <div style='float: right; cursor: pointer'><span v-on:click='dismissError'><i class='ti-close'></i></span></div>
            <div>{{ this.error }}</div>
          </div>
          <button v-on:click='registerUser()'>Register</button>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Auth from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    // email (value) {
    //   console.log('New email value: ', value)
    // },
    // password (value) {
    //   console.log('New password value: ', value)
    // }
  },
  methods: {
    async registerUser () {
      try {
        const response = await Auth.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    dismissError () {
      this.error = null
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello world'
    // }, 2000)
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

