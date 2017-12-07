<template>
  <v-layout fluid row>
          <v-text-field
            light
            solo
            v-model="search"
            prepend-icon="search"
            placeholder="Search by song tilte, artist, album  or genre"
            style="max-width: 500px; min-width: 128px;"
          ></v-text-field>
        </v-layout>
</template>

<script>

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'song'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
