<template>
 <div>
    <v-container grid-list-md text-xs-center>
      <h1>Create Song</h1>
       <div class="danger-alert" if="error">
         {{error}}
       </div>
       <v-layout row>
        <br>
        <v-flex xs3>
        </v-flex>
        <v-flex xs6>
         <form
          name="tab-tracker-form"
          autocomplete="off">
            <v-text-field
              label="Title"
              type="text"
              :rules="[required]"
              v-model="song.title"
              required
            ></v-text-field>
            <v-text-field
              label="Artist"
              type="text"
              v-model="song.artist"
              required
            ></v-text-field>
            <v-text-field
              label="Genre"
              type="text"
              v-model="song.genre"
              required
            ></v-text-field>
            <v-text-field
              label="Album"
              type="text"
              v-model="song.album"
              required
            ></v-text-field>
             <v-text-field
              label="Youtube ID"
              type="text"
              :rules="[required]"
              v-model="song.youtubeId"
              required
            ></v-text-field>
            <v-text-field
              label="Album Image URL"
              type="text"
              v-model="song.albumImageUrl"
              required
            ></v-text-field>
          <v-text-field
              name="lyrics"
              label="Lyrics"
              v-model="song.lyrics"
              multi-line
            ></v-text-field>
            <v-text-field
              label="Tab"
              type="text"
              v-model="song.tab"
               multi-line
            ></v-text-field>
          </form>
        <v-btn  class="primaryBtn" @click="save" round color="primary" dark>Save Changes</v-btn>
        </v-flex>
        <v-flex xs3>

        </v-flex>
    </v-layout>
   </v-container>
  </div>
</template>

<script>
import AuthPanel from '@/components/AuthPanel'
import SongServices from '@/services/SongServices'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        const songId = this.$store.state.route.params.songId
        await SongServices.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        // this.error = err.response.data.error
      }
    }
  },
  components: {
    AuthPanel
  },
  async mounted () {
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongServices.show(songId)).data
    } catch (error) {
      this.error = error.response.data.error
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
