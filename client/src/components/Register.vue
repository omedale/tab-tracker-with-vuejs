<template>
  <div>
    <h1>Register</h1>
          <input
            type="email"
            name="email"
            v-model="email"
            placeholder="Email" />
          <input
            type="password"
            name="password"
            v-model="password"
            placeholder="Password" />
        <br>
    <button
      @click="register">
      Register
      </button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      // console.log(value)
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: 'omedale@gmnail.com',
        password: 'ayo'
      })
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = "femi";
    // }, 1000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
