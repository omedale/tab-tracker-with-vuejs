<template>
  <v-toolbar fixed class="blue" dark>
    <v-toolbar-title class="mr-4">
      <span class="home" @click="navigateTo({ name: 'root' })">
        OmedaleTracker
      </span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark>
        browse
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({ name : 'login' })">
         Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        @click="navigateTo({ name : 'register' })">
         Signup
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.title-bg {
  background-color: #2196F3 !important;
}
.home {
  cursor: pointer;
}
.home:hover {
  color: #dbd6d6;
}
</style>
