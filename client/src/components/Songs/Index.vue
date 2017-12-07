<template>
 <div class="songsWrapper">
    <v-layout row wrap>
      <v-flex class="mr-5 ml-5 mt-5" xs12>
      <auth-panel containerClass="contentContainer"  title="Songs">
        <search-panel />
        <song-panel :songsList="songsList" :flexSize="2" />
      </auth-panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import SongServices from '@/services/SongServices'
import SongPanel from './SongPanel'
import SearchPanel from './SearchPanel'
export default {
  data () {
    return {
      flexSize: 2,
      songsList: null
    }
  },
  methods: {
    createSong () {
      this.$router.push({ name: 'songs-create' })
    }
  },
  components: {
    AuthPanel,
    SongPanel,
    SearchPanel
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
