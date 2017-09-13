<template>
  <div>
    <h1>Register</h1>

    <!-- <div> -->
      <!-- <label for='email'>Email</label> -->
      <input
        type='text'
        name='email'
        v-model='email'
        placeholder='Email'/>
    <!-- </div> -->
    <br>
    <!-- <div> -->
      <!-- <label for='password'>Password</label> -->
      <input
        type='password'
        name='password'
        v-model='password'
        placeholder='Password'/>
    <!-- </div> -->
    <br>
    <button v-on:click='registerUser()'>Register</button>

  </div>
</template>

<script>
import Auth from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
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
      const response = await Auth.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = 'hello world'
    // }, 2000)
  }
}
</script>

