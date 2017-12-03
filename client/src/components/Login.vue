<template>
  <div>
    <v-container grid-list-md text-xs-center>
       <v-layout row wrap>
         <v-flex xs12>
           <div class="loginContainer">
    <h1>Login</h1>
    <!-- <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-toolbar> -->
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
      </div>
      </v-flex>
    </v-layout>
   </v-container>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
      } catch (error) {
        this.error = error.response.data.error
      }
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
  .loginContainer {
    margin-left: 25%;
    margin-right: 25%;
    padding: 15px;
    border-radius: 9px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  }
  .primaryBtn{
    background-color: #2196F3 !important;
  }
</style>
