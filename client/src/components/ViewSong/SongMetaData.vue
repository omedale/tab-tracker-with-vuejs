<template>
      <div>
        <v-card-title primary-title>
          <div>
            <div class="headline" v-text="song.title"></div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat>
            <v-icon>share</v-icon>
          </v-btn>
          <v-btn
            flat
            :to="{
              name: 'song-edit',
              params () {
                return {
                  songId: song.id
                }
              }
            }">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn
            v-if="isUserLoggedIn && !bookmark"
            flat
            @click="setAsBookmark"
            >
            <v-icon>fa-unlock</v-icon>
          </v-btn>
          <v-btn
          v-if="isUserLoggedIn && bookmark"
            flat
            @click="unBookmark"
            >
            <v-icon>fa-lock</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
        </div>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarkServices'

export default {
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  data () {
    return {
      show: false,
      bookmark: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
        console.log(this.bookmark)
      } catch (err) {
        console.log(err)
      }
    },
    async unBookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  },
  watch: {
    async song () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songId: this.song.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  props: [
    'song'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
