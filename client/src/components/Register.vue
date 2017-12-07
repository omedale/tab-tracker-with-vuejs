<template>
  <div>
    <v-container grid-list-md text-xs-center>
       <v-layout row wrap>
         <v-flex xs12>
        <auth-panel containerClass="authContainer" title="Register">
           <div class="danger-alert" v-html="error" />
        <br>
          <form
          name="tab-tracker-form"
          autocomplete="off">
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
              autocomplete="new-password"
              required
            ></v-text-field>
          </form>
        <v-btn  class="primaryBtn" @click="register" round color="primary" dark>Register</v-btn>
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
    async register () {
      try {
        const res = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', res.data.token)
        this.$store.dispatch('setUser', res.data.user)
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
