<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <app-panel title='Sign In'>
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
            type='password'
          ></v-text-field>
          <div class='red-alert' v-if='error' v-on:click='dismissError' v-html='error'>
            <div style='float: right; cursor: pointer'><span v-on:click='dismissError'><i class='ti-close'></i></span></div>
            <div>{{ this.error }}</div>
          </div>
          <v-btn dark class='cyan' v-on:click='signIn()'>Sign In</v-btn>
        </v-flex>
      </app-panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthService from '@/services/AuthService'
import AppPanel from '@/components/layout/AppPanel'
export default {
  components: {
    'app-panel': AppPanel
  },
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
    async signIn () {
      try {
        const response = await AuthService.signin({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/')
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
