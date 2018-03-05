<template>
<v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <!-- <v-flex
            v-bind="{ [`xs${song.flex}`]: true }"
            v-for="song in songs"
            :key="song.title"
          > -->
          <div>
          <router-link :to="{ name: 'songs-create' }">
           <v-btn
              color="blue"
              dark
              medium
              fixed
              bottom
              right
              fab
            >
              <v-icon>add</v-icon>
            </v-btn>
            </router-link>
          </div>
          <v-flex
          @click="navigateTo({
              name: 'view-song',
              params: {
                songId: song.id
              }
            })"
            v-bind="{ [`xs${flexSize}`]: true }"
            v-for="song in songsList"
            :key="song.title"
          >
            <v-card>
              <v-card-media
                :src="song.albumImageUrl"
                height="200px"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="song.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions class="white">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  props: {
    flexSize: Number,
    songsList: Array
  },
  data () {
    return {
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
