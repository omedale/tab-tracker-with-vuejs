<template>
  <div class="detailWrapper">
   <v-layout row>
    <v-flex xs12>
      <v-card>
        <song-media :youtubeId="song.youtubeId" />
        <song-meta-data :song="song" />
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import SongServices from '@/services/SongServices'
import SongMetaData from './SongMetaData'
import SongMedia from './SongMedia'
export default {
  data () {
    return {
      song: {},
      show: false
    }
  },
  methods: {
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    // console.log(songId)
    this.song = (await SongServices.show(songId)).data

    // if (this.isUserLoggedIn) {
    //   SongHistoryService.post({
    //     songId: songId
    //   })
    // }
  },
  components: {
    SongMetaData,
    SongMedia
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detailWrapper{
  margin-top: 2%;
  margin-left: 15%;
  margin-right: 15%;
}
</style>
