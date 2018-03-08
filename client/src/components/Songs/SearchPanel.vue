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
import _ from 'lodash'
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'song'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style scoped>

</style>
