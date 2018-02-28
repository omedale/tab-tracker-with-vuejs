<template>
    <v-container grid-list-md text-xs-center>
       <v-layout row wrap>
         <v-flex xs12>
      <auth-panel containerClass="authContainer"  title="Login">
      <div class="danger-alert" v-html="error" />
        <br>
          <form
          name="tab-tracker-form"
          >
            <v-text-field
              label="E-mail"
              type="email"
              v-model="email"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              type="password"
              v-model="password"
              required
            ></v-text-field>
          </form>
        <v-btn  class="primaryBtn" @click="login" round color="primary" dark>Login</v-btn>
      </auth-panel>
      </v-flex>
    </v-layout>
   </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import AuthPanel from '@/components/AuthPanel'
export default {
  name: 'HelloWorld',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      // console.log(value)
    }
  },
  methods: {
    async login () {
      try {
        const res = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.user)
        this.$router.push({ name: 'root' })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.email = "femi";
    // }, 1000);
  },
  components: {
    AuthPanel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .primaryBtn{
    background-color: #2196F3 !important;
  }
</style>
