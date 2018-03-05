<template>
 <div class="songsWrapper">
    <v-layout row wrap>
      <v-flex class="mr-5 ml-5 mt-5" xs12>
      <auth-panel containerClass="contentContainer"  title="Bookmark">
        <song-bookmark></song-bookmark>
      </auth-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import SongServices from '@/services/SongServices'
import SongBookmark from './SongBookmarks'
export default {
  data () {
    return {
      flexSize: 2,
      songsList: null
    }
  },
  components: {
    AuthPanel,
    SongBookmark
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songsList = (await SongServices.index(value)).data
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .songsWrapper {
    margin-top: 35px;
  }
</style>
