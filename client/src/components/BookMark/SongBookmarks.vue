<template>
      <v-container fluid grid-list-md class="grey lighten-4">
        <v-layout row wrap>
          <v-data-table
            :headers="headers"
            :pagination.sync="pagination"
            :items="bookmarks">
            <template slot="items" slot-scope="props">
              <td class="text-xs-right">
                {{props.item.title}}
              </td>
              <td class="text-xs-right">
                {{props.item.artist}}
              </td>
            </template>
          </v-data-table>
        </v-layout>
      </v-container>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarkServices'
export default {
  props: {

  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data () {
    return {
      headers: [
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Artist',
          value: 'artist'
        }
      ],
      pagination: {
        sortBy: 'createdAt',
        descending: true
      },
      bookmarks: []
    }
  },
  async mounted () {
    if (this.isUserLoggedIn) {
      this.bookmarks = (await BookmarksService.index()).data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
