<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class='white elevation-2'>
        <v-toolbar flat dense class='cyan' dark>
          <v-toolbar-title>Sign Up</v-toolbar-title>
        </v-toolbar>
        <form name='sign-up-form' autocomplete='off'>
          <div class='pl-4 pr-4 pt-2 pb-2'>
            <v-flex>
              <v-text-field
                class='input-group--focused'
                name='email'
                label='Email'
                id='email'
                v-model='email'
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                class='input-group--focused'
                counter
                name='password'
                label='Password'
                id='password'
                v-model='password'
                min='8'
                max='32'
                hint='8 to 32 characters'
                autocomplete='new-password'
                type='password'
              ></v-text-field>
              <div class='red-alert' v-if='error' v-on:click='dismissError()' v-html='error'>
                <div style='float: right; cursor: pointer'><span v-on:click='dismissError()'><i class='ti-close'></i></span></div>
                <div>{{ this.error }}</div>
              </div>
              <v-btn dark class='cyan' v-on:click='signUp()'>Sign Up</v-btn>
            </v-flex>
          </div>
        </form>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
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
    async signUp () {
      try {
        const response = await AuthService.signup({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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

