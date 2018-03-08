<template>
  <v-toolbar fixed class="blue" dark>
    <v-toolbar-title class="mr-4">
      <router-link
      tag="span"
      class="home"
      :to="{ name: 'root' }"
      >
        OmedaleTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn
        flat
        dark
        :to="{ name : 'song' }">
         Browse
      </v-btn>
    </v-toolbar-items>
     <v-toolbar-items>
      <v-btn
      v-if="$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name : 'bookmark' }">
         Bookmark
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name : 'login' }">
         Login
      </v-btn>

      <v-btn
        v-if="!$store.state.isUserLoggedIn"
        flat
        dark
        :to="{ name : 'register' }">
         Signup
      </v-btn>

      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        dark
        @click="logout">
         Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>

export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
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
